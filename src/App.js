import { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/Note";
import "./App.css";
import Formulario from "./components/Formulario"

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/notes/")
      .then((res) => setNotes(res.data));
  }, []);

  const carregaNotas = () => {
    axios
      .get("http://localhost:8000/api/notes/")
      .then((res) => setNotes(res.data));
  }

  useEffect(() => {
    carregaNotas();
  }, []);

  console.log(notes);

  return (
    <div className="App">
      <Formulario funcao={carregaNotas}/>
      <img src="/logo-getit.png" />
      {notes.map((note) => (
        <Note key={`note__${note.id}`} title={note.title}>
          {note.content}
        </Note>
      ))}
    </div>
  );
}

export default App;