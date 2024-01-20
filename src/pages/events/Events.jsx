import React from 'react'

export default function Events() {
  return (
    <>
    <section id="events" className="events">
      <div className="container">

        <div className="section-title">

        </div>

        <div className="events-slider swiper-container">
          <div className="swiper-wrapper">

            <div className="swiper-slid">
              <div className="row event-item">
                <div className="col-lg-6">
                  <img src="assets/img/gg.jpg" className="img-fluid" alt="" style={{borderRadius: "50%"}}/>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>Gᵣₐcₑ ₐₙd Gₗₒw</h3>
                  <div className="discountbox" style={{width: "100%", height: "400px", marginTop: "100px", fontSize: "110px", color:"rgb(201, 142, 142)", fontFamily: "'Times New Roman', Times, serif", borderBottom: "8px solid rgb(201, 142, 142)"}}>
                    𝐒𝐡𝐢𝐧𝐞 𝐋𝐢𝐤𝐞 𝐚 𝐏𝐞𝐚𝐫𝐥
                  </div>
                 {/*  <!-- <h2 style="color: plum;"> Limited Time Offer</h2> -->
                 */}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
