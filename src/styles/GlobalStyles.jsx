import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html{
    font-size: 16px;
    scroll-behavior: smooth;
  }
  .error-message{
    color: #e74c3c;
    font-size: 14px;
    margin-top: 5px;
  }
`;
export const Button = styled.button`
  border: 1px solid #64748b;
  border-radius: 8px;
  padding: 8px 16px;
  box-shadow: 'none';
  font-weight: 700;
  background-color: #fff;
  cursor: pointer;
  color: #0d0f11;
  &.secondary-btn {
    background-color: #1787e0;
    color: #fff;
    border: none;
  }
`;
