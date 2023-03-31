import * as Yup from "yup";

export class SignUpRequestModel {
  constructor(userEmail, userPassword, userName, userSurname) {
    this.userEmail = userEmail;
    this.userPassword = userPassword;
    this.userName = userName;
    this.userSurname = userSurname;
  }

  static empty() {
    return new SignUpRequestModel("", "");
  }
  a;
  static validationSchema = Yup.object({
    userEmail: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    userPassword: Yup.string()
      .required("Password is required")
      .matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Invalid password"),
    userName: Yup.string().required(),
    userSurname: Yup.string().required(),
  });
}
