import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

type CommentsProps = {
  url: string
  title: string
  category: string
}

const Comments = ({ url, title }: CommentsProps) => {
  const completeURL = `${'https://api.marchapelamazonia.org/'}${url}`

  return (
    <S.CommentsWrapper>
      <ReactDisqusComments
        shortname="marcha-pela-amazonia"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

export default Comments
