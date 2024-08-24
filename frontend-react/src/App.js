import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Display } from "./components/Display.js";

const PREFIX_PYTHON = "http://127.0.0.1:8000";
//const PREFIX_CSHARP = "http://localhost:28521";
const PREFIX_CSHARP = "http://localhost:5000";

function App() {
  const [count, setCount] = useState(0);
  const [matrix1, setMatrix1] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  const [matrix2, setmatrix2] = useState();

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
      const response = await axios.get(`${PREFIX_CSHARP}/api/matrix`);
      console.log(response.data);
      //return response.data;
    } catch (error) {
      console.error("Ошибка при выполнении запроса: ", error);
      throw error;
    }
  };

  const getItemsV3 = async () => {
    try {
      const response = await axios.get(`${PREFIX_CSHARP}/api/matrix`);
      console.log(response);
      setMatrix1(response.data);
      //return response.data;
    } catch (error) {
      console.error("Ошибка при выполнении запроса: ", error);
      throw error;
    }
  };

  const fetchAll = async () => {
    const response = await fetch(`${PREFIX_CSHARP}/api/matrix`);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const responseJson = await response.json();
    console.log(responseJson);
    // return responseJson;
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h1>Just Test</h1>
        <p class="pt-3">
          <button
            onClick={handleClick}
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            count is {count}
          </button>
        </p>
        <p class="pt-3">
          <button
            onClick={getItemsV1}
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            get items v1
          </button>
        </p>
        <p class="pt-3">
          <button
            onClick={getItemsV2}
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            get items v2
          </button>
        </p>
        <p class="pt-3">
          <button
            onClick={getItemsV3}
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            get items v3
          </button>
        </p>
        <p class="pt-3">
          <button
            onClick={fetchAll}
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            get items Fetch
          </button>
        </p>
      </div>
      <Display matrix={matrix1} />
    </div>
  );
}

export default App;
