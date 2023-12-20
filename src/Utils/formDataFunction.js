const data = new FormData();
export const FormDataAppend = (Data) => {
  for (const field in Data) {
    if(field === 'CoverBook')console.log(Data[field])
    data.append(field, Data[field]);
  }

  // Display the key/value pairs
  for (const pair of data.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
  }
  
  return data;
};
