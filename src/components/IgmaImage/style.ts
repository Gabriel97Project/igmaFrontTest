import styled from 'styled-components'
import { breakpoint } from "../../tokens/breakpoint/breakpoint";

export const PresentationImageContainer = styled.div`

  height:100%;
  position:relative;
`
export const VetorImageStyle  = styled.img`
    
  position:absolute;

    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
      height:157px;
      width:60px;
      align-self:center;
      left:-25px;
      bottom:50%;
    };
    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      left:-25px;
      bottom:50%;  
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      left:-25px;
      bottom:30%;
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
      left:-18px;
      bottom:35%;
    };

`

export const IgmaPresentationImageBox  = styled.div`

  height: 100%;
`

export const PresentationImage  = styled.img`

  height: 100%;
  object-fit: cover;

    @media (min-width: ${breakpoint.breakPointSize.breakpointLg}) {
      width:525px;
      height:780px;
    };
    @media (max-width: ${breakpoint.breakPointSize.breakpointLg}) and (min-width: ${breakpoint.breakPointSize.breakpointMd}) {
      width:422px;
      height:680px;      
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointMd}) and (min-width: ${breakpoint.breakPointSize.breakpointSm}) {
      width:304px;
      height:504px;
    };
    @media (max-width:  ${breakpoint.breakPointSize.breakpointSm}) {
      width:366px;
      height:560px;
    };

` 