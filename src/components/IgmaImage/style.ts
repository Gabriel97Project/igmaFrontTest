import styled from 'styled-components'
import { breakpoint } from "../../tokens/breakpoint/breakpoint";

export const PresentationImageContainer = styled.div`
  height:100%;
  position:relative;
`

export const VetorImageStyle  = styled.img`
  width:60px;
    height:157px;
    position:absolute;
    align-self:center;
    left:-25px;
    bottom:40%;
`

export const IgmaPresentationImageBox  = styled.div`
height: 100%;
`

export const PresentationImage  = styled.img`
  //width: 200px;
  height: 100%;
  object-fit: cover;
  

  @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:525px;
        height:780px;
       
        

  };

  @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:422px;
        height:680px;
        
  }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:304px;
        height:504px;
      
      
        
        
      }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointXs}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:90%;
        height:560px;
       
      }

` 