import { useCallback, useState } from "react";

function useValidator(Schema) {
  const [validatorError, setError] = useState({});
  const runValidator = 
  useCallback(
    (arg) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await Schema.validate(arg, { abortEarly: false});
        setError(null);
        resolve(res);
      } catch (err) {
        const value = JSON.parse(JSON.stringify(err));
        // const validationError = {};
        const validationError = value.inner.reduce((errors, error) => {
            errors[error.path] = { message: error.message };
            return errors;
          }, {});
          console.log(validationError)
        setError(validationError);
        reject(validationError);
      }
    });
  },
  [Schema]);

  return [runValidator, validatorError];
}

export default useValidator;
