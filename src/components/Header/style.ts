import { styled } from "styled-components";
import { breakpoint } from "../../tokens/breakpoint/breakpoint";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";
import {colors } from "../../tokens/colors/colors";


export const HeaderStyle = styled.div`
  width:100%;
  height:80px;
  background-color: red;
  display:flex;
  flex-direction:row;
  align-items:center;
  position: relative;
`

export const HeaderBoxSizeStyle = styled.div`

  display:flex;
  justify-content:flex-end;
  margin:auto;
  @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width: 1600px;
  };

  @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
     
   
        width:1296px;
       
  }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
       width:944px;
      
      
        
        
      }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
       
        width:390px;
      }
  
`

export const HeaderImagesStyle = styled.img`
 
  width: 120px;
  height:48px;
  position:absolute;
`


export const HeaderButtonStyle = styled.button`
 
  background-color:transparent;

  border-radius:${spaceFontSizeBorderLineHeight.borderRadius.borderRadiusCircle};
  
  
`

export const HeaderUserImageStyle = styled.img`
 border:solid 1px; 
  border-radius:${spaceFontSizeBorderLineHeight.borderRadius.borderRadiusCircle};
  width: 48px;
  height:48px;
  background-color:${colors.brandColors.colorPrimaryMain};
  
 
`