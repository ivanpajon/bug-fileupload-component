'use server';

export async function logForm(form: FormData) {
  // This FormData SHOULD have an entry with id and name 'fixedName'
  console.log(form.get('fileUploadFixedName'));
  console.log(form.get('fixedName'));
  console.log(form.get('someDynamicName'));
}
