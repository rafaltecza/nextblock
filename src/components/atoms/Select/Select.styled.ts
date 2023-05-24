import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: -3px;
`;

export const SelectButton = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  background: blue;
  color: #ffffff;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.09);
  border-radius: 36px;
  width: 100%;
  min-width: 191px;
  max-width: 191px;
  margin-top: 3px;
  padding: 3px;
  font-style: normal;
  font-weight: 400;
  z-index: 3;

  .arrow {
    display: inline-block;
    width: 17px;
    margin-left: auto;
    margin-right: 15px;
    &::before,
    &:after {
      position: relative;
      content: '';
      display: block;
      width: 10px;
      height: 2px;
      background: white;
      transition: 0.3s ease-in-out;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      left: 6px;
      top: -2px;
      transform: rotate(-45deg);
    }
  }
`;

export const SelectPopup = styled.div`
  position: absolute;
  z-index: 100;
  background: #3c3c3c;
  border-radius: 30px;
  color: #ffffff;
  padding: 13px;
  max-width: 300px;
  max-height: 384px;
  overflow: hidden;
  transform-origin: top;
  transition: transform .15s ease-in-out;
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 13px;
  cursor: pointer;
  border-radius: 37px;
  padding: 3px;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;

export const CurrencyIcon = styled.img`
margin-right: 10px;
  max-width: 45px;
  max-height: 45px;
/* Add additional styles for your icon here */
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 4px 12px;
  background-color: transparent;
  
/* Add additional styles for your search input here */
`;
