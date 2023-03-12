import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
:root {
     box-sizing: border-box;
     font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif; 
     }
*, *::before, *::after, *::marker {
     box-sizing: inherit;
     }
`;
   