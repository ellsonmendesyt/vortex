import React from 'react'

import filme from '../imgs/filme.png';

function Slider() {
    return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            
            <div class="carousel-item">
            <img src={filme} class="d-block w-100" alt="..."/>
            </div>
           
        </div>
    </div>
    )
}

export default Slider
