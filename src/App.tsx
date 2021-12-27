import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button autoFocus className="aaa" onClick={(e) => console.log(e.target)}>
        hello{" "}
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        Hello
      </Button>
      <Button
        btnType={ButtonType.Link}
        target="_blank"
        href="http://www.baidu.com"
      >
        百度链接
      </Button>
    </div>
  );
}

export default App;
