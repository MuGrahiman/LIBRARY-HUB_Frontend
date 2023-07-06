// import CryptoJS from "crypto-js";

import cryptoJs from "crypto-js";

function useCript() {
  // Encrypt the plaintext using AES encryption algorithm and the generated key
  const encryptTheData = (data) => {
    console.log(data);
    console.log(process.env.REACT_APP_Crypt_Key);
    const DS = data.toString()
  
const encrypted = cryptoJs.AES.encrypt(DS, process.env.REACT_APP_Crypt_Key, { iv: process.env.REACT_APP_Crypt_Key }).toString();
    console.log(encrypted);

    return encrypted;
  };

  const decryptTheData = (data) => {
    console.log(`inside the decryptData ${data}`);
    const decrypted = cryptoJs.AES.decrypt(data,  process.env.REACT_APP_Crypt_Key, { iv: process.env.REACT_APP_Crypt_Key });
    const decryptedData = decrypted.toString(cryptoJs.enc.Utf8);

    return decryptedData;
  };

  return [encryptTheData, decryptTheData];
}

export default useCript;
