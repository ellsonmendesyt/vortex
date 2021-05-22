import React from 'react'
import {Link} from 'react-router-dom';

const Table = ({planos}) => {
    return ( 
    
      <div className="row w-100 bg-light">
        <div className="col-md-6 ">
        <table className="table table-dark  ">
        <thead>
          <tr>
            
            <th scope="col">Titulo</th>
            <th scope="col">franquia</th>
            <th scope="col">Detalhes</th>
          </tr>
        </thead>
        <tbody>
            {planos.map(p=>
          <tr key={p.id}>
                <td>{p.titulo}</td>
                <td>{p.franquia}</td>
                <td><Link to={`/planos/${p.id}`}><i className="fa fa-info-circle text-white " aria-hidden="true" style={{fontSize:23}}></i></Link></td>
          </tr>
            )}
        </tbody>
      </table>
        </div>
      </div>

     );
}
 
export default Table;

 
