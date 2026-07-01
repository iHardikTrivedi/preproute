import authReducer from "@/features/auth/store/authSlice";
import { combineReducers } from "@reduxjs/toolkit";

// Import feature reducers here
// import authReducer from "@/features/auth/store/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
