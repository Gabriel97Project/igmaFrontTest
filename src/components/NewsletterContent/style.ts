import styled from "styled-components";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";
import {colors} from "../../tokens/colors/colors"
import { breakpoint } from "../../tokens/breakpoint/breakpoint";





export const NewsletterContentStyle = styled.div`
  
  display:flex;
  flex-direction:column;
  background-color:red;
    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        
        width: 525px;
        height:534px;
            
    
      };
    
        @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
         width:421px;
         height:462px;
        }
         @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
   
          width:304px;
         height:424px;
            
        }
        @media  (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
        
          width:342px;
         height:400px;
        }
`

export const NewsletterToSingTextStyle = styled.p`
  font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightMedium};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightSm};
  color:${colors.baseColors.colorBaseDarkMain};
  text-align:left;
  margin:0px;
  @media  (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
        
    font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXxs};
      }

`
export const NewesletterInviteTextStyle= styled.div`
  font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeLg};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightSemibold};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightLg};
  color:${colors.baseColors.colorBaseDarkMain};
  text-align:left;
  padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackMd};
  padding-bottom:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackMd};
    @media  (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
        
        font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXs};
          }
  
`


export const NewsletterNameInputStyle = styled.input`
  height:64px;
  color:${colors.baseColors.colorBaseDarkHighlight};
  font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightMedium};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightXl};
  border-bottom:2px solid;
  border-color:${colors.baseColors.colorBaseDarkHighlight};
`

export const NewsletterEmailStyle = styled.input`
    height:64px;
  color:${colors.baseColors.colorBaseDarkHighlight};
  font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightMedium};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightXl};
  margin-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackXxs};
`


export const NewsletterButtonStyle = styled.button`

  height:56px;
  width:213px;

  color:${colors.baseColors.colorBaseLightContrast};
  font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXs};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightSemibold};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightLg};
  padding:${spaceFontSizeBorderLineHeight.spacingInLine.spacingInlineSm};
  border-radius:${spaceFontSizeBorderLineHeight.borderRadius.borderRadiusNone};
  background-color:${colors.baseColors.colorBaseDarkHighlight};
  margin-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackLg};

`