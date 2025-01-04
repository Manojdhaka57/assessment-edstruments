import React from 'react';
import styled from 'styled-components';
import { Button } from '../../styles/GlobalStyles';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  height: calc(100% - 120px);
  & p {
    color: #413f3fde;
    font-size: 0.85rem;
    padding: 0.25rem 0;
  }
`;
const PageNotFound = () => {
  const navigate = useNavigate();
  const handleOnGoHome = () => {
    navigate(ROUTES.VENDOR_DETAILS);
  };
  return (
    <StyledWrapper>
      <h2>404, Page not found</h2>
      <p>
        you're either misspelled the url or requested a page that's no longer
        here
      </p>
      <Button onClick={handleOnGoHome}>Home</Button>
    </StyledWrapper>
  );
};

export default PageNotFound;
