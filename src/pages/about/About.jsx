import React from 'react'

export default function About({paddings}) {
  return (
    <>
     <section id="about" className="about" style={{padding: paddings ? "120px 0px" : "60px 0px"}}>
      <div className="container">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos-delay="100">
            <div className="about-img">
              <img src="assets/img/2ndi.jpeg" alt=""/>
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">

            <ul style={{fontWeight:"bold" , opacity:"0.7"}}>
              <li><i className="bi bi-check-circle"></i>"Trendy is the last stage before tacky."</li>
              <li><i className="bi bi-check-circle"></i>"makeup can help you effectively cover them all up."</li>
              <li><i className="bi bi-check-circle"></i>"Beauty, to me, is about being comfortable in your own skin." </li>
            </ul>
            <p style={{opacity: "0.7"}}>
              " Cosmetics applied to the face to enhance its appearance are often called make-up."
              Don't be into trends. Don't make fashion own you, but you decide what you are, what you want to express by
              the way you dress and the way to live.
              The right products can really boost your confidence. Even if a dramatic lip color isn't for you,
              applying a few subtle essentials can help you feel more pulled-together and, in turn, more confident.
              Makeup
              also allows you to cover skin concerns that may cause insecurity.
            </p>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
