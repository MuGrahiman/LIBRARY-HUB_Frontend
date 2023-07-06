const data = new FormData();
export const FormDataFunction = (Data) => {
  for (const field in Data) {
    data.append(field, Data[field]);
  }
  console.log(data.values());
  return data;
};
