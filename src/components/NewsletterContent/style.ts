import styled from "styled-components";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";
import {colors} from "../../tokens/colors/colors"
import { breakpoint } from "../../tokens/breakpoint/breakpoint";





export const NewsletterContentStyle = styled.div`
  
  display:flex;
  flex-direction:column;

    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) { 
      width: 525px;
      height:534px;
    };
    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      width:421px;
      height:462px;
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      width:304px;
      height:424px;
    };
    @media  (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
      width:342px;
      height:400px;
    };
`

export const NewsletterToSingTextStyle = styled.p`
  
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightMedium};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightSm};
  color:${colors.baseColors.colorBaseDarkMain};
  text-align:left;
  margin:0px;

    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};
    };
    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXs};
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXxs};
    };
       

`
export const NewesletterInviteTextStyle= styled.div`
  
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightSemibold};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightLg};
  color:${colors.baseColors.colorBaseDarkMain};
  text-align:left;
  padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackMd};
  padding-bottom:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackMd};

    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeLg};
    };
    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXs};
    };
 
  
`

export const InputBox =  styled.div`

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  min-height: 86px;

`

type buttonPropsType = {
  error?: boolean;
};


export const NewsletterNameInputStyle = styled.input<buttonPropsType>`

  --webkit-appearance: none;
  height:64px;
  color:${colors.baseColors.colorBaseDarkHighlight};
  font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightMedium};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightXl};
  border: none;
  border-bottom: 2px solid;
  border-color:${({error})=>  error ? colors.feedbackColors.colorErrorDark : colors.baseColors.colorBaseDarkHighlight};
    &::placeholder {
      color: ${colors.baseColors.colorBaseDarkHighlight}
    };
    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {  
      height:64px;
    };
    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      height:55px;
    };
      
    &:focus {
      outline: none;
      border-bottom: 2px solid;
    };
     
`

export const NewsletterEmailStyle = styled(NewsletterNameInputStyle)`
`
  type isDisabled = {
    error: boolean;
  };

export const NewsletterButtonStyle = styled.button<isDisabled>`

  cursor: pointer;
  height:48px;
  width:180px;
  font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXs};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightSemibold};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightLg};
  border-radius:${spaceFontSizeBorderLineHeight.borderRadius.borderRadiusNone};
  margin-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackLg};
  background-color:${({error})=>  error ? colors.baseColors.colorBaseDarkContrastDisabled : colors.baseColors.colorBaseDarkHighlight};
  color:${({error})=>  error ? colors.baseColors.colorBaseLightSecondary : colors.baseColors.colorBaseLightContrast} 
 ;

`

export const ErrorText = styled.p`

  font-size: ${spaceFontSizeBorderLineHeight.fontSize.fontSizeXxs};
  color: ${colors.feedbackColors.colorErrorDark};
  margin: 0px;

`;