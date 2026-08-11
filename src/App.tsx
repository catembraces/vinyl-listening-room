// ABOUTME: React starter app showcasing the main playhtml capabilities.
// ABOUTME: Demonstrates persistent data, presence, events, and built-in elements.
import { useRef } from "react";
import {
  PlayProvider,
  CanSpinElement,
  CanDuplicateElement,
} from "@playhtml/react";
import vinylImage from "./assets/black-and-red-vinyl.webp";
import groverWashington from "./assets/grover-washington-mister-magic.jpeg";

function App() {
  const template = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLDivElement>(null);

  // const capabilities = [
  //   "can-play",
  //   "can-move",
  //   "can-mirror",
  //   "can-toggle",
  //   "can-duplicate",
  //   "can-spin",
  //   "can-grow",
  //   "can-hover",
  // ];

  return (
    <PlayProvider
      initOptions={{
        cursors: {
          enabled: true,
          room: "page",
        },
      }}
    >
      <div id="album-cover-template" ref={template}>
        {groverWashington}
      </div>
      {/* attempting to get record covers to be duplicates */}
      {/* <div id="album-cover-field" ref={field}>
        <CanDuplicateElement
          children
          elementToDuplicate={template}
          canDuplicateTo={field}
        ></CanDuplicateElement>
      </div> */}
      <div
        style={{
          fontFamily: "HK Grotesk, sans-serif",
          backgroundColor: "rgb(169, 63, 28)",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <CanSpinElement>
            <img
              src={vinylImage}
              alt="Pink Vinyl Record"
              style={{
                maxWidth: "300px",
                display: "block",
                margin: "2rem auto",
                cursor: "pointer",
              }}
            />
          </CanSpinElement>
        </div>
      </div>
    </PlayProvider>
  );
}

export default App;
