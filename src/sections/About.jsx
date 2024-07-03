import React from 'react'

function About() {
    return (
        
            <section id="about" className="about section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>Hi I’m Haeun Kim and I worked as a full stack Java developer for 4 years.And also have professional experience about react, flutter and unity.</p>
            </div>{/* End Section Title */}

            <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4 justify-content-center">
                <div className="col-lg-4">
                <img src="assets/img/cafe_profile.jpeg" className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-8 content">
                <h2>FullStack Web &amp; Application Developer.</h2>
                <p className="fst-italic py-3">
                    B2B FullStack Java Developer for 4 years. + AWS/React/Flutter
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

        </section>
    
    )
}

export default About
