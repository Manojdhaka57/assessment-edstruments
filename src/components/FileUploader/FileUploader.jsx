import React, { useEffect, useState } from 'react';
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
   * @description converting the string value to bytes.
   */
  function toBytes(value) {
    const formattedFileSize = value.split(/([0-9]+)/).filter(Boolean);
    const size = parseInt(formattedFileSize[0]);
    const type = formattedFileSize[1] ? formattedFileSize[1] : 'kb';
    const types = ['B', 'KB', 'MB', 'GB', 'TB'];
    const key = types.indexOf(type.toUpperCase());
    if (typeof key !== 'boolean') {
      return size * 1024 ** key;
    }
    return null;
  }

  /**
   * @description based on the maximumFileSize updating component state [maxState] and need to * *   called the function only once.
   */
  useEffect(() => {
    if (maximumFileSize) {
      const maxSize = toBytes(maximumFileSize);
      setMaxSize(maxSize);
    } else {
      setMaxSize(maximumFileSize);
    }
  }, [maximumFileSize]);
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

  /**
   * @description based on fileRejection variable change updating the onFail function.
   */
  useEffect(() => {
    if (fileRejections.length) {
      onFail(fileRejections);
    }
  }, [fileRejections]);

  /**
   * @description based on acceptedFiles change  updating onSuccess function and returning all uploaded list.
   */
  useEffect(() => {
    if (acceptedFiles.length) {
      let allFiles = [...files];
      for (let i = 0; i < acceptedFiles.length; i++) {
        acceptedFiles[i].id = new Date().toDateString();
        allFiles.push(acceptedFiles[i]);
      }
      onSuccess(acceptedFiles, allFiles);
      setFiles(allFiles);
    }
  }, [acceptedFiles]);
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
