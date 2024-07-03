import React from 'react'

function Resume() {
    return (
    <section id="resume" className="resume section">

    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Resume</h2>
      <p>Worked for subcontractors of major telecommunication companies, maintaining and developing various websites as needed.</p>
    </div>{/* End Section Title */}

    <div className="container">

      <div className="row">

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Sumary</h3>

          <div className="resume-item pb-0">
            <h4>Haeun Kim</h4>
            <p><em>Innovative and deadline-driven Software Developer with 4+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
            <ul>
              <li>Melbourne, VIC</li>
              <li>(61+) 491-054-006</li>
              <li>wha02068@gmail.com</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Bachelor of Computer Science</h4>
            <h5>2014 - 2019</h5>
            <p><em>Kyonggi University, Suwon, KR</em></p>
            <p>I am a favorite protege of the supervising professor and even took on the role of a teaching assistant. I have served as a coding mentor for beginners, and I have learned discrete mathematics, data structures, algorithms, and programming languages such as C, C#, Java, JavaScript, and Python.
            </p>
          </div>

          <div className="resume-item">
            <h4>Kotlin Android &amp; Graphic Design</h4>
            <h5>2010 - 2014</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
          </div>

        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <h3 className="resume-title">Software Developer</h3>
          <div className="resume-item">
            <h4>Senior graphic design specialist</h4>
            <h5>2023 - 2023</h5>
            <p><em>Collie Technology, Ansan, KR </em></p>
            <ul>
              <li>Receiving data via BLE from the putting machine regarding the direction and force of the incoming ball, and visualizing it</li>
            </ul>
          </div>

          <div className="resume-item">
            <h4>Java Developer</h4>
            <h5>2021 - 2023</h5>
            <p><em>nTels, Seoul, KR</em></p>
            <ul>
              <li>Planning and designing of common React components before the commencement of AT&T’s DDaas BSS/OSS projects, and leading the development of the statistics menu using ApexCharts.</li>
              <li>Being responsible for designing the AWS architecture for the SaaS transformation of the N-Mediator project, a charging service.</li>
              <li>Providing basic AWS training to individuals.</li>
            </ul>
          </div>

          <div className="resume-item">
            <h4>Java Developer</h4>
            <h5>2019 - 2021</h5>
            <p><em>NeoPlus, Seoul, KR</em></p>
            <ul>
              <li>Implemented/Enhanced the backend API endpoints or UI according to business requirements.</li>
              <li>Helped new team members with quick onboarding and to maximize team performance.</li>
              <li>Maintaining and developing various websites.<br/>- For example, drone portal sites, roaming feature sites, VR services, micropayments, and more.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Resume
