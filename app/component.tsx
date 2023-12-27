'use client';

import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { logForm } from './action';

export function FormFileUpload() {
  const dynamicName = 'someDynamicName';

  return (
		<form action={logForm} className="card flex flex-col items-center gap-6 mt-4">
      {/* This form never send file */}
			<FileUpload id="fileUpload" name="fileUpload" mode="advanced" accept="image/*" maxFileSize={1000000} />
			
      {/* This form send file in fixedName instead of fileUploadFixedName */}
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

      {/* This form send file with value key of dynamicName constant instead of fileUploadDynamicName */}
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

			<Button label="Submit" icon="pi pi-check" iconPos="right" />
		</form>
	);
}
