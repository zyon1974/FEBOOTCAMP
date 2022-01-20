import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [fotos, setFotos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => setFotos(res.data));
  }, []);
  
  console.log(fotos);

  const handleDelete = (id) => {
    const filteredFotos = fotos.filter((foto) => foto.id != id);
    setFotos(filteredFotos);
  };

  return (
    <div className="App">
      <h1>Test</h1>
      {fotos.map((foto) => (
        <div key={foto.id}>
          <h2>{foto.title}</h2>
          <img src={foto.thumbnailUrl} />
          <div>
            <button onClick={() => handleDelete(foto.id)}>delete</button>
          </div>
        </div>
      ))}
      <h2></h2>
    </div>
  );
}