import igmaLogo from "../../assets/logotipoIgma.svg"

import * as Styled from "./style"

function IgmaPresentationTextCountainer() {
  return (
    <Styled.IgmaPresentationTextBox>
      <Styled.IgmaPresentationText>Prazer, somos <Styled.EspacamentoAntesDeIgma><Styled.IgmaLogo src={igmaLogo} alt="Logo marca da Igma" /></Styled.EspacamentoAntesDeIgma></Styled.IgmaPresentationText>
      <Styled.VisionMessage>Acreditamos em um mundo onde experiências incríveis são essenciais.</Styled.VisionMessage>
      <Styled.QualitiesMessage>
        Unimos design e tecnologia para resolver problemas complexos de empresas.
        Criamos produtos digitais que revolucionam o relacionamento entre empresas
        e consumidores.
      </Styled.QualitiesMessage>
    </Styled.IgmaPresentationTextBox>
  )
}

export default IgmaPresentationTextCountainer

