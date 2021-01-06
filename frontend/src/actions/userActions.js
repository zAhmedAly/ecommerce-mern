import axios from "axios";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    setTimeout(() => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
    }, 1000);
  } catch (error) {
    console.log("error = ", error);
    console.log("error.response.data = ", error.response.data);
    console.log("error.response.data.message = ", error.response.data.message);
    console.log("error.message = ", error.message);

    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
