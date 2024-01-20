import React from 'react'

export default function Hero() {
  return (
    <>
    <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start">
      <div class="row">
        <div class="col-lg-8">
          <h1>𝓖𝓡𝓐𝓒𝓔 & 𝓖𝓛𝓞𝓦<span></span></h1>
          <h2>“𝒮𝓂𝒾𝓁𝑒, 𝓈𝓅𝒶𝓇𝓀𝓁𝑒, 𝓈𝒽𝒾𝓃𝑒.”</h2>

          <div class="btns">
            <a href="#menu" class="btn-menu animated fadeInUp scrollto">Categories</a>
           {/*  <!-- <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a> --> */}
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos-delay="200">
         {/*  <!-- <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn"></a> --> */}
        </div>

      </div>
    </div>
  </section>

  <main id="main"></main>
    </>
  )
}
