import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    name: "",
    age: 0,
    email:"",
    password: "",
    gender:"",
    country: ""
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
     changeName: (state, action) => {
      state.name = action.payload;
    },
    changeAge: (state, action) => {
      state.age = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    changeGender: (state, action) => {
      state.gender = action.payload;
    },
    changeCountry: (state, action) => {
      state.country = action.payload;
    }
}   
});

export const { actions, reducer } = userSlice;