import { createSlice } from "@reduxjs/toolkit";
import { getUserList } from "./actions";


const initialState = {
  users: [],
  loading:false,
  error:''
};

//State slice
// export const userSlice = createSlice({
//   name: "userArray",
//   initialState,
//   reducers: {
//     setUsers: (state) => {
//       state.users = [1,2,3,4,5];
//     },
//   },
// });


export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
      [getUserList.pending]: (state) => {
        state.loading = true;
      },
      [getUserList.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.users = payload;
      },
      [getUserList.rejected]: (state, { payload }) => {
        state.loading = false;
        state.users = [];
        state.error = payload
      }
    }
  })
   

// Action creators are automatically generated for each case reducer function 
export const { setUsers } = userSlice.actions;

export default userSlice.reducer;