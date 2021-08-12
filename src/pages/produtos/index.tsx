import { useEffect } from 'react'
import AnalisesAtivos from 'templates/analises-ativos'
import { scroller } from 'react-scroll'

export default function Home() {
  useEffect(() => {
    scroller.scrollTo('produtos', {
      duration: 500,
      delay: 0,
      smooth: false,
      offset: -100
    })
  })
  return <AnalisesAtivos />
}
