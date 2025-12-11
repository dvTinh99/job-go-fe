import type { UseFileDialogOptions } from '@vueuse/core'
import { defu } from 'defu'
import type { ApiResponse } from '~/entities/Response'

const heic2any = () => import('heic2any')

export function useUploadImage(options?: UseFileDialogOptions) {
  const authStore = useAuthStore()

  return (callback: (image: string | string[]) => void) => {
    const [upLoading, toggleUpLoading] = useToggle()

    const option: UseFileDialogOptions = defu(options, {
      multiple: false,
      accept: 'image/*'
    })

    const { open, reset, onChange } = useFileDialog(option)

    async function upload(file: File) {
      const formData = new FormData()
      formData.append('user_id', authStore.user!.id.toString())
      if (file.type === 'image/heic') {
        // convert heic to jpg
        const { default: heic2jpg } = await heic2any()
        const blob = await heic2jpg({
          blob: file,
          toType: 'image/jpeg',
          quality: 1
        })
        // ranem heic or heif to upercase of each file to jpg
        const imageName = file.name.split('.')
        imageName[imageName.length - 1] = 'jpg'
        const name = imageName.join('.')
        const image = new File(Array.isArray(blob) ? blob : [blob], name, { type: 'image/jpeg' })
        formData.append('image', image)
      }
      else { formData.append('image', file) }

      const { data } = await useApi<ApiResponse<string[]>>('/proxy/upload-image', {
        method: 'POST',
        body: formData
      })
      return data.value!.data[0]
    }

    onChange(async (files) => {
      toggleUpLoading()
      if (files?.length) {
        const images = []

        for (const file of files) {
          const image = await upload(file)
          images.push(image)
        }

        const output: string | string[] = option.multiple ? images : images[0]

        if (output)
          callback(output)
      }
      reset()
      toggleUpLoading()
    })

    return [open, upLoading] as const
  }
}
