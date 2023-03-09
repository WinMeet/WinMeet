import * as Yup from "yup";

export class LoginRequestModel {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  static empty() {
    return new LoginRequestModel("", "");
  }
  a;
  static validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Invalid password"),
  });
}
