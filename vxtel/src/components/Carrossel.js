import React from 'react'
import filme from '../imgs/filme.png';
import estudo from '../imgs/estudo.png';
import joice from '../imgs/joice.jpg';
import {useState,useEffect} from 'react';
import {useLocation,Link} from 'react-router-dom';

export default function Carrossel() {

       const [dados,]=useState([
           {img:filme,titulo:'FALEMAIS30',subtitulo:'Ideal para quem gosta de ficar conectado'},
           {img:estudo,titulo:'FALEMAIS60',subtitulo:'Um plano para a familia toda'},
           {img:joice,titulo:'FALEMAIS120',subtitulo:'Falador e internautas hard core'}
        ])
        const location = useLocation();
        const [chave,]=useState(location.key)

      const ativar=()=>{
        let items = document.getElementsByClassName('carousel-item')[0].classList.add('active');
        console.log('ativado')
      }

     useEffect(()=>{ativar();},[])

    return (
        <div id="hero" className="carousel slide  w-100" data-ride="carousel">
        <div className="carousel-inner">
          {dados.map((dado)=> 
            <div className="carousel-item " key={dado.titulo}>
            <img src={dado.img} className="d-block w-100 " />
            <div className="carousel-caption d-none d-md-block">
                <h5>{dado.titulo}</h5><p>{dado.subtitulo}</p>
            </div>
            </div>
              )}
        </div>


        <a className="carousel-control-prev" href="#hero" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" ></span><span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#hero" role="button" data-slide="next">
            <span className="carousel-control-next-icon" ></span><span className="sr-only">Next</span>
        </a>
     </div>
     
    )
}
