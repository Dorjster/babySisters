// "use client";
// import { StrictMode } from "react";
// import * as ReactDOMClient from "react-dom/client";

// import App from "../../components/HowItWorks/How-It-Works";
// const How = () => {
//   const rootElement = document.getElementById("root");
//   return();
// };

// if (rootElement) {
//   const root = ReactDOMClient.createRoot(rootElement);
//   root.render(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   );
// }

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../../components/HowItWorks/How-It-Works";
import { Header } from "@/components/Header";

export default function Home() {
  // const rootElement = document.getElementById("root");
  // const root = createRoot(rootElement);

  // root.render(
  //   <StrictMode>
  //     <App />
  //   </StrictMode>
  // );

  return (
    <StrictMode>
      {" "}
      <App />
    </StrictMode>
  );
}
