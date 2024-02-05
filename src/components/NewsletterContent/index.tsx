import React,{ useEffect, useState } from 'react' 
import {
  NewesletterInviteTextStyle,
  NewsletterButtonStyle,
  NewsletterContentStyle,
  NewsletterEmailStyle,
  NewsletterNameInputStyle,
  NewsletterToSingTextStyle,
  InputBox,
  ErrorText
} from './style'
import { validateEmail, validateName } from '../../utils/utils';

type buttonProps = {
  buttonText: string;
}

function NewsletterContent () {
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [name, setName] = useState<string | undefined>(undefined);
  const [ email, setEmail] = useState<string | undefined> (undefined);

useEffect(()=>{
if(email){
const isEmailValid = validateEmail(email);
console.log('isEmailValid', isEmailValid)
if(!isEmailValid)
return setEmailError(true);
}
return setEmailError(false);
},[email])
useEffect(()=>{
  if(name){
    const isnameValid = validateName(name);
    if(!isnameValid)
    return setNameError(true);
    }
    return setNameError(false);
},[name])
  return (
    <NewsletterContentStyle>
      <NewsletterToSingTextStyle>Assine nossa newsletter</NewsletterToSingTextStyle>
      <NewesletterInviteTextStyle>
        Desenvolva-se conosco com conteúdos sobre  Tecnologia e Design a cada 15 dias.
      </NewesletterInviteTextStyle>
      <InputBox>
      <NewsletterNameInputStyle error={nameError} placeholder='Nome' value={name} onChange={(e)=> setName(e.currentTarget.value)}/>
      {nameError && <ErrorText>Favor colocar nome válido</ErrorText>}
      </InputBox>
      <InputBox>
      <NewsletterEmailStyle error={emailError} placeholder='Email' value={email} onChange={(e)=> setEmail(e.currentTarget.value)}/>
      {emailError && <ErrorText>Favor colocar email válido</ErrorText>}
      </InputBox>
     
      
      <NewsletterButtonStyle>Assinar Newslatter</NewsletterButtonStyle>
    </NewsletterContentStyle>
  )
}

export default NewsletterContent
