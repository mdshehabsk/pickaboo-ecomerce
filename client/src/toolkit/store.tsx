import { configureStore } from "@reduxjs/toolkit";
import ProductSortAndFilter from "./slice/ProductSortAndFilter";
import sidebarSlice from "./slice/SidebarSlice";
import adminSidebarSlice from "./slice/AdminSidebarSlice";
import baseApi from "./api/baseApi";
const store = configureStore({
  reducer: {
    ProductSortAndFilter: ProductSortAndFilter.reducer,
    Sidebar : sidebarSlice.reducer,
    AdminSidebar: adminSidebarSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (gdm) => gdm().concat(baseApi.middleware)
});

export default store