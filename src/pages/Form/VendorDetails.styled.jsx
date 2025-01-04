import styled from 'styled-components';
import { devices } from '../../utils';
import { Field } from 'formik';

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media ${devices.mobile} {
    flex-direction: column;
  }
`;
export const StyledUploader = styled.div`
  flex: 0 1 50%;
  @media ${devices.mobile} {
    flex: 1 1 100%;
  }
`;

export const StyledFormContent = styled.div`
  flex: 1 1 50%;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;

  /* Input focus states */
  .form-control:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
    outline: none;
  }

  /* Select specific styles */
  select.form-control {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    padding-right: 2.5rem;
  }

  /* Optional: Form field icons */
  .form-group-icon {
    position: relative;
  }

  .form-group-icon i {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6c757d;
  }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  border: 1px solid #e7eaee;
  padding: 16px 20px;
  border-radius: 8px;

  button {
    padding: 12px 20px;
    flex: 1 1 calc(-12px + 50%);
    min-width: 160px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    background-color: #1787e0;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  .reset-btn {
    background-color: #fff;
    color: #0d0f11;
    border: 1px solid #64748b;
  }
`;

export const StyledUploaderWrapper = styled.div`
  padding: 80px 50px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  & .title-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    color: #0d0f11;
  }

  & .title {
    font-size: 20px;
    font-weight: 600;
  }

  & .sub-title {
    font-size: 16px;
    font-weight: 400;
  }

  & .uploder-icon {
    width: 100%;
    height: 100%;
  }
  & .upload-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    button {
      border-radius: 8px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
  & .upload-instruction {
    font-size: 14px;
    font-weight: 400;
    & .link {
      font-weight: 600;
      color: #1787e0;
    }
  }

  @media ${devices.mobile} {
    padding: 5px;
    font-size: 14px;

    .title {
      font-size: 16px;
    }
    .sub-title {
      font-size: 12px;
    }
    .upload-instruction {
      font-size: 12px;
    }
  }
`;

export const StyledFormIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #e8f3fc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledFormSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledFormFieldHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 24px;
  font-weight: 600;
  color: #0d0f11;
`;

export const StyledFormSubField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledFormErrorDiv = styled.div`
  &.form-error-message {
    background-color: #fff3f3;
    color: #dc3545;
    border: 1px solid #ffcdd2;
  }
  /* Icons for Status Messages */
  &.form-error-message::before,
  &.form-success-message::before {
    font-family: Arial, sans-serif;
    font-size: 16px;
  }

  &.form-error-message::before {
    content: '⚠️';
  }

  &.form-success-message::before {
    content: '✓';
  }

  &.form-error-message,
  &.form-success-message {
    padding: 12px 16px;
    margin: 0 0 20px;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    animation: slideIn 0.3s ease;
  }

  /* Success Message Specific Styles */
  &.form-success-message {
    background-color: #f0fff4;
    color: #28a745;
    border: 1px solid #c3e6cb;
  }

  /* Animation for Status Messages */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledSubFieldLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #0d0f11;
`;

export const StyledFormFieldRows = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const StyledInputField = styled.div`
  flex: 1 1 calc(-10px + 50%);
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${devices.mobile} {
    flex: 1 1 100%;
  }
`;

export const StyledInputLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #4b5768;

  .required-field::after {
    content: '*';
    color: #e11900;
    margin-left: 4px;
  }
`;

export const StyledFieldError = styled.div`
  color: #e11900;
  font-size: 12px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #64748b;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  height: 40px;
  padding: 12px;

  ::placeholder {
    color: #6c757d;
    opacity: 0.5;
  }
`;

export const StyledFormFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9f9;

  .input-adornment {
    height: 40px;
    padding: 12px;
    background-color: #e7eaee;
    z-index: 1;
    border: 1px solid #64748b;
    color: #4b5768;
    font-size: 14px;
    font-weight: 400;
  }
  .start-adornment {
    margin-right: -6px;
    border-radius: 8px 0 0 8px;
    border-right: none;
  }
  .end-adornment {
    margin-left: -6px;
    border-left: none;
    border-radius: 0px 8px 8px 0;
  }
`;

export const StyledFormTabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 0px;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const StyledTabs = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  li {
    list-style: none;
    display: block;
    a {
      display: block;
      color: #0d0f11;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
      padding: 12px 16px;

      &.active {
        color: #1787e0;
        border-bottom: 2px solid #1787e0;
        font-weight: 600;
      }
    }
  }

  @media ${devices.mobile} {
    li a {
      padding: 8px;
      font-size: 12px;
    }
  }
`;

export const StyledHeaderTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #0d0f11;
`;
