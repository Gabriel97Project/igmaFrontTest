import styled from "styled-components";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";
import {colors} from "../../tokens/colors/colors"
import { breakpoint } from "../../tokens/breakpoint/breakpoint";

export const NewsletterContentStyle = styled.div`
  width: 525px;
  height:534px;
  background-color:red;
`

export const NewsletterToSingTextStyle = styled.p`
  font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightMedium};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightLg};
  color:${colors.baseColors.colorBaseDarkMain};
  text-align:left;

`

export const NewsletterNameInputStyle = styled.input`
  
`

export const NewsletterEmailStyle = styled.input`
  
`