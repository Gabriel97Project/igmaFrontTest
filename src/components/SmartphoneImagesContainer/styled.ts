
import { styled } from "styled-components";
import { breakpoint } from "../../tokens/breakpoint/breakpoint";


export const SmartphoneAnimationStyle = styled.div`
 
  background-color:white;
  display: flex;
  flex-direction:row;
  justify-content:space-around;

  @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        
    width:937px;
    height:900px;
            
    
      };
    
        @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
         width:748px;
         height:800px;
        }
         @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
   
          width:542px;
         height:680px;
            
        }
        @media  (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
        
          width:387px;
         height: 237px.93px;
         overflow-x:hidden;
        }

`;
export const SmartphoneFirstColumnStyle = styled.div`
  //background-color:gray;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  @media  (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
        
        display:none;
       }

`;

export const SmartphoneSecoundColumnStyle = styled.div`
  //background-color:aliceblue;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  @media  (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
        
        display:none;
       }
`;

export const SmartphoneThirdColumnStyle = styled.div`
 // background-color:azure;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  @media  (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
        
        display:none;
       }
`;

export const SmartphoneFourthColumnStyle = styled.div`
  //background-color:blueviolet;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  @media  (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
        
        display:none;
       }
`;

export const SmartphoneSvgs = styled.img`

            @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
              width: 165px; /* Ajuste o valor conforme necessário */
  height: auto
            }
             @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
       
              width: 130px; /* Ajuste o valor conforme necessário */
            
  height: auto
            }
            @media  (max-width:  ${breakpoint.breakPointSize.breakpointSm}){
      
            }

`
export const SmartphoneMobileSvgStyle = styled.div`
   width:700px;
   height:300px;
   display:flex;
   flex-direction:row;
  
   position: relative; 

   @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
        
        display:none;
                
        
          };
        
            @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
              display:none;
            }
             @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
       
              display:none;
                
            }
            @media (max-width: ${breakpoint.breakPointSize.breakpointSm}) {
      display: flex;
      animation: moveImages 10s linear infinite;
      animation-play-state: running;
   }

   @keyframes moveImages {
      0% {
         transform: translateX(0);
      }
      100% {
         transform: translateX(-100%);
      }
   }

`

export const SmartphoneMobileSvgAnimationStyle = styled.img`
  padding-left:25px;


`