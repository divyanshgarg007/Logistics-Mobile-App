/* eslint-disable prettier/prettier */
import { PRODUCT_ACTION_TYPES } from './actionsType';
import * as productServices from '../../services/productServices';

const productListRequest = () => {
  return {
    type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_REQUEST,
  };
};

const productListSuccess = data => {
  return {
    type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_SUCCESS,
    payload: data,
  };
};

const productListFailure = error => {
  return {
    type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_FAILURE,
    payload: error,
  };
};

export const productListAction = (data) => async dispatch => {
  dispatch(productListRequest());
  try {
    const responseData = await productServices.productList(data);
    if (responseData?.status === true) {
      dispatch(productListSuccess(responseData));
    } else {
      dispatch(productListFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(productListFailure(error?.response?.data));
  }
};
//Load more
const productListLoadRequest = () => {
  return {
    type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_LOAD_REQUEST,
  };
};

const productListLoadSuccess = data => {
  return {
    type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_LOAD_SUCCESS,
    payload: data,
  };
};

const productListLoadFailure = error => {
  return {
    type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_LOAD_FAILURE,
    payload: error,
  };
};

export const productListLoadAction = (data) => async dispatch => {
  dispatch(productListLoadRequest());
  try {
    const responseData = await productServices.productList(data);
    if (responseData?.status === true) {
      dispatch(productListLoadSuccess(responseData));
    } else {
      dispatch(productListLoadFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(productListLoadFailure(error?.response?.data));
  }
};
/// product details
export const productDetailsAction = (data, onSuccess, onFailure) => async dispatch => {
  try {
    const responseData = await productServices.productDetails(data);
    if (responseData?.status === true) {
      onSuccess(responseData);
    } else {
      onFailure(responseData);
    }
  } catch (error) {
    onFailure(error?.response?.data);
  }
};
//Category
const productListCategoryRequest = () => {
  return {
    type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_CATEGORY_REQUEST,
  };
};

const productListCategorySuccess = data => {
  return {
    type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_CATEGORY_SUCCESS,
    payload: data,
  };
};

const productListCategoryFailure = error => {
  return {
    type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_CATEGORY_FAILURE,
    payload: error,
  };
};

export const productListCategoryAction = (data) => async dispatch => {
  dispatch(productListCategoryRequest());
  try {
    const responseData = await productServices.productList(data);
    if (responseData?.status === true) {
      dispatch(productListCategorySuccess(responseData));
    } else {
      dispatch(productListCategoryFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(productListCategoryFailure(error?.response?.data));
  }
};

//Product list sub-category
export const productListSubCategoryAction = (data, onSuccess, onFailure, page) => async dispatch => {
  try {
    const responseData = await productServices.productList(data);
    if (responseData?.status === true) {
      onSuccess(responseData, page);
    } else {
      onFailure(responseData.errors);
    }
  } catch (error) {
    onFailure(error?.response?.data);
  }
};
///network check
const networkActionRequest = data => {
  return {
    type: PRODUCT_ACTION_TYPES.NETWORK_REQUEST,
    payload: data,
  };
};
export const networkAction = (data) => async dispatch => {
  dispatch(networkActionRequest(data));
};

//Page count
const pageActionRequest = data => {
  return {
    type: PRODUCT_ACTION_TYPES.PAGE_REQUEST,
    payload: data,
  };
};
export const pageAction = (data) => async dispatch => {
  dispatch(pageActionRequest(data));
};

//Product auto suggestion
export const searchAutoSuggestionAction = (data, onSuccess, onFailure) => async dispatch => {
  try {
    const responseData = await productServices.searchAutoSuggestion(data);
    if (responseData?.status === true) {
      onSuccess(responseData);
    } else {
      onFailure(responseData.errors);
    }
  } catch (error) {
    onFailure(error?.response?.data);
  }
};

//Product search
export const searchAction = (data, onSuccess, onFailure, page) => async dispatch => {
  try {
    const responseData = await productServices.search(data, page + 1);
    if (responseData?.status === true) {
      onSuccess(responseData, page);
    } else {
      onFailure(responseData.errors);
    }
  } catch (error) {
    onFailure(error?.response?.data);
  }
};

//Promotion list

export const promotionListAction = (data, onSuccess, onFailure, page) => async dispatch => {
  try {
    const responseData = await productServices.promotionList(data);
    if (responseData?.status === true) {
      onSuccess(responseData, page);
    } else {
      onFailure(responseData.errors);
    }
  } catch (error) {
    onFailure(error?.response?.data);
  }
};
