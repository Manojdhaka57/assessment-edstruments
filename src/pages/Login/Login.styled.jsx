import styled from "styled-components";

export const StyledLoginForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
`;

export const LoginContainer = styled.div`
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
