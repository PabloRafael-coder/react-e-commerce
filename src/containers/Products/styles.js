import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d3d3d3;
`;

export const ContainerCategories = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  font-weight: ${props => (props.isActiveColor ? '700' : '')};
  text-transform: uppercase;
  border-bottom: ${props => props.isActiveColor && '3px solid purple'};
  color: ${props => (props.isActiveColor ? 'purple' : '')};
  line-height: 40px;
  cursor: pointer;
`;

export const ImgContainer = styled.img`
  width: 100%;
  height: 70vh;
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 30px;
  gap: 20px;
`;
