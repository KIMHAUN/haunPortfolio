import { createContext, Suspense, useEffect, useState, lazy } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/dinosours.jpg";
import profile from "./img/circledprofile.png";
import data from "./data";
import axios from "axios";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import Typed from 'typed.js';
import Header from './components/Header'

import About from './sections/About'
import Resume from './sections/Resume'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'
import Services from './sections/Services'
//import Detail from "./pages/Detail";
//import Cart from "./pages/Cart";

const Detail = lazy(() => import("./pages/Detail.js"));
const Cart = lazy(() => import("./pages/Cart.js"));
const Projects = lazy(() => import("./pages/Projects.js"));
const AboutMe = lazy(() => import("./pages/AboutMe.js"));
const Contact = lazy(() => import("./pages/Contact.js"));

//context : state 보관함
export let Context1 = createContext();


function App() {


  useEffect(() => {
    const headerToggleBtn = document.querySelector('.header-toggle');
    console.log(headerToggleBtn);
    function headerToggle() {
      document.querySelector('#header').classList.toggle('header-show');
      headerToggleBtn.classList.toggle('bi-list');
      headerToggleBtn.classList.toggle('bi-x');
    }
    headerToggleBtn.addEventListener('click', headerToggle);

      /**
     * Hide mobile nav on same-page/hash links
     */
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (document.querySelector('.header-show')) {
            headerToggle();
          }
        });
      });
    


  // /**
  //  * Toggle mobile nav dropdowns
  //  */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  // /**
  //  * Preloader
  //  */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  // /**
  //  * Scroll top button
  //  */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
  
    /**
   * Init swiper sliders
   */
    // function initSwiper() {
    //   document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
    //     let config = JSON.parse(
    //       swiperElement.querySelector(".swiper-config").innerHTML.trim()
    //     );
  
    //     if (swiperElement.classList.contains("swiper-tab")) {
    //       initSwiperWithCustomPagination(swiperElement, config);
    //     } else {
    //       new Swiper(swiperElement, config);
    //     }
    //   });
    // }
  
    // window.addEventListener("load", initSwiper);
  
  

  });


  let obj = { name: "kim" };
  localStorage.setItem("data", JSON.stringify(obj));
  let 꺼낸거 = localStorage.getItem("data");
  //console.log(JSON.parse(꺼낸거));

  let [shoes, setShoes] = useState(data);
  let [재고, 재고변경] = useState([10, 11, 12]);
  let navigate = useNavigate(); //hook : 유용한 정보가 들어있는 함수

  // let result = useQuery(
  //   ["작명"],
  //   () =>
  //     axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
  //       console.log("refetch");
  //       return a.data;
  //     }),
  //   {
  //     staleTime: 2000,
  //   }
  // );
  //console.log(result.data);
  //console.log(result.isLoading);
  //console.log(result.error);

  return (
    <div className="App">

<Header/>
  <main className="main">
    
    {/* Hero Section */}
    <section id="hero" className="hero section dark-background">

      <img src="assets/img/shore.jpg" alt="" data-aos="fade-in" className=""/>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Haeun Kim</h2>
        <p>I'm <span className="typed" data-typed-items="Developer, Freelancer, Creator">Developer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
      </div>

    </section>{/* /Hero Section */}

    <About/>

    {/* Stats Section */}
    <section id="stats" className="stats section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Happy Clients</strong> <span>Meeting their needs quickly and effectively.</span></p>
            </div>
          </div>{/* End Stats Item */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Projects</strong><br/> <span>Extensive experience in telecom-related projects.</span></p>
            </div>
          </div>{/* End Stats Item */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Hours Of Support</strong> <span>From 9 AM to 5 PM</span></p>
            </div>
          </div>{/* End Stats Item */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Hard Workers</strong> <span>Meeting deadlines</span></p>
            </div>
          </div>{/* End Stats Item */}

        </div>

      </div>

    </section>{/* /Stats Section */}

    {/* Skills Section */}
    <Skills/>
   {/* /Skills Section */}
    
    {/* /Resume Section */}
    <Resume/>

    {/* Portfolio Section */}
    {/* <Portfolio/> */}
    {/* /Portfolio Section */}

    {/* Services Section */}
    {/* <Services/> */}
    {/* /Services Section */}

    {/* Testimonials Section */}
    {/* /Testimonials Section */}

    {/* Contact Section */}
    <section id="contact" className="contact section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        {/* <p>Feel free to get in touch for any inquiries or collaborations!</p> */}
        <p>Email functionality is under development.</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">

          <div className="col-lg-5">

            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>25 Myross Ave, Ascot Vale, Melbourne, VIC</p>
                </div>
              </div>{/* End Info Item */}

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+61 491 054 006</p>
                </div>
              </div>{/* End Info Item */}

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>wha02068@gmail.com</p>
                </div>
              </div>{/* End Info Item */}

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" style= {{border: "0", width: "100%", height: "270px"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </div>

          <div className="col-lg-7">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">

                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" required=""/>
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email-field" required=""/>
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject-field" required=""/>
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>{/* End Contact Form */}

        </div>

      </div>

    </section>{/* /Contact Section */}

  </main>

     
      {/* <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div> */}
           
    </div>
  );
}
  
export default App;
