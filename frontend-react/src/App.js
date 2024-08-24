import { useState } from "react";
import "./App.css";
import axios from "axios";

const PREFIX_PYTHON = "http://127.0.0.1:8000";
const PREFIX_CSHARP = "http://localhost:5000";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
    console.log(count);
  };

  const getItemsV1 = async () => {
    const { data } = await axios.get(`${PREFIX_PYTHON}/items`);
    console.log(data);
  };

  const getItemsV2 = async () => {
    try {
      const response = await axios.get(`${PREFIX_CSHARP}/api/items`);
      console.log(response);
      return response.data.content;
    } catch (error) {
      console.error("Ошибка при выполнении запроса: ", error);
      throw error;
    }
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h1>Just Test</h1>
        <p>
          <button onClick={handleClick}>count is {count}</button>
        </p>
        <p>
          <button onClick={getItemsV1}>get items v1</button>
        </p>
        <p>
          <button onClick={getItemsV2}>get items v2</button>
        </p>
      </div>
    </div>
  );
}

export default App;
