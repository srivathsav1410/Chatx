import {createSlice} from '@reduxjs/toolkit';

const initialState = {  
        Registered: null,
        error: null,
};

const authSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        RegisterRequest: (state) => {

            state.Registered = false;
            state.error = null;
        },
        RegisterSuccess: (state, action) => {
             state.Registered = true;
        },
        RegisterFailure: (state, action) => {
            state.Registered = false;
            state.error = action.payload;
        },
     
    },
});
export const {
  
    RegisterRequest,
  RegisterSuccess,
  RegisterFailure,
} = authSlice.actions;

export default authSlice.reducer;