import { styled } from "styled-components";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";

import { breakpoint } from "../../tokens/breakpoint/breakpoint";

export const BodyStyle = styled.div`

  //background-color:red;
  display:flex;
  flex-direction:column;
  align-items:center;
`;



export const IgmaPresentationStyle = styled.div`
  //background-color:gray;
  width:100%;

  position:relative; 
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:start;
  border: solid 2px;
  padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackXxl};

  

  
  @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:1624px;
        height:900px;
        background-color:yellow;
        

  };

  @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:1296px;
        height:800px;
        
  }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:944px;
        height:584px;
        background-color:green;
        display: flex;
        flex-direction:column-reverse;
        
        
      }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointXs}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:90%;
        margin:auto;
        height:1062px;
        background-color:red;
        padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackXxs}
      }
`;


export const IgmaPresentationContent = styled.div`
   display: flex;
   flex-direction: row;
   justify-content:space-between;
   margin: auto;
   width:90%;
   @media (min-width:  ${breakpoint.breakPointSize.breakpointSm}) {
       
    
        width:80%;
     
        
        
      }
   @media (max-width:  ${breakpoint.breakPointSize.breakpointXs}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        /* width:944px; */
        /* height:584px; */
        
        background-color:green;
        display: flex;
        flex-direction:column-reverse;
        
        
      }
`



export const SmartphoneAnimationStyle = styled.div`
  width:937px;
  height:900px;
  background-color:white;
  display: flex;
  flex-direction:row;
  justify-content:space-around;
`;
export const SmartphoneFirstColumnStyle = styled.div`
  //background-color:gray;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`;

export const SmartphoneSecoundColumnStyle = styled.div`
  //background-color:aliceblue;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`;

export const SmartphoneThirdColumnStyle = styled.div`
 // background-color:azure;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`;

export const SmartphoneFourthColumnStyle = styled.div`
  //background-color:blueviolet;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`;