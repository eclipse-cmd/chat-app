import { getLocalStorage, setLocalStorage } from "@/services/helper";
import { isClient } from "@/services/helper/isClient";
import store from "@/store";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  //Set default theme to DARK
  if (isClient()) {
    localStorage.setItem("chakra-ui-color-mode", "dark");

    if (!getLocalStorage()) {
      setLocalStorage([]);
    }
  }

  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
