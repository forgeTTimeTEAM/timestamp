import type { AppProps } from "next/app";
import Theme from "../components/Theme";
import UserProvider from "../Context/UserContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </UserProvider>
  );
}

export default MyApp;
