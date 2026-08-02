import { useEffect } from 'react'

interface SEOProps {
  title: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogType?: string
  canonical?: string
}

function upsertMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export default function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogType = 'website',
  canonical,
}: SEOProps) {
  useEffect(() => {
    document.title = title
    if (description) upsertMeta('description', description)
    if (ogTitle) upsertMeta('og:title', ogTitle, 'property')
    if (ogDescription) upsertMeta('og:description', ogDescription, 'property')
    if (ogType) upsertMeta('og:type', ogType, 'property')
    if (canonical) upsertLink('canonical', canonical)
  }, [title, description, ogTitle, ogDescription, ogType, canonical])

  return null
}
