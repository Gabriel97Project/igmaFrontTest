import { styled } from "styled-components";
import { breakpoint } from "../../tokens/breakpoint/breakpoint";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";
import {colors } from "../../tokens/colors/colors";


export const HeaderStyle = styled.div`
  width:100%;
  height:80px;
 // background-color: red;
  display:flex;
  flex-direction:row;
  align-items:center;
  position: relative;
  position: fixed;
  z-index: 10;
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

type loggedUser = {
  isLogged: boolean;
}

export const HeaderButtonStyle = styled.button<loggedUser>`
 cursor: pointer;
  background-color:transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
    width: 40px;
  border-radius:${spaceFontSizeBorderLineHeight.borderRadius.borderRadiusCircle};
  border:solid 1px; 
  border-radius:${spaceFontSizeBorderLineHeight.borderRadius.borderRadiusCircle};
  background-color:${colors.brandColors.colorPrimaryMain};
  &:hover {
    border: solid 2px ${colors.brandColors.colorPrimaryMain};
  }
  &:active {
    border: solid 2px ${colors.brandColors.colorPrimaryDark};
    background-color:  ${colors.brandColors.colorPrimaryDark};
  }
  overflow: ${({isLogged})=> isLogged ? 'hidden' : 'none'}; ;
  
  
`

export const HeaderUserImageStyle = styled.img<loggedUser>`
 
  width: ${({isLogged})=> isLogged ? '50px' : '20px'}; 
  height:${({isLogged})=> isLogged ? '50px' : '20px'}; 
 
 
`