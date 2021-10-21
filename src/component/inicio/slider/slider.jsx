import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import img1 from '../../../utils/img/inicio/slider/imagen1.png'
import img2 from '../../../utils/img/inicio/slider/imagen2.png'
import img3 from '../../../utils/img/inicio/slider/imagen3.png'
import img4 from '../../../utils/img/inicio/slider/imagen4.png'
import './slider.css'
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: img1,
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: img2,
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: img3,
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  },
  {
    src: img4,
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];
const Slidershow = () =><UncontrolledCarousel items={items} />

export default Slidershow;