import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
    const { noteId } = useParams();
    
    return (
        <div className="App">
            <main className="container">
                <form className="form-card" method="post">
                    <input
                        className="form-card-title"
                        type="text"
                        name="titulo"
                        placeholder="Título"
                    />
                    <textarea
                        className="autoresize"
                        name="detalhes"
                        placeholder="Digite o conteúdo..."
                    ></textarea>
                    <button className="btn" type="submit">Criar</button>
                </form>
            </main >
        </div>
    );
}