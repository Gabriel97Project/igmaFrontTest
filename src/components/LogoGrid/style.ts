import styled from "styled-components";
import { breakpoint } from "../../tokens/breakpoint/breakpoint";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";

export const GridContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap:100px;
    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
      
      width:937px;
      height:764px;
    };

    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}){

      width:749px;
      height:612px;
      grid-column-gap:50px; 
      
    }
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {

      width:544px;
      height:496px;
      column-gap:0px; 
    }
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
      
      width:342px;
      height:744px;
      grid-template-columns: repeat(2, 1fr);
      column-gap:0px;
      padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackSm};
         
    }
`


export const GridImage = styled.img``

export const GridItem = styled.div<{ sizeSvg: string }>`
display: flex;
justify-content: center;
align-items: center;



//border: solid 1px;
  //background-color:green ;
 ${GridImage} {
   
    height: ${({ sizeSvg }) => sizeSvg};
    display: block;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
   ${GridImage}{
      height: 176px;
    }
  }

  @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
   ${GridImage} {
      height: 113px;
    }
  }

  @media (max-width: ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
   ${GridImage} {
      height: 124px;
    }
  }

  @media (max-width: ${breakpoint.breakPointSize.breakpointSm}) {
    
    img {
       max-height: 96px; 
    }
  }


`;




export const GridSvgsStyle = styled.img`
  display:flex;
  align-items:center;
  height:auto;
`