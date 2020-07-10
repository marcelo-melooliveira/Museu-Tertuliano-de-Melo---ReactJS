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

function HomePage() {
  let parallax = null;
  const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  return (
  
    <Parallax ref={ref => (parallax = ref)} pages={3}>
    <ParallaxLayer offset={1} speed={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      <img src={require('../../assets/background/back2.jpg')} style={{ width: '100%', height: '100%' }} />
    </ParallaxLayer>
    <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#EFF5FB' }} />

    <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

    <ParallaxLayer offset={1.2} speed={-0.3} style={{ pointerEvents: 'none' }}>
      <img src={require('../../assets/icons/poeira.png')} style={{ width: '15%', marginLeft: '70%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
      </ParallaxLayer>
 { /*
      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
  </ParallaxLayer> */ }

    { /* <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
      <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
      <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
  </ParallaxLayer> */ }

    <ParallaxLayer offset={2} speed={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      <img src={require('../../assets/background/back1.jpg')} style={{ width: '100%', height: '100%', opacity: 0.6 }} />
    </ParallaxLayer>

   {/* <ParallaxLayer
      offset={2}
      speed={-0.3}
      style={{
        backgroundSize: '80%',
        backgroundPosition: 'center',
        backgroundImage: url('clients', true)
      }}
    /> */ }

    <ParallaxLayer
      offset={0}
      speed={0.1}
      onClick={() => parallax.scrollTo(1)}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      
      <VideoContainer>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe 
        className="embed-responsive-item" 
        src="https://www.youtube.com/embed/SP1c4plUGWc?rel=0" 
        allowFullScreen />
     </div>
       
      </VideoContainer>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1}
      speed={0.1}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 10 }}>
      
      <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
      <CarrouselContainer>
          <CarouselImage />
    </CarrouselContainer>
      </div>
       
    <TextContainer>
      <p>Tertuliano de Melo Neto é o fundador do museu. Possui formação em pedagogia, mestrado em museologia e atualmente é graduando em arquiologio social inclusiva.</p>
      <p>Iniciou um acervo pessoal em 1973, onde baseava-se em peças pessoais da família. No ano de 2005 iniciou uma busca na região à procura de peças líticas e cerâmicas que foram doadas por moradores.</p>
      <p>Então, no ano de 2013 foi fundado o museu Tertuliano de Melo, que é o primeiro museu arqueológico do sertão central.</p>
    </TextContainer>
  { // https://www.npmjs.com/package/react-image-gallery
  }
    </ParallaxLayer>

    <ParallaxLayer
      offset={2}
      speed={-0}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <CarrouselContainer2>
      <Carousel indicators={false} slide >

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/foto1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption className='bg-dark p-0 rounded'>
        <h3>Localização</h3>
        <p>Fazenda Coité, Ibaretama/CE</p>
      </Carousel.Caption>
      </Carousel.Item>
    
    
      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/foto3.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption className='bg-dark p-0 rounded'>
        <h3>Vestígios Líticos</h3>
        <p>Vestígios do período pré-colonial</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/foto4.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption className='bg-dark p-0 rounded'>
        <h3>Vestígios Cerâmicos</h3>
        <p>Vestígios dos índios que habitaram a região</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/foto5.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption className='bg-dark p-0 rounded'>
        <h3>História Local</h3>
        <p>Objetos históricos do município</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/foto2.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption className='bg-dark p-0 rounded'>
        <h3>Meio Ambiente</h3>
        <p>Trabalho de educação ambiental</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-70"
          src={require('../../assets/fotosmuseu/foto6.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption className='bg-dark p-0 rounded'>
        <h3>Meio Ambiente</h3>
        <p>Trabalho de preservação da fauna</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </CarrouselContainer2>
      </div>
      </ParallaxLayer>
  </Parallax>
    
  );
}

export default HomePage;