import { useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'

export default function GlossarioIndex() {
  const router = useRouter()

  const pushRoute = useCallback(() => {
    router.push('/glossario/a')
  }, [router])

  useEffect(() => {
    pushRoute()
  }, [pushRoute])

  return <></>
}
