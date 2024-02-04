import igmaLogo from "../../assets/logotipoIgma.svg"

import { EspacamentoAntesDeIgma, IgmaLogo, IgmaPresentationText, IgmaPresentationTextBox, QualitiesMessage, VisionMessage } from "./style"

function IgmaPresentationTextCountainer() {
  return (
    <IgmaPresentationTextBox>
      <IgmaPresentationText>Prazer, somos <EspacamentoAntesDeIgma><IgmaLogo src={igmaLogo} alt="Logo marca da Igma" /></EspacamentoAntesDeIgma></IgmaPresentationText>
      <VisionMessage>Acreditamos em um mundo onde experiências incríveis são essenciais.</VisionMessage>
      <QualitiesMessage>
        Unimos design e tecnologia para resolver problemas complexos de empresas.
        Criamos produtos digitais que revolucionam o relacionamento entre empresas
        e consumidores.
      </QualitiesMessage>
    </IgmaPresentationTextBox>
  )
}

export default IgmaPresentationTextCountainer

