import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  databaseId: string;
  calories: string;
  category: string;
  description: string;
  id: string;
  imageUrl: string;
  price: string;
  title: string;
}
/*

description:
    | "curry"
    | "rice"
    | "fruits"
    | "vegetables"
    | "snaks"
    | "icecreams"
    | "fish"
    | "drinks"
    | "others";
*/ 

interface ItemsState {
  items: Item[] | null;
}

const initialState: ItemsState = {
  items:[
  {
      id: "1",
      databaseId: "1",
      title: "Fraises",
      price: "5",
      calories: "100",
      category: "fruits",
      description: "drinks et curry",
      imageUrl: "/images/hero/delivery.png"
    },
    {
      id: "2",
      databaseId: "2",
      title: "Pastèques",
      price: "8",
      calories: "175",
      category: "fruits",
      description: "rice et sucreries",
      imageUrl: "/images/hero/fruits.png"
    }
  ]
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[] | null>) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
