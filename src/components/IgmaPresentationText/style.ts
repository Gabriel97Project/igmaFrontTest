import styled from 'styled-components';
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";
import { colors } from "../../tokens/colors/colors"
import { breakpoint } from "../../tokens/breakpoint/breakpoint";

export const IgmaPresentationTextBox = styled.div`

  margin-bottom:100px;

    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {  
      width:663px;
      height:556px;
    };
  
    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXs};
      width:531px;
      height:466px;
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      width:384px;
      height:374px;
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXxs};
    };
    @media  (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
      width:342px;
      height:398px;
    };
  
`

export const IgmaPresentationText = styled.p`

  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightMedium};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightSm};
  color:${colors.baseColors.colorBaseDarkMain};
  text-align:left;

    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) { 
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};  
    };
    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXs};
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXxs};  
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXxs};
    };

`

export const EspacamentoAntesDeIgma = styled.span`

  margin-left: ${spaceFontSizeBorderLineHeight.spacingInLine.spacingInlineXxxs};
`;

export const IgmaLogo = styled.img`

  width:73px;
  height:30px;
`

export const VisionMessage = styled.h1`

  font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXxl};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightSemibold};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightSm};
  text-align:left;
   
    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {  
      color:${colors.baseColors.colorBaseDarkHighlight};
    };
    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXl};    
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {  
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeLg};   
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeLg};
    };




`

export const QualitiesMessage = styled.p`
  
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightSemibold};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightLg};
  text-align:left;
  color:${colors.baseColors.colorBaseDarkMain};

    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeLg};
    };
    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};   
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXs}; 
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
      font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXs};
    };




  
`