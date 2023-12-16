import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import imagesApi from "./api/images";

function App() {
  const [count, setCount] = useState(0);
  const getAll = async () => {
    const allData = await imagesApi.getAll();
    console.log("allData : ", allData);
  };
  const create = async () => {
    const sendData = {
      image_name: "カバさん",
      image_data: "data:image/png;base64,iVBORw0KGgoAAAANSU5ErkJggg4",
    };
    const res = await imagesApi.createData(sendData);
    if (res.data.message === "新規登録完了") {
      const allData = await imagesApi.getAll();
      console.log("allData : ", allData);
    }
  };
  const update = async () => {
    const sendData = {
      image_name: "ワニさん",
      // image_data: "data:image/png;base64,iVBORw0KGgoAAAANSU5ErkJggg4",
    };
    const res = await imagesApi.update(4, sendData);
    if (res.data.message === "修正完了") {
      const allData = await imagesApi.getAll();
      console.log("allData : ", allData);
    }
  };

  return (
    <>
      <div>
        <div>
          <button onClick={getAll}>getAll</button>
        </div>
        <div>
          <button onClick={create}>create</button>
        </div>
        <div>
          <button onClick={update}>update</button>
        </div>
        <div>
          <button>delete</button>
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
