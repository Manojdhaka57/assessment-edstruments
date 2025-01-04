import styled from 'styled-components';
import { devices } from '../../utils';

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 24px;
  @media ${devices.mobile} {
    flex-direction: column;
  }
`;
export const StyledUploader = styled.div`
  border: 1px solid black;
  flex: 0 1 50%;
  @media ${devices.mobile} {
    flex: 1 1 100%;
  }
`;

export const StyledFormContent = styled.div`
  flex: 1 1 50%;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .form-error-message,
  .form-success-message {
    padding: 12px 16px;
    margin: 0 0 20px;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    animation: slideIn 0.3s ease;
  }

  .form-error-message {
    background-color: #fff3f3;
    color: #dc3545;
    border: 1px solid #ffcdd2;
  }

  /* Success Message Specific Styles */
  .form-success-message {
    background-color: #f0fff4;
    color: #28a745;
    border: 1px solid #c3e6cb;
  }

  /* Icons for Status Messages */
  .form-error-message::before,
  .form-success-message::before {
    font-family: Arial, sans-serif;
    font-size: 16px;
  }

  .form-error-message::before {
    content: '⚠️';
  }

  .form-success-message::before {
    content: '✓';
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

  /* Fields Row Container */
  .fields-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 16px;
  }

  /* Form Group */
  .form-group {
    flex: 1 1 calc(-10px + 50%);
    min-width: 150px;
    margin-bottom: 1.5rem;
    position: relative;
  }

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #333333;
    margin-bottom: 0.5rem;
  }
  .form-control {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  }

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

  /* Date input specific styles */
  input[type='date'].form-control {
    padding-right: 0.5rem;
  }

  /* Error states */
  .error {
    color: #dc3545;
    font-size: 0.75rem;
    margin-top: 0.25rem;
    position: absolute;
    bottom: -20px;
  }
  .form-control.error {
    border-color: #dc3545;
  }

  /* Submit Button */
  button[type='submit'],
  button[type='reset'] {
    width: 48%;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    background-color: #4a90e2;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  button[type='submit']:hover {
    background-color: #357abd;
  }

  button[type='submit']:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  /* Optional: Form field icons */
  .form-group-icon {
    position: relative;
  }

  .form-group-icon .form-control {
    padding-left: 2.5rem;
  }

  .form-group-icon i {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6c757d;
  }

  /* Optional: Disabled state */
  .form-control:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }

  /* Optional: Required field indicator */
  label.required::after {
    content: '*';
    color: #dc3545;
    margin-left: 4px;
  }

  /* Optional: Input placeholder styling */
  .form-control::placeholder {
    color: #6c757d;
    opacity: 0.5;
  }

  /* Optional: Hover states */
  .form-control:hover {
    border-color: #b3b3b3;
  }

  .form-field-label {
    font-size: 1.8rem;
    font-weight: 600;
    color: #333333;
    margin-bottom: 12px;
    padding-bottom: 8px;
  }

  /* Sub Fields Container */
  .form-sub-fields {
    margin-bottom: 24px;
  }

  /* Sub Label Styling */
  .form-field-sub-label {
    font-size: 1.1rem;
    font-weight: 500;
    color: #495057;
    margin-bottom: 24px;
  }

  /* Required Field Indicator */
  .required-field::after {
    content: '*';
    color: #dc3545;
    margin-left: 4px;
  }
  @media ${devices.mobile} {
    .form-container {
      padding: 1rem;
    }

    .form-control {
      padding: 0.625rem 0.875rem;
    }

    .form-group {
      flex: 1 1 100%;
      min-width: 150px;
      margin-bottom: 1.5rem;
      position: relative;
    }
  }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;
