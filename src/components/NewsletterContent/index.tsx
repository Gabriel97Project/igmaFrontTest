import React from 'react'
import {
  NewesletterInviteTextStyle,
  NewsletterButtonStyle,
  NewsletterContentStyle,
  NewsletterEmailStyle,
  NewsletterNameInputStyle,
  NewsletterToSingTextStyle
} from './style'

function NewsletterContent
  () {
  return (
    <NewsletterContentStyle>
      <NewsletterToSingTextStyle>Assine nossa newsletter</NewsletterToSingTextStyle>
      <NewesletterInviteTextStyle>
        Desenvolva-se conosco com conteúdos sobre  Tecnologia e Design a cada 15 dias.
      </NewesletterInviteTextStyle>
      <NewsletterNameInputStyle placeholder='Nome' />
      <NewsletterEmailStyle placeholder='Email' />
      <NewsletterButtonStyle>Assinar Newslatter</NewsletterButtonStyle>
    </NewsletterContentStyle>
  )
}

export default NewsletterContent
