'use client';

import { Button } from 'primereact/button';
import { FileUpload, FileUploadSelectEvent } from 'primereact/fileupload';
import { useRef } from 'react';
import { logForm } from './action';

/**
 * Bug reproduction of FileUpload
 * 
 * For proper behavior, I have to implement the following solution:
 * https://stackoverflow.com/a/76108735
 *
 * @return {*} Form with FileUpload examples
 */
export function FormFileUpload() {
	const inputRef = useRef<HTMLInputElement>(null);

  const dynamicName = 'someDynamicName'; // Dynamic input name

	const onTemplateSelect = (event: FileUploadSelectEvent) => {
    const dataTransfer = new DataTransfer();

    for (const file of event.files) {
			dataTransfer.items.add(file);
    }

		inputRef.current!.files = dataTransfer.files;
  };

  return (
		<form action={logForm} className="card flex flex-col items-center gap-6 mt-4">
      {/* This FileUpload never send file */}
			<FileUpload
				id="fileUpload"
				name="fileUpload"
				mode="advanced"
				accept="image/*"
				maxFileSize={1000000}
			/>
			
      {/* This FileUpload send wrong file in fixedName instead of fileUploadFixedName */}
      <FileUpload
				id="fileUploadFixedName"
				name="fileUploadFixedName"
				mode="advanced"
				accept="image/*"
				maxFileSize={1000000}
				pt={{
					input: { name: 'fixedName' },
				}}
			/>

      {/* This FileUpload send wrong file with key value of dynamicName constant instead of fileUploadDynamicName */}
			<FileUpload
				id="fileUploadDynamicName"
				name="fileUploadDynamicName"
				mode="advanced"
				accept="image/*"
				maxFileSize={1000000}
				pt={{
					input: { name: dynamicName },
				}}
			/>

      {/* This input send correct file in correctFile setted by wrongFile FileUpload */}
			<input ref={inputRef} name="correctFile" type="file" className="hidden" />
      {/* This FileUpload send wrong file in wrongFile, but set the correct file in correctFile */}
			<FileUpload
				mode="advanced"
				accept="image/*"
				maxFileSize={1000000}
				onSelect={onTemplateSelect}
				pt={{
					input: { name: 'wrongFile' },
				}}
			/>

			<Button label="Submit" icon="pi pi-check" iconPos="right" />
		</form>
	);
}
