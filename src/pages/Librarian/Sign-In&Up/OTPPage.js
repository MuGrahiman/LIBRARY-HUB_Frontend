import React, { useEffect, useState } from "react";
import Login from "../../../Components/Login";
import { useNavigate, useParams } from "react-router-dom";
import { useOTPMutation, useResendMutation } from "../../../Store";
import useCript from "../../../Hooks/use-Cript";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import { Spinner } from "@material-tailwind/react";

function OTPPage() {
  let ID = useParams().id; // Get the library ID from the URL
  const navigate = useNavigate();
  const [postOTP, results] = useOTPMutation();
  const [reSend, result] = useResendMutation();
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [otp, setOtp] = useState(Array(5).fill(""));
  const inputRefs = Array(5)
    .fill(null)
    .map(() => React.createRef());

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    console.log(result);
    reSend({Role:'library',Id:ID})
      .unwrap()
      .then((res) => {
        console.log(res)
        ID = res?.id;
        toast.info("Resend OTP Successfully");
        setMinutes(1);
        setSeconds(30);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  const handleSubmit = () => {
    console.log(ID)
    postOTP({Data:otp,Role:'library',Id:ID})
      .unwrap()
      .then((res) => {
        const { success,id } = res;
        
        localStorage.setItem("library", success);
        localStorage.setItem("libraryid", id);
        toast.success("Login successfully", {
          onClose: navigate("/library/dashboard"),
        });
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  const otpInput = (
    <div className="w-full flex justify-evenly">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <input
            key={`input-${i}`}
            className=" w-1/6 h-[50px] bg-transparent 
             text-blue-gray-700 font-sans font-normal outline outline-0 
             focus:outline-0 border focus:border-2 text-center
             text-4xl rounded-md border-blue-gray-200 focus:border-blue-500"
            name="OTP"
            type="text"
            size="lg"
            inputMode="numeric"
            onInput={(e) => {
              e.target.value = e.target.value
                .replace(/[^0-9]/g, "")
                .slice(0, 1);
            }}
            ref={inputRefs[i]}
            onChange={(e) => {
              const currentValue = e.target.value;

              setOtp(
                otp.map((value, index) => (index === i ? currentValue : value))
              );

              if (currentValue !== "" && i < inputRefs.length - 1) {
                inputRefs[i + 1].current.focus();
              }
            }}
            value={otp[i]}
          />
        ))}
    </div>
  );

  const timer = (
    <div className="text-light-blue-800 text-xl text-center font-extrabold">
      <div className="countdown-text">
        {result.isLoading ? (
          <div className="flex justify-center w-full gap-8">
            {" "}
            <Spinner className="h-4 w-4" />{" "}
          </div>
        ) : (
          <>
            {seconds > 0 || minutes > 0 ? (
              <p>
                Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            ) : (
              <p>Didn't recieve code?</p>
            )}

            <button
              disabled={seconds > 0 || minutes > 0}
              style={{
                color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#e31414",
              }}
              onClick={resendOTP}
            >
              Resend OTP
            </button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="h-screen flex justify-center items-center">
      <ToastContainer />
      <Login
        isLoading={results.isLoading}
        Content="Enter The OTP"
        InputContent={otpInput}
        OnSubmit={handleSubmit}
        Timer={timer}
      />
    </div>
  );
}

export default OTPPage;
