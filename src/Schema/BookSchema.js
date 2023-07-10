import * as Yup from "yup";

export const schema = {
  Title: "",
  Author: "",
  Cost: undefined,
  Pages: undefined,
  ISBN: undefined,
  Description: "",
  Genres: "",
  Publisher: "",
  publishDate: "",
  CoverBook: null,
};
const BooksSchema = Yup.object().shape({
  Title: Yup.string().required("Title is required"),
  Author: Yup.string().required("Author is required"),
  Cost: Yup.number()
    .required("Cost is required")
    .positive("Must be valid")
    .integer("Must Be number"),
    ISBN: Yup.number()
    .required("Cost is required")
    .positive("Must be valid")
    .integer("Must Be number"),
  Pages: Yup.number()
    .required("Pages is required")
    .positive("Must be valid")
    .integer("Must Be number"),
  Description: Yup.string()
    .required("Description is required")
    .test("word-count", "Must be at least 200 characters long", (value) => {
      console.log(value.replace(/\s/g, "").length);
      return value.replace(/\s/g, "").length >= 200;
    }),
  Genres: Yup.string().required("Genres is required"),
  Publisher: Yup.string().required("Publisher is required"),
  publishDate: Yup.date().required("publishDate is required"),
  CoverBook: Yup.mixed()
    .required("Please upload an image")
    .test("fileSize", "Image size is too large", (value) => {
      if (!value) return true;
      const fileSize = value.size / 1024 / 1024; // in megabytes
      const maxSize = 2; // maximum allowed size in megabytes
      return fileSize <= maxSize;
    })
    .test("fileType", "Unsupported file format", (value) => {
      if (!value) return true;
      const supportedFormats = ["image/jpeg", "image/jpg", "image/png"];
      return supportedFormats.includes(value.type);
    }),
});

export default BooksSchema;
