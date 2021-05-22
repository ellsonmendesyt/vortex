import React from 'react'
import {Link} from 'react-router-dom';


function Cartao({opcoes}) {
  const {img,titulo,desc,acao,rotulo}=opcoes;
    return (
        <div className="card my-4 " style={{ width:250 }}>
        <img src={img} className="card-img-top" height='110'/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{desc}</p>
          <a href={acao} className="btn btn-info">{rotulo}</a>
        </div>
      </div>
    )
}

export default Cartao
