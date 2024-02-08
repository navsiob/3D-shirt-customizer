import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Home from "./pages/Home";
import Customizer from "./pages/Customizer";

import Shirt from "./Canvas/Shirt";
import Backdrop from "./Canvas/Backdrop";
import CameraRig from "./Canvas/CameraRig";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="app transition-all ease-in">
      <Home />
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
      <Customizer />
    </main>
  </React.StrictMode>
);
