
import IgmaImage from "../IgmaImage";
import IgmaPresentationTextCountainer from "../IgmaPresentationText";
import GridAndTextContent from "../GridAndTextContent";
import { 
  BodyStyle,
  IgmaPresentationStyle,
  IgmaPresentationContent,
  
} from "./BodyStyle";
import SmartphoneImagesContainer from "../SmartphoneImagesContainer";
import NewsletterContent from "../NewsletterContent";




export default function Body(){


 
  return(
    <BodyStyle>
      <IgmaPresentationStyle>
        <IgmaPresentationContent>
          <IgmaImage/>
        <IgmaPresentationTextCountainer/>
        </IgmaPresentationContent>
      </IgmaPresentationStyle>
      
      <GridAndTextContent/>
      <NewsletterContent/>
    <SmartphoneImagesContainer/>
    </BodyStyle>
  )
}