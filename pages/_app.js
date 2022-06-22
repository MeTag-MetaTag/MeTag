import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import { newTheme } from "../styles/theme";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
    domain="dev-gb3olx5v.us.auth0.com"
    clientId="SD3qUIJIpIs7VlTpQnjuDHGhNutVxPKr"
    redirectUri="http://localhost:3000"
    audience="https://dev-gb3olx5v.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
    >
      <ChakraProvider theme={newTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Auth0Provider>
  )
}

export default MyApp;