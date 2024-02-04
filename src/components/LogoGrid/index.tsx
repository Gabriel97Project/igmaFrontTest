import React from 'react';
import styled from 'styled-components';


interface SVGGridProps {
  svgs: React.ReactNode[];
  tamanho: string; // Adicionando a propriedade de tamanho
}

const SVGGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; /* Espaçamento entre as colunas */
`;

const SVGWrapper = styled.div<{ tamanho: string }>`
  svg {
    width: auto ;
    height: ${({ tamanho }) => tamanho};
    display: block;
    margin: 0 auto; /* Centralizar o SVG dentro do contêiner */
  }
`;

const SVGGrid: React.FC<SVGGridProps> = ({ svgs, tamanho }) => {
  return (
    <SVGGridContainer>
      {svgs.map((svg, index) => (
        <SVGWrapper key={index} tamanho={tamanho}>
          <img src={svg as string} /> 
        </SVGWrapper>
      ))}
    </SVGGridContainer>
  );
};

export default SVGGrid;
