import { createSlice } from '@reduxjs/toolkit';


const initialState = {data:{
    name: "",
    age: 0,
    email:"",
    password: "",
    gender:"",
    img:'',
    country: ""}
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    changeData: (state, action) => {
        state.data = action.payload;
}   }
});

export const { actions, reducer } = userSlice;