
import { createContext, Suspense, useEffect, useState, lazy } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/dinosours.jpg";
import profile from "./img/circledprofile.png";
import data from "./data";
import axios from "axios";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useQuery } from "react-query";


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
        <header id="header" className="header dark-background d-flex flex-column">
    <i className="header-toggle d-xl-none bi bi-list"></i>

    <div className="profile-img">
      <img src="assets/img/circledprofile.png" alt="" className="img-fluid rounded-circle"/>
    </div>

    <a href="index.html" className="logo d-flex align-items-center justify-content-center">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""/> */}
      <h1 className="sitename">Haeun Kim</h1>
    </a>

    <div className="social-links text-center">
      <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
      <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
      <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
      <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
    </div>

    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
        <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
        <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
        <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
        <li className="dropdown"><a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="#">Dropdown 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
                <li><a href="#">Deep Dropdown 5</a></li>
              </ul>
            </li>
            <li><a href="#">Dropdown 2</a></li>
            <li><a href="#">Dropdown 3</a></li>
            <li><a href="#">Dropdown 4</a></li>
          </ul>
        </li>
        <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
      </ul>
    </nav>

  </header>

  <main className="main">

    {/* Hero Section */}
    <section id="hero" className="hero section dark-background">

      <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" className=""/>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Haeun Kim</h2>
        <p>I'm <span className="typed" data-typed-items="Developer, Freelancer, Photographer">Developer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
      </div>

    </section>{/* /Hero Section */}

    {/* About Section */}
    <section id="about" className="about section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="assets/img/my-profile-img.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 content">
            <h2>FullStack Web &amp; Application Developer.</h2>
            <p className="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>9 March 1995</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://kimhaun.github.io/</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+61 491 054 006</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Melbourne, Australia</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>29</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Computer Science</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>wha02068@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p>
          </div>
        </div>

      </div>

    </section>{/* /About Section */}

    {/* Stats Section */}
    <section id="stats" className="stats section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
            </div>
          </div>{/* End Stats Item */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
            </div>
          </div>{/* End Stats Item */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
            </div>
          </div>{/* End Stats Item */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
            </div>
          </div>{/* End Stats Item */}

        </div>

      </div>

    </section>{/* /Stats Section */}

    {/* Skills Section */}
    <section id="skills" className="skills section light-background">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row skills-content skills-animation">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" width="90%"></div>
              </div>
            </div>{/* End Skills Item */}

            <div className="progress">
              <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>{/* End Skills Item */}

            <div className="progress">
              <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>{/* End Skills Item */}

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>{/* End Skills Item */}

            <div className="progress">
              <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>{/* End Skills Item */}

            <div className="progress">
              <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>{/* End Skills Item */}

          </div>

        </div>

      </div>

    </section>{/* /Skills Section */}

    {/* Resume Section */}
    <section id="resume" className="resume section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>{/* End Section Title */}

      <div className="container">

        <div className="row">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Sumary</h3>

            <div className="resume-item pb-0">
              <h4>Brandon Johnson</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>{/* Edn Resume Item */}

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2015 - 2016</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
            </div>{/* Edn Resume Item */}

            <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div>{/* Edn Resume Item */}

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>{/* Edn Resume Item */}

            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
            </div>{/* Edn Resume Item */}

          </div>

        </div>

      </div>

    </section>{/* /Resume Section */}

    {/* Portfolio Section */}
    <section id="portfolio" className="portfolio section light-background">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>{/* End Section Title */}

      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul>{/* End Portfolio Filters */}

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Books 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Books 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Books 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

          </div>{/* End Portfolio Container */}

        </div>

      </div>

    </section>{/* /Portfolio Section */}

    {/* Services Section */}
    <section id="services" className="services section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>{/* End Section Title */}

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Dolor Sitema</a></h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="icon flex-shrink-0"><i className="bi bi-binoculars"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div className="icon flex-shrink-0"><i className="bi bi-brightness-high"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
            <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Eiusmod Tempor</a></h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>{/* End Service Item */}

        </div>

      </div>

    </section>{/* /Services Section */}

    {/* Testimonials Section */}
    <section id="testimonials" className="testimonials section light-background">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="swiper init-swiper">

          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>{/* End testimonial item */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>{/* End testimonial item */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>{/* End testimonial item */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>{/* End testimonial item */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>{/* End testimonial item */}

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>

    </section>{/* /Testimonials Section */}

    {/* Contact Section */}
    <section id="contact" className="contact section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-5">

            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>{/* End Info Item */}

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>{/* End Info Item */}

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
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

     
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand   href="/"
            onClick={() => {
              navigate("/");
            }}
          >
            Haeun Kim
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/aboutMe");
              }}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/projects");
              }}
            >
              Projects
            </Nav.Link>
            {/* <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              Challenge222
            </Nav.Link> */}
            <Nav.Link
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </Nav.Link>
            {/* <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              E.T.C.
            </Nav.Link> */}
          </Nav>
          <Nav className="ms-auto">
            {/* {result.isLoading && "로딩중"}
            {result.error && "에러남"} */}
            {/* {result.data && result.data.name} */}
          </Nav>
        </Container>
        {/* <Link to="/"> 홈 </Link>
        <Link to="/detail/0"> 상세 페이지</Link> */}
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
           
      { <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>     
                <div
                  className="profile-img"
                  style={{ backgroundImage: "url(" + profile + ")" }}
                ></div>
                <div className="content">
                  <span className="boldText">Thanks for coming!🙌 </span>
                  <br/>
                  My name is <span className="boldText">Haeun</span> 
                  <br/>
                  I'm born and bred in Korea.
                  <br/>
                  <br/>
                  My father was a teacher at a computer academy.
                  <br/>
                  and due to my fast typing speed, I was able to learn coding quickly. 
                  <br/>
                  As a result, I switched majors from corrections to computer science
                  <br/>
                  and even took on the role of a teaching assistant.
                  <br/>
                  I became the first protege of the compiler professor.
                  Hello, My name is Haeun Kim.

                I worked as a web developer for 4 years using java, react

                I made some application by kotlin and flutter personally.

                I prefer frontend development because I enjoy creating pretty interface.


                I'm a Computer science graduate with a strong passion to work in the develop industry.
                I worked as a web developer for 4 years.
                My skills include knowledge of programming languages and good communication.
                I think completing my duties thoroughly first is the starting point of all success.
                I am a optimistic person who believes that every problem has its solution.
                I would describe myself as a person of action because I do what I say I will.
                  <br/>
                  <br/>
                  I made this blog for introducing myself.🎈🦜
                
                </div>
                {/* <Row>
                  {shoes.map(function (a, i) {
                    let img =
                      "https://codingapple1.github.io/shop/shoes" +
                      (parseInt(i) + 1) +
                      ".jpg";
                    return (
                      <Item
                        key={i}
                        i={i}
                        title={shoes[i].name}
                        content={shoes[i].content}
                        price={shoes[i].price}
                        src={img}
                      ></Item>
                    );
                  })}
                </Row> */}
                <br />
                {/* <button
                  onClick={() => {
                    //로딩중 UI 띄우기
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((data) => {
                        let copiedShoes = [...shoes, ...data.data];
                        //copiedShoes.push(...data.data);
                        setShoes(copiedShoes);
                        //로딩중 UI숨기기~
                      })
                      .catch(() => {
                        //로딩중 UI 숨기기~
                        console.log("실패");
                      });

                    //axios.post("/url", { name: "kim" });
                  }}
                >
                  더보기
                </button> */}
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Context1.Provider value={{ 재고, shoes }}>
                <Detail shoes={shoes} />
              </Context1.Provider>
            }
          />
          <Route path="*" element={<div>404</div>} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보</div>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense> }
      <Container></Container>
    </div>
  );
}
  
export default App;
