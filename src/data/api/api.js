import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

const login = async (loginRequestModel) => {
  try {
    const response = await instance.post("/login", loginRequestModel);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const signup = async (signupRequestModel) => {
  try {
    const response = await instance.post("/signup", signupRequestModel);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const createMeeting = async (createMeetingRequestModel) => {
  try {
    const response = await instance.post(
      "/createMeeting",
      createMeetingRequestModel
    );
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

export { login, signup, createMeeting };
