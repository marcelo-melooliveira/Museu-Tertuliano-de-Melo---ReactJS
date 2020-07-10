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

function PreColonialPage() {
  let parallax = null;

  return (
  
    <Parallax ref={ref => (parallax = ref)} pages={3}>

    <ParallaxLayer offset={0} speed={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
       <img src={require('../../assets/background/back5.jpg')} style={{ width: 'auto', height: '70%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={0.2} speed={-0.3} style={{ pointerEvents: 'none' }}>
      <img src={require('../../assets/icons/arqueologo.svg')} style={{ width: '15%', marginLeft: '70%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={0.7} speed={1.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
     <TextContainer>
      <h2>História Pré-Colonial</h2>
      <p>O museu Tertuliano de Melo conta com um acerto lítico que foi encontrado e doados por moradores da região da Serra Azul, sendo composto por pilões em rochas, lâminas de machado lascadas e polidas, urnas funerárias indígenas, entre outros. Esses achados mostram que a região foi habitada por povos indígenas que usavam instrumentos para o sua sobrevivência.</p>
      <p>Pela importância dos achados houveram diversos estudos nos local, com professores e alunos da área de arqueologia. O projeto também foi visitado e elogiado pelo renomado arqueólogo André Prous, que participou da escavação do fóssil mais antigo da américa latina, batizado de Luzia. Também foi um dos locais mostrados no documentário Vestígios Pré Coloniais Cearences (2020), dirigido por Roberto Bomfim. O documentário está disponível abaixo.</p>
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
          src={require('../../assets/fotosmuseu/precolonial/foto1.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/precolonial/foto2.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/precolonial/foto6.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/precolonial/foto4.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/precolonial/foto5.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/precolonial/foto7.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/precolonial/foto8.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/precolonial/foto9.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/precolonial/foto10.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/precolonial/foto11.jpg')}
          alt="First slide"
        />
      </Carousel.Item>
    
      </Carousel>
    </CarrouselContainer2>
      </div>
      </ParallaxLayer>


      <ParallaxLayer
      offset={2}
      speed={0.1}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      
      <VideoContainer>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe 
        className="embed-responsive-item" 
        src="https://www.youtube.com/embed/mhHLLJkjk6E" 
        allowFullScreen />
     </div>
      </VideoContainer>
    </ParallaxLayer>
  </Parallax>
    
  );
}

export default PreColonialPage;