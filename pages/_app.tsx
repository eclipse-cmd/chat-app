import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { isClient } from "@/services/helper/isClient";

function MyApp({ Component, pageProps }: AppProps) {
  //Set default theme to DARK
  if (!isClient()) {
    // localStorage.setItem("chakra-ui-color-mode", "dark");
    // sessionStorage.setItem(
    //   "chat-app-user",
    //   JSON.stringify({
    //     id: "12345",
    //     firstname: "emmanuel",
    //     lastname: "popoola",
    //   })
    // );
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
