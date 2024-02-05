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
  background-color:greenyellow;
  width:100%;

  position:relative; 
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:start;
  border: solid 2px;
  padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackXxl};

  

  
  @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:1624px;
        height:900px;
       

  };

  @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:1296px;
        height:800px;
         background-color:greenyellow;
  }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:944px;
        height:504px;
        background-color:green;
        display: flex;
        flex-direction:column-reverse;
        
        
      }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
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
   height:100%;
 
      @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
     
        width:80%;

  };

  @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
   // background-color:red;
    width:80%;
  }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
       
        background-color:violet;
        width:80%;
        
        
      }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        //background-color:blue;
        display: flex;
        flex-direction:column-reverse;
        
      }
`

