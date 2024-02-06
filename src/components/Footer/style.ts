import styled from "styled-components";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";
import { breakpoint } from "../../tokens/breakpoint/breakpoint";
import {colors} from "../../tokens/colors/colors"


export const FooterStyled =styled.div`

  margin-top: 80px;
  height:160px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-top: 1px solid;

    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
      width: 1624px;
    };
    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      width:1296px;   
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      width:944px;   
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
      width:390px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      margin-top:0px;
    };
`

export const FooterIgmaTextStyled =styled.p`

  width:400px;	
  font-family:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightMedium};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightLg};
  color:${colors.baseColors.colorBaseDarkMain};
  text-align:left;
  margin: 0px;
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
      width:100%;
    };
`

export const FooterYearTextStyled =styled.p`

  width:200px;
  font-family:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightMedium};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightLg};
  color:${colors.baseColors.colorBaseDarkMain};
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
      width:100%;
    };
`