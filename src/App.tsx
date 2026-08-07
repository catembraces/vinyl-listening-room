// ABOUTME: React starter app showcasing the main playhtml capabilities.
// ABOUTME: Demonstrates persistent data, presence, events, and built-in elements.

import React, { useState } from "react";
import { PlayProvider, CanSpinElement } from "@playhtml/react";
import vinylImage from "./assets/red-vinyl-with-hand.jpg";

function App() {
  const [highlightedCapability, setHighlightedCapability] = useState<
    string | null
  >(null);

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
