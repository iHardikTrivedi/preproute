import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "@/features/auth/store/authSlice";
import dashboardReducer from "@/features/dashboard/store/dashboardSlice";
import testCreationReducer from "@/features/tests/store/testCreationSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  testCreation: testCreationReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
