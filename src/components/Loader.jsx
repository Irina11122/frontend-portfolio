import React from "react";

export default function Loader() {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-status">Status</div>
          {/* <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div> */}
        </div>
        <div className="text share-tech-mono-regular">Booting Portfolio...</div>
      </div>
    </div>
  );
}
