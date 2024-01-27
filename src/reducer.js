export const initialState = {
  categoryId: 'buger01',
  cart: [],
  total: null,
  isSidebarOpen: false,
  user: {
    name: 'Daria',
    fullName: 'Daria Doe',
  },
};

export const actionType = {
  SET_CART: 'SET_CART',
  SET_TOTAL: 'SET_TOTAL',
  SET_CATEGORY: 'SET_CATEGORY',
  SET_IS_SIDEBAR_OPEN: 'SET_IS_SIDEBAR_OPEN',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_CATEGORY:
      return {
        ...state,
        categoryId: action.categoryId,
      };
    case actionType.SET_CART:
      return {
        ...state,
        cart: action.cart,
      };
    case actionType.SET_TOTAL:
      return {
        ...state,
        total: action.total,
      };
    case actionType.SET_IS_SIDEBAR_OPEN:
      return {
        ...state,
        isSidebarOpen: action.isOpen,
      };
    default:
      return state;
  }
};

export default reducer;
