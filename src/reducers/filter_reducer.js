import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  UPDATE_SORT,
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  SET_LIST_VIEW,
} from "../utils/actions";

export const filter_reducer = (state, action) => {
  const { type, payload } = action;

  if (type === LOAD_PRODUCTS) {
    let maxPrice = payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...payload],
      filtered_products: [...payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (type === SET_GRID_VIEW) {
    return { ...state, grid_view: true };
  }
  if (type === SET_LIST_VIEW) {
    return { ...state, grid_view: false };
  }

  if (type === UPDATE_SORT) {
    return { ...state, sort: payload };
  }

  if (type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (type === UPDATE_FILTERS) {
    const { name, value } = payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, price } = state.filters;
    let tempProducts = [...all_products];

    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().includes(text)
      );
    }

    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }

    tempProducts = tempProducts.filter((product) => product.price <= price);

    return { ...state, filtered_products: tempProducts };
  }

  if (type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        price: state.filters.max_price,
      },
    };
  }

  throw new Error(`No Matching "${type}" - action type `);
};
