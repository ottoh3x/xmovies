import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/nav/Sidebar";
import { Provider } from "react-redux";
import { Store,Persistor } from "../redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import Footer from "../components/footer/Footer";
import SideNav from "../components/nav/SideNav";
import {useState} from "react"
import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen,setIsOpen] = useState(false)

  const handleSideNav = (e:any) => {
    e.stopPropagation()

    setIsOpen(!isOpen)
  }
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
      <Sidebar handleSideNav={handleSideNav} />
      <AnimatePresence>
      {isOpen && <SideNav handleSideNav={handleSideNav}/>}
      </AnimatePresence>
      
      <div className="bg-[#111] text-white  mx-auto   ">
        <Component {...pageProps} />{" "}
      </div>
      <Footer />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
