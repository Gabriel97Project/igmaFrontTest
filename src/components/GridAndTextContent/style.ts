import styled from "styled-components";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";
import { breakpoint } from "../../tokens/breakpoint/breakpoint";
import {colors} from "../../tokens/colors/colors"


export const GridAndTextContentStyle = styled.div`
  width:1624px;
  height: 900px;
  background-color:blue;


  @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:1624px;
      height: 900px;
       
        

  };

  @media  (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:1296px;
        height: 800px;
  }
      @media(max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:944px;
        height:656px;
      
      
        
        
      }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:390px;
        height:960px;
       
      }

`;

export const GridTextBoxStyle = styled.p`

  
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightSemibold};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightLg};
  color:${colors.baseColors.colorBaseDarkMain};
  text-align:left;

  @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:525px;
        height:240px;
       font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeLg};
        

  };

  @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}){
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:421px;
        height:180px;
        font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};
      
  }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:304px;
        height:120px;
        font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXs};
      
    
      }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:342px;
        height:96px;

        padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackXxl};
        margin:0px;
      }

`;

export const GridAndTexResponsiveSizeBox = styled.div`

  width:100%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;

/*   @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}){
    justify-content:space-around;
  } */
  
  @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
      display:flex;
      flex-direction:column;
       
  }
`