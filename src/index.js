import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from "./Store";
import { ToastContainer } from "react-toastify";
// import { ThemeProvider } from "@material-tailwind/react";
// import dotenv from 'dotenv';
// dotenv.config();

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
<ToastContainer /> 
  </Provider>
);
