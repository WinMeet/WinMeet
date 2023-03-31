import * as Yup from "yup";

export class SignUpRequestModel {
  constructor(email, password, name, surname) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
  }

  static empty() {
    return new SignUpRequestModel("", "");
  }
  a;
  static validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Invalid password"),
    name: Yup.string().required(),
    surname: Yup.string().required(),
  });
}
