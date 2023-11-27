"use client";

import React from 'react';
import DropzoneComponent from 'react-dropzone'

const Dropzone = ({}) => {
  const maxSize = 20971520;

  return (
    <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({getRootProps, getInputProps, isDragActive, isDragReject, fileRejections}) => {
        const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
        return (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {!isDragActive && 'Click here or drop a file to upload!'}
              {isDragActive && !isDragReject && "Drop it like it's hot!"}
              {isDragReject && "File type not accepted, sorry!"}
              {fileRejections.length > 0 && <div>{fileRejections[0].errors[0].message}</div>}
              {isFileTooLarge && (
                <div className="text-danger mt-2">
                  File is too large.
                </div>
              )}
            </div>
          </section>
        )
      }}
    </DropzoneComponent>
  );
};

export default Dropzone;
// by Rokas with ❤️
