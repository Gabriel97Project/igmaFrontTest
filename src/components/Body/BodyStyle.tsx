import { styled } from "styled-components";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";

import { breakpoint } from "../../tokens/breakpoint/breakpoint";

export const BodyStyle = styled.div`

  margin-bottom: 80px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const IgmaPresentationStyle = styled.div`
 
  width:100%;
  position:relative; 
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:start;
  padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackXxl};

    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
      width:1624px;
      height:900px;
    };

    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      width:1296px;
      height:800px;
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      width:944px;
      height:504px;
      display: flex;
      flex-direction:column-reverse;
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
      width:90%;
      margin:auto;
      height:1062px;
      margin-top: 40px;
      padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackXxs}
    };
`;


export const IgmaPresentationContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin: auto;
  height:100%;
 
    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
      width:80%;
    };

    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      width:80%;
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      width:80%;    
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
      display: flex;
      flex-direction:column-reverse;
    };
`

export const NewsletterAndSmartphoneImagesContainer= styled.div`

  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;

    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
      width:1624px;
      height:900px;
    };

    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      width:1296px;
      height:800px;
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      width:944px;
      height:680px;  
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
      width:390px;
      height:798px;
      flex-direction:column;
      justify-content:space-evenly;
    };

  
`
