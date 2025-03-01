import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../config";

// Async thunk to fetch runner details by bib number
export const fetchRunnerByBib = createAsyncThunk(
  "search/fetchRunnerByBib",
  async (bibNo, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/api/runners/${bibNo}`);
      return response.data;
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || { message: "Server Error" });
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    runner: null,
    loading: false,
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchRunnerByBib.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.runner = null;
      })
      .addCase(fetchRunnerByBib.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.runner = action.payload;
      })
      .addCase(fetchRunnerByBib.rejected, (state, action) => {
        state.loading = false;
        state.runner = null;
        state.error = action.payload.message;
        console.error("Redux Error State:", action.payload.message);
      });
  },
});

export default searchSlice.reducer;
