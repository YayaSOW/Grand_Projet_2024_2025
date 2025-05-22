import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { getItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "./store/slices/itemsSlice";
import { Item } from "./store/slices/itemsSlice";
import Cart from "./components/cart/Cart";
import { RootState } from "./store/store";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/reusables/Footer"; // Importe le Footer

const App = () => {
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);
  const dispatch = useDispatch();
  const fetchItems = async () => {
    const data = await getItems();
    dispatch(setItems(data as Item[]));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="mt-24 md:mt-28 w-full flex-grow">
        <Outlet />
      </main>
      <AnimatePresence>{isCartOpen && <Cart />}</AnimatePresence>
      <Footer /> {/* Ajoute le Footer ici */}
    </div>
  );
};

export default App;