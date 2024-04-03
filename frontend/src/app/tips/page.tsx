import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../../components/HowItWorks/How-It-Works";
import { Header } from "@/components/Header";
import Tips from "@/components/tips/Tips";

export default function Home() {
  return (
    <StrictMode>
      {" "}
      <Tips />
      {/* <div>
        <video src="https://youtu.be/moeLWAiFJFM">asd </video>
      </div> */}
    </StrictMode>
  );
}
