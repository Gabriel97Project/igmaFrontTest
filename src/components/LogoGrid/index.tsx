import React from 'react';
import styled from 'styled-components';
import * as Styled from "./style";


interface SVGGridProps {
  svgs: React.ReactNode[]; 
  sizeSvg:string; 
}
/* A função abaixo usa um map em um array de svgs e com esses svgs,
criamos um estilo para montar um grid e mostrar as imagens. Os  svgs 
sao passados do componente GridAndText content*/
const SVGGrid: React.FC<SVGGridProps> = ({ svgs, sizeSvg }) => {
  return (
    <Styled.GridContainer>
      {svgs.map((svg, index) => (
        <Styled.GridItem key={index} sizeSvg={sizeSvg}>
          <Styled.GridImage className='gridImgSize' src={svg as string}  alt={`svg-${index}`} /> 
        </Styled.GridItem>
      ))}
    </Styled.GridContainer>
  );
};

export default SVGGrid;
