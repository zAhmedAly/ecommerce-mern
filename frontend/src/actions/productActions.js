import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/products");

    setTimeout(() => {
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    }, 1000);
  } catch (error) {
    console.log("error = ", error);
    console.log("error.response.data = ", error.response.data);
    console.log("error.response.data.message = ", error.response.data.message);
    console.log("error.message = ", error.message);

    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);

    setTimeout(() => {
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    }, 1000);
  } catch (error) {
    console.log("error = ", error);
    console.log("error.response.data = ", error.response.data);
    console.log("error.response.data.message = ", error.response.data.message);
    console.log("error.message = ", error.message);

    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
