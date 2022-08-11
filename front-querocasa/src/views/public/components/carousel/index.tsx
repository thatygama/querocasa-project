import Carousel from 'react-bootstrap/Carousel';
import casa1 from './images/casa-1.jpg';
import casa2 from './images/casa-2.jpg';
import casa3 from './images/casa-3.jpg';
import './index.css';

const CarouselExample: React.FunctionComponent = () => {
  
    return (
      <div className='div_carousel'>
        <Carousel className='carousel' fade>
          <Carousel.Item className='img_carousel'>
            <img
              className="d-block w-100"
              src={casa1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className='img_carousel'>
            <img
              className="d-block w-100"
              src={casa2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className='img_carousel'>
            <img
              className="d-block w-100"
              src={casa3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      );
  }
  
  export default CarouselExample;