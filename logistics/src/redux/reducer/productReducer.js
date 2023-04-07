/* eslint-disable prettier/prettier */
import { PRODUCT_ACTION_TYPES } from '../action/actionsType';

const initialState = {
  productList: {
    metaData: [],
    loading: false,
    data: [],
    error: null,
    filterLoading: false
  },
  productListCategory: {
    metaData: [],
    loading: false,
    data: [],
    error: null,
  },
  productListSubcategory: {
    metaData: [],
    loading: false,
    data: [],
    error: null,
  },
  network: {},
  page: 0,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    //Product list reducer
    case PRODUCT_ACTION_TYPES.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        productList: {
          ...state.productList,
          // metaData: [],
          // data: [],
          loading: true,
          error: null,
          filterLoading: true
        },
      };
    case PRODUCT_ACTION_TYPES.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: {
          ...state.productList,
          metaData: action.payload,
          data: action.payload?.data?.paginationVariables?.current > 1 ? [].concat(state.productList.data, action.payload.data.products) : action.payload.data.products,
          //[...state.productList.data, ...action.payload.data.products],
          loading: false,
          error: null,
          filterLoading: false
        },
      };
    case PRODUCT_ACTION_TYPES.PRODUCT_LIST_FAILURE:
      return {
        ...state,
        productList: {
          ...state.productList,
          // data: [],
          // metaData: [],
          loading: false,
          error: action.payload,
          filterLoading: false
        },
      };

    // //Product load more
    // case PRODUCT_ACTION_TYPES.PRODUCT_LIST_LOAD_REQUEST:
    //   return {
    //     ...state,
    //     productList: {
    //       ...state.productList,
    //       //metaData: [],
    //       data: state.productList.data,
    //       loading: true,
    //       error: null,
    //     },
    //   };
    // case PRODUCT_ACTION_TYPES.PRODUCT_LIST_LOAD_SUCCESS:
    //   return {
    //     ...state,
    //     productList: {
    //       ...state.productList,
    //       metaData: action.payload,
    //       data: [].concat(state.productList.data, action.payload.data.products),
    //       //[...state.productList.data, ...action.payload.data.products],
    //       loading: false,
    //       error: null,
    //     },
    //   };
    // case PRODUCT_ACTION_TYPES.PRODUCT_LIST_LOAD_FAILURE:
    //   return {
    //     ...state,
    //     productList: {
    //       ...state.productList,
    //       // data: [],
    //       // metaData: [],
    //       loading: false,
    //       error: action.payload,
    //     },
    //   };

    //Product list category
    case PRODUCT_ACTION_TYPES.PRODUCT_LIST_CATEGORY_REQUEST:
      return {
        ...state,
        productListCategory: {
          ...state.productListCategory,
          // metaData: [],
          // data: [],
          loading: true,
          error: null,
        },
      };
    case PRODUCT_ACTION_TYPES.PRODUCT_LIST_CATEGORY_SUCCESS:
      return {
        ...state,
        productListCategory: {
          ...state.productListCategory,
          metaData: action.payload,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case PRODUCT_ACTION_TYPES.PRODUCT_LIST_CATEGORY_FAILURE:
      return {
        ...state,
        productListCategory: {
          ...state.productListCategory,
          // data: [],
          // metaData: [],
          loading: false,
          error: action.payload,
        },
      };

    //Product list Sub-category
    case PRODUCT_ACTION_TYPES.PRODUCT_LIST_SUBCATEGORY_REQUEST:
      return {
        ...state,
        productListSubcategory: {
          ...state.productListSubcategory,
          // metaData: [],
          // data: [],
          loading: true,
          error: null,
        },
      };
    case PRODUCT_ACTION_TYPES.PRODUCT_LIST_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        productListSubcategory: {
          ...state.productListSubcategory,
          metaData: action.payload,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case PRODUCT_ACTION_TYPES.PRODUCT_LIST_SUBCATEGORY_FAILURE:
      return {
        ...state,
        productListSubcategory: {
          ...state.productListSubcategory,
          // data: [],
          // metaData: [],
          loading: false,
          error: action.payload,
        },
      };

    ///Network
    case PRODUCT_ACTION_TYPES.NETWORK_REQUEST:
      return {
        ...state,
        network: action.payload
      };
    ///Networkv
    case PRODUCT_ACTION_TYPES.PAGE_REQUEST:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
