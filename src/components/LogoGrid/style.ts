import styled from "styled-components";
import { breakpoint } from "../../tokens/breakpoint/breakpoint";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";

export const GridContainer = styled.div`

  display: grid;
  
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap:100px; /* Espaçamento entre as colunas */
  background-color:red;
  
  
 
  @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:937px;
        height:764px;

        

  };

  @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}){
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:749px;
        height:612px;
        grid-column-gap:50px; 
        background-color:aqua;
  }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:544px;
        height:496px;
        column-gap:0px;
      
        background-color:yellow;
        
      }
      @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
        /* Defina seus estilos para telas maiores que 1440 pixels aqui */
        width:342px;
        height:744px;
        background-color:aqua;
        grid-template-columns: repeat(2, 1fr);
        column-gap:0px;
        padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackSm};
      
       
      }
`

export const GridItem = styled.div<{ tamanho: string }>`


  border: solid 1px;
  background-color:green ;
  img {
    width: auto;
    height: ${({ tamanho }) => tamanho};
    display: block;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
    img{
      height: 176px;
    }
  }

  @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
    img {
      height: 113px;
    }
  }

  @media (max-width: ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
    img {
      height: 124px;
    }
  }

  @media (max-width: ${breakpoint.breakPointSize.breakpointSm}) {
    
    img {
       max-height: 96px; 
    }
  }
`;
