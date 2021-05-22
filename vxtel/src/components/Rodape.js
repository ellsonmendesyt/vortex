import React from 'react'
import {Link} from 'react-router-dom';
import Mapa from './Mapa';


function Rodape() {
    return (
        <footer className='row text-white text-center mt-5 py-5'>
            <div className="col-md-6 ">

            <ul class="nav flex-column my-4">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Planos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Recarga</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Loja online</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">Sobre Vxtel</a>
                </li>
            </ul>
      
           
            <ul class="list-inline w-75 mx-auto  justify-content-around d-flex">
            <li class="list-inline-item ml-4"><i class="fa fa-facebook-official text-white fa-2x" aria-hidden="true"></i></li>
            <li class="list-inline-item"> <i class="fa fa-instagram text-white fa-2x" aria-hidden="true"></i></li>
            <li class="list-inline-item"> <i class="fa fa-youtube-play fa-2x text-white" aria-hidden="true"></i></li>
            </ul>
             </div>


            <div className="col-md-6 mx-auto">
                <h6>Localização</h6>
                <Mapa />
            </div>
            
        </footer>
    )
} 

export default Rodape
