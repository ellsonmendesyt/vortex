import useFetch from "./useFetch";
import {Link} from 'react-router-dom';
import series from '../imgs/series.png'
const Plano = (props) => {
    const {id} = props.match.params;

    const {data:plano, carregando:pendente,erro} = useFetch('http://localhost:8000/planos/'+id);
    return ( 
      
       <div className="container-fluid bg-dark">
           <div className="row">
           <div className="col-md-10  mx-auto mb-5">
           {pendente && <div>carregando</div>}
           {erro && <div>{erro}</div>}

            { plano && (
               
               <div className="card d mx-auto" style={{ maxWidth:350,background:'#F0293F'}}>
               <img src={series} class="card-img-top" />
               <div className="card-body">
                 <h5 className="card-title text-warning">{plano.titulo}</h5>
                 <p className="card-text text-white ">{plano.descricao}</p>
                 <button  class="btn btn-outline-warning " data-toggle="modal" data-target="#comprar">Solicitar</button>

                 <div class="modal fade b" id="comprar" tabindex="-1" >
                <div className="modal-dialog ">
                <div className="modal-content ">
                <div className="modal-header bg-dark">
                <h5 className="modal-title text-warning" id="comprar">Comprar </h5>
                <button type="button" class="close text-warning" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body bg-dark text-warning">
                Confirmar solicitação
                </div>
                <div className="modal-footer bg-dark">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">fechar</button>
                <button type="button" class="btn btn-warning">confirmar</button>
                </div>
                </div>
                </div>
                </div>
               </div>
             </div>

              
            )} 
           </div>
           </div>
       </div>
      
     );
}
 
export default Plano;


/*
 <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Launch demo modal
                        </button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
Confirmar pagamento
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary">Save changes</button>
</div>
</div>
</div>
</div>
                        

*/

                

  //=========================================    
                // <div clasName="card ">
                //     <h5 className="card-header">{plano.titulo}</h5>
                //     <div className="card-body">
                //         <h5 className="card-title">{plano.descricao}</h5>
                //         <h5 className="card-text">{plano.franquia}</h5>
                //         <Link to="/" class="btn btn-primary">Adquira Já!</Link>
                //     </div>
                // </div>