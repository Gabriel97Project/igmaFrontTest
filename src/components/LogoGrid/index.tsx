import React from 'react';
import styled from 'styled-components';
import { GridContainer, GridItem, GridImage } from './style';


interface SVGGridProps {
  svgs: React.ReactNode[]; 
  sizeSvg:string; 
}
/* A função abaixo usa um map em um array de svgs e com esses svgs,
criamos um estilo para montar um grid e mostrar as imagens. Os  svgs 
sao passados do componente GridAndText content*/
const SVGGrid: React.FC<SVGGridProps> = ({ svgs, sizeSvg }) => {
  return (
    <GridContainer>
      {svgs.map((svg, index) => (
        <GridItem key={index} sizeSvg={sizeSvg}>
          <GridImage className='gridImgSize' src={svg as string}  alt={`svg-${index}`} /> 
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default SVGGrid;
