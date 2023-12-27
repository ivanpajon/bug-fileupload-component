'use server';

export async function logForm(form: FormData) {
  console.log('File from fileUploadFixedName input', form.get('fileUploadFixedName'));
  console.log('File from fixedName input', form.get('fixedName'));
  console.log('File from someDynamicName input', form.get('someDynamicName'));
  console.log('File from wrongFile input', form.get('wrongFile'));
  console.log('File from correctFile input', form.get('correctFile'));
}
