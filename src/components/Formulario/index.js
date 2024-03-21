import axios from "axios";
import React, { useState } from "react";
import "./index.css";


export default function Formulario(props) {
    const [titulo, setTitulo] = useState("");
    const [content, setContent] = useState("");

    const tituloOnChange = (event) => {
        setTitulo(event.target.value);
    }

    const criarNote = (event) => {
        event.preventDefault();

        const data = {
            'title' : titulo,
            'content' : content
        }

        axios
        .post("http://localhost:8000/api/notes/", data)
        .then(() => {
            props.funcao();
            setTitulo("");
            setContent("");
          })
    }

    return (
        <form className="form-card" method="post" onSubmit={criarNote}>
            <input
                className="form-card-title"
                type="text"
                name="titulo"
                placeholder="Título"
                onChange={tituloOnChange}
                value={titulo}
            />
            <textarea
                className="autoresize"
                name="detalhes"
                placeholder="Digite o conteúdo..."
                onChange={ (event)=>{setContent(event.target.value)} } //forma diferente de fazer o que a funcao tituloOnChange faz
                value={content}
            ></textarea>
            <button className="btn" type="submit">Criar</button>
        </form>
    );
}