import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { BiMenuAltLeft, BiSolidUserCircle } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config.ts";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice.ts";
import { RootState } from "../store/store.ts";
import { TbLogout } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { toggleIsCartOpen } from "../store/slices/cartSlice.ts";
import { NavHashLink } from "react-router-hash-link";
import Button from "./reusables/Button.tsx";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "./Search.tsx";
import { BsSearch } from "react-icons/bs";

const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

const navLinks = [
  {
    title: "Home",
    href: "/#top",
  },
  {
    title: "Menu",
    href: "/#menu",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "About",
    href: "/#about",
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const numOfCartItems = useSelector(
    (state: RootState) => state.cart.numOfCartItems
  );
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const login = async () => {
    try {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      console.log(refreshToken, providerData[0]);
      dispatch(setUser({ refreshToken, ...providerData[0] }));
      localStorage.setItem(
        "user",
        JSON.stringify({ refreshToken, ...providerData[0] })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setIsUserMenuOpen(false);
    localStorage.clear();
    dispatch(setUser(null));
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-primaryBg/60 border-b-2 border-gray-400 backdrop-blur-md">
      <div className="flex px-2 py-4 xs:p-4  md:py-6 items-center">
        <Button
          variant="ghost"
          className="flex xl:hidden py-1 px-2 mx-1 rounded-md hover:bg-gray-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <GiHamburgerMenu size={20} />
        </Button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                scale: 0.6,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.6,
                opacity: 0,
              }}
              className="absolute left-2 xl:-left-8 top-20 flex flex-col w-40 bg-primaryBg border-gray-600 border rounded-lg shadow-xl py-2"
            >
              <ul className="flex xl:hidden flex-col items-center">
                {navLinks.map((link) => {
                  return (
                    <li
                      onClick={() => setIsMobileMenuOpen(false)}
                      key={link.title}
                      className="border-b border-gray-600 cursor-pointer py-2 font-semibold text-textColor hover:text-headingColor duration-100 transition-all ease-in-out"
                    >
                      <NavHashLink to={link.href}>{link.title}</NavHashLink>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            className="w-7 md:w-10 object-cover"
            alt="Logo Image"
          />
          <p className="hidden sm:flex text-headingColor text-xl font-bold">
            La Maison de la Creme Glacée
          </p>
        </Link>
        <Search className="max-md:hidden" />

        <div className="ml-auto flex items-center gap-4 sm:gap-8">
          <motion.ul
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="hidden xl:flex  items-center gap-8"
          >
            {navLinks.map((link) => {
              return (
                <li
                  key={link.title}
                  className="cursor-pointer font-semibold text-textColor hover:text-headingColor duration-100 transition-all ease-in-out"
                >
                  <NavHashLink to={link.href}>{link.title}</NavHashLink>
                </li>
              );
            })}
          </motion.ul>
          <div
            onClick={() => navigate("/search")}
            title="search"
            className="md:hidden"
          >
            <BsSearch className="cursor-pointer text-xl mt-1 text-textColor" />
          </div>
          <div
            onClick={() => dispatch(toggleIsCartOpen())}
            className="relative flex items-center justify-center"
          >
            <BsBag className="cursor-pointer text-2xl text-textColor" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[2px]">
              <p className="text-sm font-semibold text-textColor select-none cursor-pointer">
                {numOfCartItems}
              </p>
            </div>
          </div>
          <div className="w-14 h-8 sm:w-20 sm:h-12 flex items-center justify-center">
            {user ? (
              <div
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="relative w-full h-full"
              >
                <motion.div
                  className="cursor-pointer w-full h-full rounded-full flex items-center justify-around border-2 border-black  shadow-xl"
                  whileTap={{ scale: 0.8 }}
                >
                  <BiMenuAltLeft className="text-xl sm:text-2xl" />
                  <img
                    className="w-5 sm:w-7 h-auto rounded-full object-cover"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "/images/profile-image.png"
                    }
                    alt="Profile Image"
                  />
                </motion.div>
                {/* Dropdown user menu */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{
                        scale: 0.6,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        scale: 0.6,
                        opacity: 0,
                      }}
                      className="absolute right-0 top-16 flex flex-col w-40 bg-primaryBg border-gray-600 border rounded-lg shadow-xl py-2"
                    >
                      <div className="cursor-pointer flex justify-between px-6 py-2 gap-2 items-center hover:bg-primary hover:text-white transition">
                        <p>Account</p>
                        <BiSolidUserCircle className="text-[1.35rem]" />
                      </div>
                      {user.email === "nj7055233@gmail.com" && (
                        <Link
                          to="/addItem"
                          className="flex justify-between px-6 py-2 gap-2 border-t border-gray-600 items-center hover:bg-primary hover:text-white transition"
                        >
                          <p>Add Item</p>
                          <IoMdAdd className="text-[1.35rem]" />
                        </Link>
                      )}
                      <div
                        onClick={logout}
                        className="cursor-pointer border-t rounded-b-lg border-gray-600 flex justify-between px-6 py-2 gap-2 items-center hover:bg-primary hover:text-white transition"
                      >
                        <p>Logout</p>
                        <TbLogout className="text-[1.35rem]" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.button
                onClick={login}
                whileTap={{ scale: 0.8 }}
                className="bg-primary text-sm sm:text-base text-white w-full h-full rounded-full font-medium shadow-xl"
              >
                Login
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
