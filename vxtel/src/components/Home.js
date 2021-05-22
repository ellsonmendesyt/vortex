import React from 'react';
import Table from './Table';
import useFetch from './useFetch';
import Carrossel from './Carrossel';
import Rodape from './Rodape';

import Cartao from './Cartao';
import imgc1 from '../imgs/tel.jpg';
import imgc2 from '../imgs/familia.jpg';
import imgc3 from '../imgs/max.png';

const Home = () => {
  const url='http://localhost:8000/planos';
  const {data:planos,carregando,erro} =useFetch(url);

  
  
  
  return ( 
    <div className="container-fluid">
        <div className="row">
        <Carrossel/>
        </div>
        <div className="row">

        <div className="col d-flex justify-content-around flex-wrap "> 
        <Cartao opcoes={{ img:imgc1,titulo: "Fale Mais 30",desc:'Fique sempre ON e fale a vontade',acao: "/",rotulo:"Saiba mais" }}/>
        <Cartao opcoes={{ img:imgc2,titulo: "Fale Mais 60",desc:'Ideal para compartilhar com a familia',acao: "/",rotulo:"Saiba mais" }}/>
        <Cartao opcoes={{ img:imgc3,titulo: "Fale Mais 120",desc:'Vox max conexão ultra, fique sempre a frente',acao: "/",rotulo:"Saiba mais" }}/>
        </div>
        </div>

         <Rodape/>
        
    



      </div>
     );
    }
    
    export default Home;
    
    
    //  ======================
    // <div className="container-fluid d">
    //   <Carrossel/>


    //     { erro && <div className="alert alert-danger"> {erro}</div>}
    //     { carregando && <div> Carregando...</div>}
    //    {planos &&  <Table planos={planos}/>} 
    // </div>