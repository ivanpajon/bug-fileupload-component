'use server';

export async function logForm(form: FormData) {
  // console.log(form.get('fileUploadFixedName'));
  // console.log(form.get('fixedName'));
  // console.log(form.get('someDynamicName'));
  console.log(form.get('wrongFile'));
  console.log(form.get('correctFile'));
}
