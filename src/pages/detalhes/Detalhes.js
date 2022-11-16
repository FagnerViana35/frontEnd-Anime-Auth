import React from "react";
import { useParams } from "react-router";

const Detalhes = () =>{

    let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default Detalhes;