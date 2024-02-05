import React from 'react';
import styled from 'styled-components';
import { GridContainer, GridItem } from './style';


interface SVGGridProps {
  svgs: React.ReactNode[];
  tamanho: string; // Adicionando a propriedade de tamanho
}

/* const SVGGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap:100px;  Espaçamento entre as colunas 
  background-color:red;
  width:937px;
  height:764px;

`;
 */
/* 
const SVGWrapper = styled.div<{ tamanho: string }>`
  border: solid 1px;
 
  svg {
    width: auto ;
    height: ${({ tamanho }) => tamanho};
    display: block;
    margin: 0 auto; Centralizar o SVG dentro do contêiner 
  
  }
`; */

const SVGGrid: React.FC<SVGGridProps> = ({ svgs, tamanho }) => {
  return (
    <GridContainer>
      {svgs.map((svg, index) => (
        <GridItem key={index} tamanho={tamanho}>
          <img src={svg as string}  alt={`svg-${index}`} /> 
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default SVGGrid;
