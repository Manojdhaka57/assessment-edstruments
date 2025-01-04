import React, { useState } from 'react';
import {
  StyledParentUploadSection,
  StyledUploadSection,
  StyleUploadDesc,
} from './FileUploader.styled';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({
  config,
  validation,
  onSuccess,
  onFail,
  onUploadButtonClick,
  files,
  setFiles,
  inputProps,
  fileUploaderLabel,
  fileUploaderDesc,
  fileUploaderListRemove,
  uploadFilesText,
  clearAllText,
  removeIcon,
  uploadButtonText,
}) => {
  const {
    supportedFileTypes = {},
    multiFiles = true,
    maximumFileSize = null,
    isDisable = false,
  } = config;

  const [maxSize, setMaxSize] = useState(0);
  /**
   * @description dropzone hook.
   */
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    fileRejections,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: { ...supportedFileTypes },
    multiple: multiFiles,
    disabled: isDisable,
    maxSize,
    validator: validation,
  });
  return (
    <StyledParentUploadSection>
      <StyledUploadSection
        {...getRootProps({ isFocused, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} {...inputProps} />
        {fileUploaderLabel}
        <StyleUploadDesc>{fileUploaderDesc}</StyleUploadDesc>
      </StyledUploadSection>
    </StyledParentUploadSection>
  );
};

export default FileUploader;
