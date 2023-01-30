import React from "react";

// css
import "./css/styles.css";
import "./css/custom.css";

// components
import Discussions from "./components/Discussions";

// contexts
import DiscussionContext from "./contexts/DiscussionContext";

const App = () => {
  return (
    <div className="mx-auto max-w-[770px]">
      <DiscussionContext>
        <Discussions />
      </DiscussionContext>
    </div>
  );
};

export default App;
