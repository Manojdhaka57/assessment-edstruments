import styled from 'styled-components';

export const HeaderContents = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  background-color: #f1f1f1;
  border-bottom: 2px solid #dfd9d2;
`;

export const StyledHeaderUserBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 4px;
  gap: 6px;
  h3 {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const StyledHeaderTitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #222222;
  text-transform: capitalize;
`;
