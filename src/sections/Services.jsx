import React from 'react'

function Services() {
    return (
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

    </section>
    )
}

export default Services
