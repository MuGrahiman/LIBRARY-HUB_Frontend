import * as Yup from "yup";

export const schema = {
  Name: "",
  Email: "",
  PhoneNo: undefined,
  DOB: undefined,
  Gender: "",
  Contry: "",
  State: "",
  City: "",
  Area: "",
  LandMark: "",
  District: "",
  House: "",
  Post: "",
  Occupation: "",
  PinNo: undefined,
};
const UserSchema = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
  Email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  PhoneNo: Yup.string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Mobile number is not valid")
    .required("Mobile number is required"),
  DOB: Yup.date().required("DOB is required"),
  Gender: Yup.string().required("Gender is required"),
  Contry: Yup.string().required("Contry is required"),
  State: Yup.string().required("State is required"),
  District: Yup.string().required("District is required"),
  City: Yup.string().required("City is required"),
  Area: Yup.string().required("Area is required"),
  LandMark: Yup.string().required("LandMark is required"),
  House: Yup.string().required("House Name is required"),
  Occupation: Yup.string().required("Occupation is required"),
  Postal: Yup.string().required("Postal is required"),
  PinNo: Yup.string()
    .matches(/^\d{6}$/, "PinNo number is not valid")
    .required("Mobile number is required"),
});

export default UserSchema;
