import React from "react"

// css
import "./css/styles.css"
import "./css/custom.css"

// components
import Discussions from "./components/Discussions"

// contexts
import DiscussionContext from "./contexts/DiscussionContext"

const App = () => {
  return (
    <DiscussionContext>
      <Discussions />
    </DiscussionContext>
  );
}

export default App;
