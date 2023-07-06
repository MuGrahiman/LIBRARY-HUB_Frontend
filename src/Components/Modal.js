import React, { useEffect } from "react";
import ReactDOM from "react-dom";
function Modal({ onClose, children, actionBar, title }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      // eslint-disable-next-line no-lone-blocks
      {
        document.body.classList.remove("overflow-hidden");
      }
    };
  }, []);
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-gray-400 opacity-80"></div>
      <div className="fixed inset-0 md:p-20  flex  overflow-y-auto ">
        <div className=" max-h-fit md:max-w-80 m-auto">
          <div className=" flex-col justify-between p-5 md:p-10 bg-white border rounded-lg">
            <div className="flex justify-between mb-10">
              <h1 className="text-lg font-bold">{title}</h1>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                Close
              </button>
            </div>

            {children}

            <div className="flex justify-center">{actionBar}</div>
          </div>
        </div>
      </div>
    </>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
