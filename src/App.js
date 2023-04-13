import "./styles.css";
import Tablelist from "./Tablelist";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [fdata, setfdata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setfdata(data);
      });
  }, []);
  useEffect(() => {
    const fdata = data.filter(
      (obj) =>
        obj.name.toLowerCase().includes(text.toLowerCase()) ||
        obj.email.toLowerCase().includes(text.toLowerCase())
    );
    setfdata([...fdata]);
  }, [text]);

  return (
    <div className="App">
      <h1>User Table</h1>
      <input
        type="text"
        placeholder="live searching..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Tablelist data={fdata} />
    </div>
  );
}
