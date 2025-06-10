import {createSlice} from '@reduxjs/toolkit';

const initialState = {  
    User: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    Users:[]
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.User = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            console.log("logout called")
            state.User = null;
        },
        getSearchRequest:(state)=>{
            
            state.Users=[]
        },
        UsersFetchSuccess:(state,action)=>{
            state.Users=action.payload
        },
        UserFetchFailure:(state,action)=>{
            state.Users=action.payload
        }

    },
});
export const {
  
    loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  getSearchRequest,
  UsersFetchSuccess,
  UsersFetchFailure

} = authSlice.actions;

export default authSlice.reducer;