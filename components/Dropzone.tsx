"use client";

import React, {useState} from 'react';
import DropzoneComponent from 'react-dropzone'
import {cn} from "@/lib/utils";

const Dropzone = ({}) => {
  const maxSize = 20971520;
  const [loading, setLoading] = useState(false);
  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.onload = async () => {
        await uploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  const uploadPost = async (selectedFile: File) => {
    if(loading) return;
    setLoading(true);

    setLoading(false);
  }

  return (
    <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({getRootProps, getInputProps, isDragActive, isDragReject, fileRejections}) => {
        const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
        return (
          <section className="m-4">
            <div className={cn("w-full h-52  flex justify-center items-center p-5 border border-dashed rounded-lg" +
              " text-center", isDragActive ? "bg-[#035FFE] text-white animate-pulse" : "bg-slate-100/50" +
              " dark:bg-slate-800/50 text-slate-400")} {...getRootProps()}>
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
