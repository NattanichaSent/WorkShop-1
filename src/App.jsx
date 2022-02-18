import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Box from "./components/Box";

function App() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-stone-50 flex flex-wrap justify-items-center justify-between px-14 py-14 ">
      {todos.map((item, index) => (
        <Box key={index} title={item.title} completed={item.completed} />
      ))}
    </div>
  );
}

export default App;
