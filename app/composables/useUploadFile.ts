import { ref } from 'vue'
import { useFileDialog } from '@vueuse/core'

type UploadStatus = 'idle' | 'selecting' | 'validating' | 'uploading' | 'success' | 'error'

export function useUploadFile() {
  const file = ref<File | null>(null)
  const error = ref<string | null>(null)
  const status = ref<UploadStatus>('idle')
  const progress = ref(0)
  const uploadedUrl = ref<string | null>(null)

  const MAX_SIZE = 10 * 1024 * 1024 // 10MB

  /**
   * Step 1: choose file
   */
  const { open, onChange, reset } = useFileDialog({
    accept: '.pdf,.doc,.docx',
    multiple: false,
  })

  onChange((files) => {
    error.value = null
    uploadedUrl.value = null

    const selected = files?.[0]
    if (!selected) return

    status.value = 'validating'

    // Step 2: validate size
    if (selected.size > MAX_SIZE) {
      error.value = 'File vượt quá 10MB'
      status.value = 'error'
      return
    }

    file.value = selected
    status.value = 'idle'
  })

  /**
   * Step 3 + 4: upload flow
   */
  const upload = async () => {
    if (!file.value) return

    try {
      status.value = 'uploading'
      progress.value = 0

      /**
       * Step 3: call API generate signed upload data
       */
      const signature = await $fetch<{
        url: string
        fields: Record<string, string>
      }>('/api/upload/generate-url', {
        method: 'GET',
      })

      /**
       * Step 4: upload to Cloudinary
       */
      const formData = new FormData()
      Object.entries(signature.fields).forEach(([key, value]) => {
        formData.append(key, value)
      })
      formData.append('file', file.value)
      formData.append('folder', 'resume')

      await uploadWithProgress(signature.url, formData)

      status.value = 'success'
    } catch (e: any) {
      console.error(e)
      error.value = 'Upload thất bại'
      status.value = 'error'
    }
  }

  /**
   * Upload with progress
   */
  const uploadWithProgress = (url: string, body: FormData) => {
    return new Promise<void>((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          progress.value = Math.round((event.loaded / event.total) * 100)
        }
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const res = JSON.parse(xhr.responseText)
          uploadedUrl.value = res.secure_url
          resolve()
        } else {
          reject(xhr.responseText)
        }
      }

      xhr.onerror = () => reject(xhr.responseText)

      xhr.open('POST', url)
      xhr.send(body)
    })
  }

  const resetAll = () => {
    file.value = null
    error.value = null
    progress.value = 0
    uploadedUrl.value = null
    status.value = 'idle'
    reset()
  }

  return {
    // state
    file,
    error,
    status,
    progress,
    uploadedUrl,

    // actions
    openFileDialog: open,
    upload,
    reset: resetAll,
  }
}
