import { createAsyncThunk } from "@reduxjs/toolkit";
 
export const getUserList = createAsyncThunk('user/getUserList', async (page, { rejectWithValue }) => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const {users} = await response.json();
    return users;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})