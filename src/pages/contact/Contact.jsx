import React from 'react'

export default function Contact({paddings}) {
  return (
    <>
    <section id="contact" className="contact" style={{padding : paddings ? "120px 0px" : "60px 0px"}}>
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
      </div>


      <div>
        <iframe style={{border:"0", width: "100%", height: "350px"}}
          src="https://maps.google.com/maps?q=%20suraj%20ganj%20jalandhar%20punjab&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0" allowfullscreen></iframe>
      </div>

      <div className="container">

        <div className="row mt-5">

          <div className="col-lg-4 ">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>123 xyz nagar,jalandhar</p>
              </div>

              <div className="open-hours" style={{marginTop: "-50px", marginLeft:"400px"}}>
                <i className="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  11:00AM-9PM
                </p>
              </div>

              <div className="email" style={{marginTop: "-90px", marginLeft:"700px"}}>
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>grace@abc.com</p>
              </div>

              <div className="phone" style={{marginTop: "-50px", marginLeft:"1100px" }}>

              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
        </>
  )
}
