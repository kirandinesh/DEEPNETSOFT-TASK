import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  menuList: [],
  error: null,
};

export const fetchMenus = createAsyncThunk("menu/fetchMenus", async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/menu`);
  console.log(response?.data);
  return response.data;
});

export const addMenu = createAsyncThunk(
  "menu/addMenu",
  async ({ name, description }) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/menu`,
      {
        name,
        description,
        items: [],
      }
    );
    return response.data;
  }
);

export const addMenuItem = createAsyncThunk(
  "menu/addMenuItem",
  async ({ menuId, item }) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/menu/${menuId}/items`,
      item
    );
    return response.data;
  }
);

const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchMenus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMenus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menuList = action.payload;
      })
      .addCase(fetchMenus.rejected, (state, action) => {
        state.isLoading = false;
        state.menuList = [];
        state.error = action.payload;
      })

      .addCase(addMenu.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menuList.push(action.payload);
      })
      .addCase(addMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addMenuItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addMenuItem.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedMenu = action.payload;
        const index = state.menuList.findIndex(
          (menu) => menu._id === updatedMenu._id
        );
        if (index !== -1) {
          state.menuList[index] = updatedMenu;
        }
      })
      .addCase(addMenuItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default menuSlice.reducer;
