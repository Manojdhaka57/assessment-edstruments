import styled from 'styled-components';

export const StyledParentUploadSection = styled.section`
  background: inherit;
`;

export const StyledUploadSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #64748b;
  border-style: dashed;
  stroke-width: 4px;
  background-color: #ffffff;
  outline: none;
  transition: border 0.24s ease-in-out;

  > p {
    text-align: center;
  }
`;

export const StyleUploadDesc = styled.p`
  font-size: 0.75rem;
  color: #929292;
`;
