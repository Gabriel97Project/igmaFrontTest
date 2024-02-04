import { styled } from "styled-components";
import { spaceFontSizeBorderLineHeight } from "../../tokens/spaceFontSizeBorderLineHeight/spaceFontSizeBorderLineHeight";
import { colors } from "../../tokens/colors/colors"

export const BodyStyle = styled.div`
  width:1624px;
  height:100v;
  //background-color:red;
  display:flex;
  flex-direction:column;
  align-items:center;
`;



export const IgmaPresentationStyle = styled.div`
  //background-color:gray;
  width:100%;
  height:900px;
  position:relative; 
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  border: solid 2px;
  #vetorImage{
    width:60px;
    height:157px;
    position:absolute;
    align-self:center;
    left:95px;
    bottom:305px;
   }
  #igmaPresentationImages{
    display: flex;
    align-items: flex-end;
    //background-color:red;
    height:100%;
   #presentationImage{
   
    height:768px;
    top:132px;
    
   };


  
  }
  
`;



export const IgmaPresentationText = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

  //background-color:green;
  width:663px;
  height:556px;
  margin-bottom:100px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeMd};
  font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightMedium};
  line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightSm};
  color:${colors.baseColors.colorBaseDarkMain};
  text-align:left;

  #visionMessage{
  /*   //padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackXl}; */
    font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeXxl};
    font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightSemibold};
    line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightSm};
    text-align:left;
    color:${colors.baseColors.colorBaseDarkHighlight}
  };

  #qualitiesMessage{
    /* padding-top:${spaceFontSizeBorderLineHeight.spacingStack.spacingStackMd}; */
    font-size:${spaceFontSizeBorderLineHeight.fontSize.fontSizeLg};
    font-weight:${spaceFontSizeBorderLineHeight.fontWeight.fontWeightSemibold};
    line-height:${spaceFontSizeBorderLineHeight.lineHeight.lineHeightLg};
    text-align:left;
    color:${colors.baseColors.colorBaseDarkMain}
  
  };
`

export const EspacamentoAntesDeIgma = styled.span`
  margin-left: ${spaceFontSizeBorderLineHeight.spacingInLine.spacingInlineXxxs};
  //background-color:red;
  #igmaLogo{
    width:73px;
    height:30px;
    
  }
`;
export const SmartphoneAnimationStyle = styled.div`
  width:937px;
  height:900px;
  background-color:white;
  display: flex;
  flex-direction:row;
  justify-content:space-around;
`;
export const SmartphoneFirstColumnStyle = styled.div`
  //background-color:gray;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`;

export const SmartphoneSecoundColumnStyle = styled.div`
  //background-color:aliceblue;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`;

export const SmartphoneThirdColumnStyle = styled.div`
 // background-color:azure;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`;

export const SmartphoneFourthColumnStyle = styled.div`
  //background-color:blueviolet;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`;