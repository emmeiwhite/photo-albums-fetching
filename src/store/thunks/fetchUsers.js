import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base type users/fetch/<Status>
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  return response.data;
  //  state.users = action.payload; This is automatically returned as action.payload in the reducer in a success case!
});

export { fetchUsers };
