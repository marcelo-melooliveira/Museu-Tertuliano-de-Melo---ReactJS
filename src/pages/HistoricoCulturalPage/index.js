import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import ReactPlayer from 'react-player/lazy'
import YouTube from 'react-youtube';
import Carousel from 'react-bootstrap/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { VideoContainer, CarrouselContainer, CarrouselContainer2, TextContainer } from './styles';
import CarouselImage from '../../components/CarouselImage'

 const opts = {
  height: 'auto',
  width: 'auto',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function HistoricoCulturalPage() {
  let parallax = null;

  return (
  
    <Parallax ref={ref => (parallax = ref)} pages={3}>

    <ParallaxLayer offset={0} speed={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
       <img src={require('../../assets/background/back6.jpg')} style={{ width: 'auto', height: '60%' }} alt='img' />
    </ParallaxLayer>

    <ParallaxLayer offset={0.2} speed={-0.3} style={{ pointerEvents: 'none' }}>
    <img src={require('../../assets/icons/historia.svg')} style={{ width: '15%', marginLeft: '70%' }} alt='historia'/>
  </ParallaxLayer>

    <ParallaxLayer offset={0.7} speed={1.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      <TextContainer>
        <h2>Histórico Cultural</h2>
        <p>O museu Tertulino de Melo também conta com uma sala que exibe objetos históricos do município de Ibaretama. Na sala existem objetos de relevância histórica municipal, como o primeito telefone da região que pertenceu ao saudoso Poeirão, que foi vereador e presidente da câmara quando Ibaretama ainda pertencia ao município de Quixadá. Existem também objetos de Tertuliano de Melo, que foi um dos grandes empreendedores da região na época das grandes plantações de algodão.</p> 
        <p>Existem muitos outros objetos que valem a pena serem conferidos in loco.</p>
     </TextContainer>
    </ParallaxLayer>

    <ParallaxLayer offset={1} speed={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      <img src={require('../../assets/background/back1.jpg')} style={{ width: '100%', height: '100%', opacity: 0.6 }} />
    </ParallaxLayer>
    
    <ParallaxLayer
      offset={1}
      speed={-0}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <CarrouselContainer2>
      <Carousel indicators={false} slide >

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/historicocultural/foto01.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/historicocultural/foto02.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/historicocultural/foto03.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/historicocultural/foto04.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/historicocultural/foto05.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/historicocultural/foto1.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
      <img
        className="d-block w-70"
        src={require('../../assets/fotosmuseu/historicocultural/foto3.jpg')}
        alt="First slide"
      />
    </Carousel.Item>

    <Carousel.Item>
    <img
      className="d-block w-70"
      src={require('../../assets/fotosmuseu/historicocultural/foto4.jpg')}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
  <img
    className="d-block w-70"
    src={require('../../assets/fotosmuseu/historicocultural/foto5.jpg')}
    alt="First slide"
  />
</Carousel.Item>

<Carousel.Item>
<img
  className="d-block w-70"
  src={require('../../assets/fotosmuseu/historicocultural/foto2.jpg')}
  alt="First slide"
/>
</Carousel.Item>

<Carousel.Item>
<img
  className="d-block w-70"
  src={require('../../assets/fotosmuseu/historicocultural/foto6.jpg')}
  alt="First slide"
/>
<Carousel.Caption className='bg-dark p-0 rounded'>
<p>Tertuliano de Melo e Emília Ester de Melo</p>
</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
<img
  className="d-flex w-70"
  src={require('../../assets/fotosmuseu/historicocultural/foto7.jpg')}
  alt="First slide"
/>
<Carousel.Caption className=' bg-dark p-0 rounded'>
        <p>Tertuliano de Melo</p>
</Carousel.Caption>
</Carousel.Item>


    
      </Carousel>
    </CarrouselContainer2>
      </div>
      </ParallaxLayer>


      <ParallaxLayer
      offset={2}
      speed={0.1}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
  </Parallax>
    
  );
}

export default HistoricoCulturalPage;