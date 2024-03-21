import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Note(props) {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    setRotation(randomInt(-5, 5));
  }, []);

  const style = { transform: `rotate(${rotation}deg)` };

  return (
    <div className="card" style={style}>
    <div className="card-action">
        <h3 className="card-title">{props.title}</h3>
        <div className="icons">
            <div>
                <Link to={`edit/${props.id}`}>
                    <i className="fas fa-edit"></i>
                </Link>
            </div>
        </div>
    </div>
    <div className="card-content">{props.children}</div>
</div>
  );
}