import React, { useEffect, useState } from 'react'
import * as Styled from './style'
import { validateEmail, validateName } from '../../utils/utils';
import Modal from '../InfoModal';

type buttonProps = {
  buttonText: string;
}

function NewsletterContent() {
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (email) {
      const isEmailValid = validateEmail(email);
      console.log('isEmailValid', isEmailValid)
      if (!isEmailValid)
        return setEmailError(true);
    }
    return setEmailError(false);
  }, [email])
  useEffect(() => {
    if (name) {
      const isnameValid = validateName(name);
      if (!isnameValid)
        return setNameError(true);
    }
    return setNameError(false);
  }, [name])


  const checkDisableButton = () => {
    if (nameError || emailError || !name || !email) {
      return true
    }
    return false
  }


  return (
    <Styled.NewsletterContentStyle>
      {isModalOpen && (
        <Modal text="Você agora se manterá informado sobre todas as novidades" onClose={closeModal} />
      )}
      <Styled.NewsletterToSingTextStyle>Assine nossa newsletter</Styled.NewsletterToSingTextStyle>
      <Styled.NewesletterInviteTextStyle>
        Desenvolva-se conosco com conteúdos sobre  Tecnologia e Design a cada 15 dias.
      </Styled.NewesletterInviteTextStyle>
      <Styled.InputBox>
        <Styled.NewsletterNameInputStyle error={nameError} placeholder='Nome' value={name} onChange={(e) => setName(e.currentTarget.value)} />
        {nameError && <Styled.ErrorText>Favor colocar nome válido</Styled.ErrorText>}
      </Styled.InputBox>
      <Styled.InputBox>
        <Styled.NewsletterEmailStyle error={emailError} placeholder='Email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
        {emailError && <Styled.ErrorText>Favor colocar email válido</Styled.ErrorText>}
      </Styled.InputBox>


      <Styled.NewsletterButtonStyle error={checkDisableButton()} disabled={checkDisableButton()} onClick={() => openModal()}>Assinar Newslatter</Styled.NewsletterButtonStyle>
    </Styled.NewsletterContentStyle>
  )
}

export default NewsletterContent
