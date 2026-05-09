import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
// import wishlistSlice from "./features/wishlistSlice";
// import bookingSlice from "./features/bookingSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        // content:cmsSlice,
        // wishlist:wishlistSlice,
        // booking:bookingSlice,
    },
})

export default store;
