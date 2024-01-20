import React from 'react'

export default function Menu({paddings}) {
  return (
    
     <section id="menu" className="menu  section-bg d-flex align-items-center justify-content-center" style={{padding : paddings ? "140px 0px ": "60px 0px"}}>
      <div className="">

        <div className="section-title text-center">
          <h2></h2>
          <p>Categories</p>
        </div>
      
      <div className="">
      {/*   <!-- <div className="heading">Categories</div> --> */}
        <div  className='categories-section'>
          <div className="td">
            <div className="circle">
              <img src="./assets/img/g1.jpg"/>
            </div>
            <div className="tt">Hair care is important
              for not only our appearance,
              but also for our overall hygiene.
              Having healthy hair allows us to look our best and
              ensure our hair and scalp is healthy.</div>
          {/*   <!-- <div className="try">TRY</div> --> */}
          </div>
          <div className="td" >
            <div className="circle c1">
              <img src="./assets/img/nail.webp"/>
            </div>
            <div className="tt">Taking care of your nails can help
              prevent infection. When you look good, you feel good.
              This is why pampering your nails can help you
              improve your mood and feel more positive about yourself. </div>
            {/* <!-- <div className="try">TRY</div> -->
 */}
          </div>
          <div className="td">
            <div className="circle c2">
              <img src="./assets/img/foot.jpg"/>
            </div>
            <div className="tt">moisturising your feet & controlling
              moisture loss is essential,
              not just for foot health.
              Aloe Vera is well known in foot care for being the
              best to hydrate and maintain moisture,
              and will be effective on all of your skin.
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
