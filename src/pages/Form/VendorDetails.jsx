import React, { useEffect, useMemo, useState } from 'react';
import { Formik, Form } from 'formik';
import { HiUpload } from 'react-icons/hi';
import * as Yup from 'yup';
import {
  StyledButtonGroup,
  StyledContent,
  StyledField,
  StyledFieldError,
  StyledFormContainer,
  StyledFormContent,
  StyledFormErrorDiv,
  StyledFormFieldWrapper,
  StyledFormFieldHeader,
  StyledFormFieldRows,
  StyledFormIcon,
  StyledFormSubContainer,
  StyledFormSubField,
  StyledInputField,
  StyledInputLabel,
  StyledSubFieldLabel,
  StyledUploader,
  StyledUploaderWrapper,
  StyledFormTabs,
  StyledTabs,
  StyledHeaderTitle,
} from './VendorDetails.styled.jsx';
import { formConfig, formTabs } from './constant.jsx';
import FileUploader from '../../components/FileUploader/FileUploader.jsx';
import { Button } from '../../styles/GlobalStyles.jsx';
import { ReactComponent as FileUploderIcon } from '../../images/fileUploder.svg';

const VendorDetails = () => {
  const [selectedTab, setSelectedTab] = useState('Vendor Details');
  // Dynamic validation schema based on formConfig
  const validationSchema = useMemo(() => {
    let schemaFields = {};

    // Build schema from formConfig
    Object.values(formConfig).forEach((section) => {
      section.subFields.forEach((subField) => {
        subField.fields.forEach((field) => {
          if (field.required) {
            // Basic validation based on field type
            let fieldValidation = Yup.string();

            switch (field.type) {
              case 'date':
                fieldValidation = Yup.date();
                break;
              case 'number':
                fieldValidation = Yup.number();
                break;
              case 'email':
                fieldValidation = Yup.string().email('Invalid email format');
                break;
              default:
                fieldValidation = Yup.string();
            }

            // Add required validation
            fieldValidation = fieldValidation.required(
              `${field.label} is required`
            );

            // Add any additional validation rules
            if (field.min) {
              fieldValidation = fieldValidation.min(
                field.min,
                `Minimum ${field.min} characters required`
              );
            }
            if (field.max) {
              fieldValidation = fieldValidation.max(
                field.max,
                `Maximum ${field.max} characters allowed`
              );
            }

            schemaFields[field.name] = fieldValidation;
          }
        });
      });
    });

    return Yup.object().shape(schemaFields);
  }, []);
  // Initial form values - check localStorage first, otherwise use defaults
  const getInitialValues = () => {
    const savedData = localStorage.getItem('vendorFormData');
    return savedData ? JSON.parse(savedData) : {};
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, setErrors, setStatus }) => {
    try {
      // Create an object to store validation errors
      const validationErrors = {};

      // Check each required field in formConfig
      Object.values(formConfig).forEach((section) => {
        section.subFields.forEach((subField) => {
          subField.fields.forEach((field) => {
            if (field.required && !values[field.name]) {
              validationErrors[field.name] = `${field.label} is required`;
            }
          });
        });
      });

      // If there are validation errors, set them and stop submission
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setStatus({ submitError: 'Please fill in all required fields' });
        return;
      }

      // Add your API call or submission logic here
      localStorage.setItem('vendorFormData', JSON.stringify({}));

      // Clear any previous status messages
      setStatus({ success: 'Form submitted successfully' });
    } catch (error) {
      setStatus({ submitError: 'An error occurred while submitting the form' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleFormChange = (values) => {
    try {
      localStorage.setItem('vendorFormData', JSON.stringify(values));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  const getRenderField = (field, errors) => {
    if (field.type === 'select') {
      return (
        <StyledInputField className='form-group' key={`${field.label}`}>
          <StyledInputLabel htmlFor={field.name}>
            {field.label}
            {field.required && <span className='required-field' />}
          </StyledInputLabel>
          <StyledField as='select' name={field.name} className='form-control'>
            <option value=''>{`Select ${field.label}`}</option>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledField>
          {errors[field.name] ? (
            <StyledFieldError className='error'>
              {errors[field.name]}
            </StyledFieldError>
          ) : null}
        </StyledInputField>
      );
    } else if (field.type === 'text') {
      return (
        <StyledInputField className='form-group' key={`${field.label}`}>
          <StyledInputLabel htmlFor={field.name}>
            {field.label}
            {field.required && <span className='required-field' />}
          </StyledInputLabel>
          <StyledFormFieldWrapper className='input-wrapper'>
            {field.startAdornment && (
              <div className='input-adornment start-adornment'>
                {field.startAdornment}
              </div>
            )}
            <StyledField
              type='text'
              name={field.name}
              className='form-control'
              placeholder={field.placeholder}
            />
            {field.endAdornment && (
              <div className='input-adornment end-adornment'>
                {field.endAdornment}
              </div>
            )}
          </StyledFormFieldWrapper>

          {errors[field.name] ? (
            <StyledFieldError className='error'>
              {errors[field.name]}
            </StyledFieldError>
          ) : null}
        </StyledInputField>
      );
    } else if (field.type === 'date') {
      return (
        <StyledInputField className='form-group' key={`${field.label}`}>
          <StyledInputLabel htmlFor={field.name}>
            {field.label}
            {field.required && <span className='required-field' />}
          </StyledInputLabel>
          <StyledField type='date' name={field.name} className='form-control' />
          {errors[field.name] ? (
            <StyledFieldError className='error'>
              {errors[field.name]}
            </StyledFieldError>
          ) : null}
        </StyledInputField>
      );
    }
  };
  const AutoSave = ({ values, onSave }) => {
    const [showSaveIndicator, setShowSaveIndicator] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        onSave(values);
        setShowSaveIndicator(true);

        // Hide the indicator after 2 seconds
        setTimeout(() => {
          setShowSaveIndicator(false);
        }, 100);
      }, 100);

      return () => clearTimeout(timeoutId);
    }, [values, onSave]);

    return (
      <div
        className={`save-indicator ${showSaveIndicator ? 'visible' : ''}`}
      ></div>
    );
  };

  const FileUploaderLabel = () => {
    return (
      <StyledUploaderWrapper className='uploade-container'>
        <div className='title-container'>
          <div className='title'>Upload Your Invoice</div>
          <div className='sub-title'>To auto-populate fields and save time</div>
        </div>
        <div className='uploder-icon'>
          <FileUploderIcon />
        </div>
        <div className='upload-btn'>
          <Button>
            <span>Upload File</span> <HiUpload />
          </Button>
        </div>
        <div className='upload-instruction'>
          <span className='link'>Click to upload</span> or Drag and drop
        </div>
      </StyledUploaderWrapper>
    );
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <StyledFormTabs>
        <StyledHeaderTitle>Create New Invoice</StyledHeaderTitle>
        <StyledTabs>
          {formTabs.map((tab, index) => (
            <li key={index}>
              <a
                href={`#${tab}`}
                className={tab === selectedTab && 'active'}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </a>
            </li>
          ))}
        </StyledTabs>
      </StyledFormTabs>

      <StyledContent>
        <StyledUploader>
          <FileUploader
            onFail={() => {}}
            onUploadButtonClick={() => {}}
            files={[]}
            setFiles={() => {}}
            fileUploaderLabel={<FileUploaderLabel />}
            config={{
              supportedFileTypes: {
                'text/csv': ['.csv'],
              },
              multiFiles: false,
              isDisable: false,
              maximumFileSize: '1GB',
              fileType: '.csv',
            }}
          />
        </StyledUploader>
        <StyledFormContent>
          <Formik
            initialValues={getInitialValues()}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnBlur={true}
            validateOnChange={true}
            validateOnSubmit={true}
          >
            {({
              values,
              errors,
              resetForm,
              status,
              isSubmitting,
              setSubmitting,
              setErrors,
              setStatus,
            }) => {
              return (
                <Form>
                  <AutoSave values={values} onSave={handleFormChange} />
                  {/* Show form-level status messages */}
                  {status?.submitError && (
                    <StyledFormErrorDiv className='form-error-message'>
                      {status.submitError}
                    </StyledFormErrorDiv>
                  )}
                  {status?.success && (
                    <StyledFormErrorDiv className='form-success-message'>
                      {status.success}
                    </StyledFormErrorDiv>
                  )}
                  <StyledFormContainer className='form-container'>
                    {Object.values(formConfig).map((formField, index) => {
                      return (
                        <StyledFormSubContainer
                          key={index}
                          id={formField.label}
                        >
                          <StyledFormFieldHeader className='form-field-label'>
                            {formField?.icon && (
                              <StyledFormIcon>{formField?.icon}</StyledFormIcon>
                            )}
                            <div>{formField.label}</div>
                          </StyledFormFieldHeader>

                          {formField.subFields.map((subField, ind) => {
                            return (
                              <StyledFormSubField
                                key={`${subField.subLabel}-${ind}`}
                                className='form-sub-field'
                              >
                                {subField.subLabel && (
                                  <StyledSubFieldLabel
                                    className='form-field-sub-label'
                                    key={`${subField.subLabel}-${ind}`}
                                  >
                                    {subField.subLabel}
                                  </StyledSubFieldLabel>
                                )}
                                <StyledFormFieldRows className='fields-row'>
                                  {subField.fields.map((field) =>
                                    getRenderField(field, errors)
                                  )}
                                </StyledFormFieldRows>
                              </StyledFormSubField>
                            );
                          })}
                        </StyledFormSubContainer>
                      );
                    })}
                    <StyledButtonGroup>
                      <button
                        type='reset'
                        className='reset-btn'
                        onClick={resetForm}
                      >
                        Reset All
                      </button>
                      <button
                        type='submit'
                        onClick={() =>
                          handleSubmit(values, {
                            setSubmitting,
                            setErrors,
                            setStatus,
                          })
                        }
                      >
                        Submit and New
                      </button>
                    </StyledButtonGroup>
                  </StyledFormContainer>
                </Form>
              );
            }}
          </Formik>
        </StyledFormContent>
      </StyledContent>
    </div>
  );
};

export default VendorDetails;
