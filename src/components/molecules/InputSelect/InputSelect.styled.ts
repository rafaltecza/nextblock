import styled from 'styled-components';

export const InputSelectContainer = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: space-between;
  position: relative;

  width: 100%;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 11px 11px 11px 15px;
  background-color: transparent;
  height: 57px;
  color: transparent;
  caret-color: white;
  font-weight: 400;
  font-size: 22px;
  white-space: nowrap;

  ${props => props.active && `
  
  `}
`;