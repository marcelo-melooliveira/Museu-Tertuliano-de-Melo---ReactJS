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
function MeioAmbientePage() {
  let parallax = null;

  return (
  
    <Parallax ref={ref => (parallax = ref)} pages={3}>

    <ParallaxLayer offset={0} speed={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
       <img src={require('../../assets/fotosmuseu/meioambiente/foto-11.jpg')} style={{ width: 'auto', height: '60%' }} alt='img' />
    </ParallaxLayer>

    <ParallaxLayer offset={0.2} speed={-0.3} style={{ pointerEvents: 'none' }}>
    <img src={require('../../assets/icons/plantar.svg')} style={{ width: '15%', marginLeft: '70%' }} alt='historia'/>
  </ParallaxLayer>

    <ParallaxLayer offset={0.7} speed={1.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      <TextContainer>
        <h2>Meio Ambiente</h2>
          <p>Além dos trabalhos arqueológicos e históricos, o museu Tertuliano de Melo desenvolve trabalhos de educação ambiental e preservação do meio ambiente. Existem trilhas para visitação onde pode se conhecer a caverna Furna da Onça, lindas paisagens da Serra Azul e também a fauna da região.</p>
          <p>Dentre os animais preservados está o periquito cara-suja, que é objeto de estudos de biólogos da ONG Aquasis que fazem visitas periódicas para o monitoramento da espécie e também já foram estudados por biólogos da Europa. O estudo na área é tão importante que foi mostrado no programa Terra da Gente da EPTV, filiada da rede globo em Campinas/SP. Parte do programa pode ser visto no vídeo abaixo.</p>
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
          src={require('../../assets/fotosmuseu/meioambiente/foto-00.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-001.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto0.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-01.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-02.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-03.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-04.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-05.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-06.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-07.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-08.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-09.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-10.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-11.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-12.jpg')}
          alt="Img meio ambiente"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/meioambiente/foto-13.jpg')}
          alt="Img meio ambiente"
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
        src="https://www.youtube.com/embed/PmR6h1h2JPo" 
        allowFullScreen />
     </div>
      </VideoContainer>
      </ParallaxLayer>
  </Parallax>
    
  );
}

export default MeioAmbientePage;