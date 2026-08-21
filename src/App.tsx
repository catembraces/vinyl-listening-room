// ABOUTME: React starter app showcasing the main playhtml capabilities.
// ABOUTME: Demonstrates persistent data, presence, events, and built-in elements.
import React, { useRef } from "react";
import {
  PlayProvider,
  CanSpinElement,
  CanDuplicateElement,
  CanGrowElement,
  playhtml,
} from "@playhtml/react";
import vinylImage from "./assets/black-and-red-vinyl.webp";
import groverWashington from "./assets/grover-washington-mister-magic.jpeg";

function App() {
  const template = useRef<HTMLImageElement>(null);
  const field = useRef<HTMLDivElement>(null);

  const removeLastestClone = () => {
    const triggerEl = document.querySelector(
      '[can-duplicate="album-cover-template"]',
    ) as HTMLElement | null;
    if (!triggerEl?.id) return;

    const handle = playhtml.getHandle(triggerEl.id, "can-duplicate");
    const currentData = handle.getData() as string[] | undefined;

    if (!currentData?.length) {
      console.log("No more clones!");
      return;
    }

    const latestCloneId = currentData[currentData.length - 1];
    handle.setData(currentData.slice(0, -1));
    document.getElementById(latestCloneId)?.remove();
  };

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
        <img
          id="album-cover-template"
          ref={template}
          src={groverWashington}
          style={{
            maxWidth: "200px",
            display: "block",
          }}
        />
        <div id="album-cover-field" ref={field} />
        <CanDuplicateElement
          elementToDuplicate={template}
          canDuplicateTo={field}
        >
          <button>clone a record</button>
        </CanDuplicateElement>
        <button onClick={removeLastestClone}>delete last record</button>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <CanGrowElement>
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
          </CanGrowElement>
        </div>
      </div>
    </PlayProvider>
  );
}

export default App;
