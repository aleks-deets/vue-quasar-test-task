import { useState } from "react";
import "./App.css";
import axios from "axios";

const PREFIX = "http://127.0.0.1:8000";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
    console.log(count);
  };

  const getItem = async () => {
    const { data } = await axios.get(`${PREFIX}/items`);
    console.log(data);
  };

  const getItems = async () => {
    try {
      const response = await axios.get(`${PREFIX}/items`);
      console.log(response);
      return response.data.content;
    } catch (error) {
      console.error("Ошибка при выполнении запроса: ", error);
      throw error;
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/items");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="card">
        <h1>Just Test</h1>
        <button onClick={handleClick}>count is {count}</button>
        <button onClick={getItems}>get items</button>
      </div>
    </>
  );
}

export default App;
