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
      title: "Glace Pot-5G",
      price: "1000",
      calories: "100",
      category: "glaces",
      description: "Pot de glace de 5G",
      imageUrl: "/images/me/baigne.png"
    },
    {
      id: "2",
      databaseId: "2",
      title: "Bissap",
      price: "500",
      calories: "175",
      category: "glaces",
      description: "Glace de bissap",
      imageUrl: "/images/me/bissap.png"
    },
    {
      id: "3",
      databaseId: "3",
      title: "Ditakh",
      price: "1000",
      calories: "175",
      category: "glaces",
      description: "Glace a Base de Ditakh",
      imageUrl: "/images/me/ditack.png"
    },
    {
      id: "4",
      databaseId: "4",
      title: "Madd",
      price: "500",
      calories: "175",
      category: "glaces",
      description: "Glace a Base de Madd",
      imageUrl: "/images/me/made.png"
    },
    {
      id: "5",
      databaseId: "5",
      title: "Glace Pot-2G",
      price: "1000",
      calories: "175",
      category: "glaces",
      description: "Pot de Glace de 2G",
      imageUrl: "/images/me/3-pot.png"
    },
    {
      id: "6",
      databaseId: "6",
      title: "Bouye",
      price: "500",
      calories: "175",
      category: "glaces",
      description: "Glace a Base de Bouye",
      imageUrl: "/images/me/bouille.png"
    },
    {
      id: "7",
      databaseId: "7",
      title: "Glace Pot 1G",
      price: "1000",
      calories: "175",
      category: "glaces",
      description: "Pot de Glace de 1G",
      imageUrl: "/images/me/pot1.png"
    },
    {
      id: "8",
      databaseId: "8",
      title: "Pate Ditakh",
      price: "500",
      calories: "175",
      category: "pate",
      description: "Pate a Base Ditakh",
      imageUrl: "/images/me/patte.png"
    },
    {
      id: "9",
      databaseId: "9",
      title: "Mangue",
      price: "1000",
      calories: "175",
      category: "fruit sec",
      description: "Mangue Sechée",
      imageUrl: "/images/me/2/man_sec.png"
    },
    {
      id: "10",
      databaseId: "10",
      title: "Orange",
      price: "500",
      calories: "175",
      category: "fruit sec",
      description: "Orange Sechée",
      imageUrl: "/images/me/2/or_sec.png"
    },
    {
      id: "11",
      databaseId: "11",
      title: "Ananas",
      price: "1000",
      calories: "175",
      category: "fruit sec",
      description: "Ananas Sechée",
      imageUrl: "/images/me/2/an_sec.png"
    },
    {
      id: "12",
      databaseId: "12",
      title: "Cereales",
      price: "500",
      calories: "175",
      category: "cereales",
      description: "Céréales de Mil, Mais et Fonio",
      imageUrl: "/images/me/2/cer.png"
    },
    {
      id: "13",
      databaseId: "3",
      title: "Couscous",
      price: "1000",
      calories: "175",
      category: "cereales",
      description: "Couscous",
      imageUrl: "/images/me/2/cous.jpg"
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
