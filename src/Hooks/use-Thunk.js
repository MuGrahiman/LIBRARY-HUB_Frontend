import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function useThunk(Thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      return dispatch(Thunk(arg))
        .unwrap()
        .then((res) => res)
        .catch((errror) =>{ 
          // console.log(errror)
          setIsError(errror)
          throw errror
        })
        .finally(() => setIsLoading(false));
    },
    [dispatch, Thunk]
  );
  return [runThunk, isError, isLoading];
}

export default useThunk;
