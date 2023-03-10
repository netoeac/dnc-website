import '../Courses/Courses.css'
import Lucas from '../../assets/images/lucas.webp'
import Breno from '../../assets/images/breno.webp'
import Everton from '../../assets/images/everton.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Carousel from '../Carousel/Carousel';

export function Courses() {
  return (
    <div className="section-course">
      <div className='left-course-side'>
        <div className="free-course">
          <h2 className='course-title'>Cursos gratuitos<br></br> disponíveis</h2>
          <p className='course-desc'>Obtenha acesso ilimitado aos cursos gratuitos da<br></br> DNC, estruturados para você dar os primeiros<br></br> passos na sua carreira.</p>
          <button className="course-register">Crie sua conta gratuita</button>

        </div>

      </div>

      <div className='right-course-side'>
        <Carousel />
      </div>

    </div>


  );
}