import React from 'react'

function About() {
    return (
        
            <section id="about" className="about section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>Hi, I’m Haeun Kim and I worked as a full stack Java developer for 4 years. And also have professional experience about react, flutter and unity.</p>
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
                    I’m keen to learn some new technology. Recently, I deployed a website using Next.js and elastic beanstalk, which is my favorite combination for now.And I went to React Meetup Session few days ago, so I could learn about new methods for set and map and testing tools for React.And I learned Instructions for using AWS PartyRock in AWS Meetup as well.
                </p>
                </div>
            </div>

            </div>

        </section>
    
    )
}

export default About
