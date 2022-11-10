import type { AppProps } from "next/app";

import Theme from "../components/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserProvider from "../Context/UserContext";

import "../styles/globals.css";

import Reset from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Theme>
        <ToastContainer theme="dark" />
        <Component {...pageProps} />
        <Reset />
      </Theme>
    </UserProvider>
  );
}

export default MyApp;
