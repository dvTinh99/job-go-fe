import { joinURL } from 'ufo'

export function useCDN(src: string) {
  const config = useRuntimeConfig()

  const serverDomains: string[] = ['database/', '/database/', '/images/']
  if (serverDomains.some(domain => src.startsWith(domain)))
    return joinURL(config.public.cdnDomain, src)

  return src
}
