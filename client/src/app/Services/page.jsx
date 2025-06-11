'use client';
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { CountUp } from 'countup.js';




// slidesPerView
const services = [
    {
        img: "https://softbenz.com/media/services/Website_developlent.svg",
        title: "Website Development",
        desc: "Highly functional & visually appealing website designed to meet your need."
    },
    {
        img: "https://softbenz.com/media/services/App_Development.svg",
        title: "App Development",
        desc: "Innovative and user-friendly mobile application designed to engage users."
    },
    {
        img: "https://softbenz.com/media/services/Programmer-amico.svg",
        title: "System/Software Development",
        desc: "System/software developed according to your business needs."
    },
    {
        img: "https://softbenz.com/media/services/UI_UX.svg",
        title: "UI/UX",
        desc: "Design eye-catching UI/UX interfaces for effortless user interaction."
    },
    {
        img: "https://softbenz.com/media/services/SEO_analytics_team-amico.svg",
        title: "SEO Optimization",
        desc: "Improve visibility with smart SEO strategies tailored for you."
    },
    {
        img: "https://softbenz.com/media/services/Mobile_Marketing-pana.svg",
        title: "Digital Marketing",
        desc: "Marketing that connects your brand with the right audience."
    },
    {
        img: "https://softbenz.com/media/design/Website_Creator-pana.svg",
        title: "Custom Web Design",
        desc: "Tailored website designs to match your brand identity."
    },
    {
        img: "https://softbenz.com/media/content-marketing/Blog_post-bro.svg",
        title: "Content Marketing",
        desc: "Engaging content strategies to boost your business growth."
    },
];


function page() {
    // number section
    const refs = {
        design: useRef(),
        dev: useRef(),
        host: useRef(),
        marketing: useRef(),
    };
    useEffect(() => {
        const options = { startVal: 30, duration: 2 };

        const anims = [
            new CountUp(refs.design.current, 95, options),
            new CountUp(refs.dev.current, 80, options),
            new CountUp(refs.host.current, 70, options),
            new CountUp(refs.marketing.current, 75, options),
        ];

        anims.forEach((anim) => {
            if (!anim.error) anim.start();
            else console.error(anim.error);
        });
    }, []);


    return (
        <>

            {/* services */}
            <section className='py-4'>
                <h2 className='fw-bold text-center '>Our Services</h2>
                <h5 className='text-center mt-3'>Exceptional Services For Your Business Growth</h5>
                <h6 className='text-center fw-bold mb-4 mt-3'>
                    Discover our wide range of digital solutions to enhance your online presence.
                </h6>

                <div className="container text-center service-card">
                    {/* Desktop grid view */}
                    <div className="d-none d-lg-block">
                        <div className="row gy-4">
                            {services.map((item, index) => (
                                <div
                                    className="col-lg-3 text-center service-card"
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 200}
                                >
                                    <img className='service img-fluid' src={item.img} alt={item.title} />
                                    <h4 className='fw-bold mt-2'>{item.title}</h4>
                                    <p className='fs-5'>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Swiper view */}
                    <div className="d-lg-none">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                        >
                            {services.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="text-center px-4"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200}
                                    >
                                        <img className='service img-fluid' src={item.img} alt={item.title} />
                                        <h4 className='fw-bold mt-3'>{item.title}</h4>
                                        <p className='fs-6'>{item.desc}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* number section */}
            <section
                className="position-relative text-white py-5"
                style={{
                    backgroundImage:
                        "url('https://emeritus.org/in/wp-content/uploads/sites/3/2022/06/IT-skills-1.jpg.optimal.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ backgroundColor: 'rgba(255, 102, 0, 0.9)' }}
                ></div>

                {/* Content */}
                <div className="container position-relative">
                    <div className="row text-center">
                        <div className="col-md-3 mb-4">
                            <h2 className="display-4 fw-bold">
                                <span ref={refs.design}></span>%
                            </h2>
                            <p className="fs-5">Web Design</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h2 className="display-4 fw-bold">
                                <span ref={refs.dev}></span>%
                            </h2>
                            <p className="fs-5">Web Development</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h2 className="display-4 fw-bold">
                                <span ref={refs.host}></span>%
                            </h2>
                            <p className="fs-5">Web Hosting</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h2 className="display-4 fw-bold">
                                <span ref={refs.marketing}></span>%
                            </h2>
                            <p className="fs-5">Digital Marketing</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Our Services Section --> */}
            {/* <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center fw-bold mb-3">Our Services</h2>
      <p class="text-center text-muted mb-4">
        We provide a wide range of digital services to help your business grow.
      </p>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <div class="service-icon">💻</div>
              <h5 class="card-title fw-semibold">Web Development</h5>
              <p class="card-text">Building responsive and scalable websites.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <div class="service-icon">🎨</div>
              <h5 class="card-title fw-semibold">UI/UX Design</h5>
              <p class="card-text">Crafting user-friendly and engaging interfaces.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <div class="service-icon">📱</div>
              <h5 class="card-title fw-semibold">Mobile App Development</h5>
              <p class="card-text">Creating powerful and intuitive mobile applications.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <div class="service-icon">📈</div>
              <h5 class="card-title fw-semibold">Digital Marketing</h5>
              <p class="card-text">Driving traffic and increasing conversions online.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}




        </>
    )
}

export default page
