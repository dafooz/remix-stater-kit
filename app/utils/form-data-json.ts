export const formData2JSON = (formData: FormData): { [key: string]: any } => {
  const formJSON: { [key: string]: any } = {};
  for (var key of formData.keys()) {
    formJSON[key] = formData.get(key);
  }
  return formJSON;
};
