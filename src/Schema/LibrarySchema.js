import * as Yup from "yup";
export const LibrarySchema = {
  Name: "",
  PhoneNo: undefined,
Country: "",
  State: "",
  District: "",
  City: "",
  Area: "",
  LandMark: "",
  PinNo: undefined,
  //  Logo: null,
  Longitude: '',
  Latitude: '',
};

const LibraryValidationSchema = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
  Email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  PhoneNo: Yup.string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Mobile number is not valid")
    .required("Mobile number is required"),
  Contry: Yup.string().required("Contry is required"),
  State: Yup.string().required("State is required"),
  District: Yup.string().required("District is required"),
  City: Yup.string().required("City is required"),
  Area: Yup.string().required("Area is required"),
  LandMark: Yup.string().required("LandMark is required"),
  Longitude: Yup.string().required("Longitude is required"),
  Latitude: Yup.string().required("Latitude is required"),
  PinNo: Yup.string()
    .matches(/^\d{6}$/, "PinNo number is not valid")
    .required("Mobile number is required"),
});

export default LibraryValidationSchema;
