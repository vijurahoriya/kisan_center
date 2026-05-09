import { createSlice } from "@reduxjs/toolkit";
import { kishanApi } from "../Services/axios";
import { toast } from "react-toastify";

const userLocal = localStorage.getItem("user");
const token = localStorage.getItem("token");
const initialState = {
    user: userLocal ? JSON.parse(userLocal) : null,
    isLogin: token ? true : false,
    loading: false,
    error: null,
    loginData: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        resendOtpSuccess: (state) => {
            state.loading = false;
        },
        saveLoginDetails(state, action) {
            state.loginData = action.payload;
        },
        getProfileSuccess: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        updateProfileSuccess: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logoutUser: (state) => {
            state.user = null;
            state.isLogin = false;
            state.loading = false;
            state.error = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
    },
});

export const { resendOtpSuccess, saveLoginDetails, logoutUser, getProfileSuccess, updateProfileSuccess, setLoading } = authSlice.actions;

// Async API calls
export const login = (credentials) => async (dispatch) => {
    try {
        const response = await kishanApi.post("/auth/send-otp", credentials);
        console.log(response)
        if (response.status) {
            toast.success(response.data.message)
            dispatch(saveLoginDetails(response.data));
            return { success: true };
        } else {
            toast.error(response.data.message)
            return { success: false };
        }
    } catch (error) {
        console.log(error.response?.data?.message || "Login failed");
        return { success: false };
    }
};

export const verifyOtp = (otpData) => async (dispatch) => {
    try {
        const response = await kishanApi.post("/auth/verify-otp", otpData);
        if (response.data.status) {
            setTimeout(() => {
                toast.success(response.data.message);
            }, 100);
            const token = response.data.token
            localStorage.setItem("token", token)
            return { success: true };
        } else {
            toast.error(response.data.message)
            return { success: false };
        }

    } catch (error) {
        console.log(error.response?.data?.message || "OTP verification failed");
        toast.error(error.response?.data?.message)
        return { success: false };
    }
};

export const resendOtp = (payload) => async (dispatch) => {
    try {
        const response = await kishanApi.post("/auth/send-otp", payload);
        console.log(response)
        if (response.data.status) {
            toast.success(response.data.message)
            dispatch(resendOtpSuccess());
            return { success: true };
        } else {
            toast.error(response.data.message)
            return { success: false };
        }

    } catch (error) {
        console.log(error.response?.data?.message || "Resend OTP failed");
        return { success: false };
    }
};

// Get Profile API
export const getProfile = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await kishanApi.get("/auth/profile");
        console.log(response)
        if (response.data.status) {
            dispatch(getProfileSuccess(response.data.data));
            return { success: true };
        } else {
            toast.error(response.data.message);
            return { success: false };
        }
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch profile");
        return { success: false };
    } finally {
        dispatch(setLoading(false));
    }
};

// Update Profile API
export const updateProfile = (profileData) => async (dispatch,getState) => {
    console.log(profileData)
    try {
        dispatch(setLoading(true));
        // Get user ID from Redux state
        const { user } = getState()?.auth;
        const userId = user?._id;
        console.log(userId)
        const response = await kishanApi.put(`/user/${userId}`, profileData);
        console.log(response)
        if (response.data.status) {
            dispatch(updateProfileSuccess(response.data.updatedUser));
            toast.success("Profile updated successfully");
            return { success: true };
        } else {
            toast.error(response.data.message);
            return { success: false };
        }
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to update profile");
        return { success: false };
    } finally {
        dispatch(setLoading(false));
    }
};

export default authSlice.reducer;
