import React, { useEffect, useMemo, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  StyledButtonGroup,
  StyledContent,
  StyledFormContent,
  StyledUploader,
} from './VendorDetails.styled.jsx';
import { formConfig } from './constant.jsx';

const VendorDetails = () => {
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
        <div className='form-group' key={`${field.label}`}>
          <label htmlFor={field.name}>
            {field.label}
            {field.required && <span className='required-field' />}
          </label>
          <Field as='select' name={field.name} className='form-control'>
            <option value=''>{`Select ${field.label}`}</option>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>
          {errors[field.name] ? (
            <div className='error'>{errors[field.name]}</div>
          ) : null}
        </div>
      );
    } else if (field.type === 'text') {
      return (
        <div className='form-group' key={`${field.label}`}>
          <label htmlFor={field.name}>
            {field.label}
            {field.required && <span className='required-field' />}
          </label>
          <div className='input-wrapper'>
            {field.startAdornment && (
              <div className='input-adornment start-adornment'>
                {field.startAdornment}
              </div>
            )}
            <Field type='text' name={field.name} className='form-control' />
          </div>

          {errors[field.name] ? (
            <div className='error'>{errors[field.name]}</div>
          ) : null}
        </div>
      );
    } else if (field.type === 'date') {
      return (
        <div className='form-group' key={`${field.label}`}>
          <label htmlFor={field.name}>
            {field.label}
            {field.required && <span className='required-field' />}
          </label>
          <Field type='date' name={field.name} className='form-control' />
          {errors[field.name] ? (
            <div className='error'>{errors[field.name]}</div>
          ) : null}
        </div>
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

  return (
    <StyledContent>
      <StyledUploader>upldoaer</StyledUploader>
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
                  <div className='form-error-message'>{status.submitError}</div>
                )}
                {status?.success && (
                  <div className='form-success-message'>{status.success}</div>
                )}
                {Object.values(formConfig).map((formField, index) => {
                  return (
                    <div key={index}>
                      <div className='form-field-label'>{formField.label}</div>
                      <div className='form-sub-fields'>
                        {formField.subFields.map((subField, ind) => {
                          return (
                            <div key={`${subField.subLabel}-${ind}`}>
                              {subField.subLabel && (
                                <div
                                  className='form-field-sub-label'
                                  key={`${subField.subLabel}-${ind}`}
                                >
                                  {subField.subLabel}
                                </div>
                              )}
                              <div className='fields-row'>
                                {subField.fields.map((field) =>
                                  getRenderField(field, errors)
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <StyledButtonGroup>
                  <button type='reset' onClick={resetForm}>
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
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </StyledButtonGroup>
              </Form>
            );
          }}
        </Formik>
      </StyledFormContent>
    </StyledContent>
  );
};

export default VendorDetails;
