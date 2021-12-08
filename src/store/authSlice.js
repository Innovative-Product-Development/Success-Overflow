import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     isAuth: false,
     user: null,
     token:'',
     isStudent:true
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
       const { user } = action.payload
       console.log('user',user)
       state.user = user;
       if(user === null){
        state.isAuth = false
       }else{
        state.isAuth = true
        state.isStudent = user.isStudent
       }
       
    },
    setToken:  (state, action) => {
        const { token } = action.payload;
        state.token = token;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuth, setToken } = authSlice.actions;

export default authSlice.reducer;