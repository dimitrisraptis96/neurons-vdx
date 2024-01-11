import React from "react";
import { theme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";

import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={theme} portalZIndex={9999}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
