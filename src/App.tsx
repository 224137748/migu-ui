import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button disabled>hello </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        Hello
      </Button>
      <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">
        百度链接
      </Button>
    </div>
  );
}

export default App;
