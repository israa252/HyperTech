import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "@/components/CartContext";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Work+Sans:wght@300;400;500;600&display=swap');

  body {
    background-color: white;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
