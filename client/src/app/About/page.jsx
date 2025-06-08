'use client';
import React, { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";



function page() {


    //  Meet Our Leadership Team  
    const teamMembers = [
        {
            name: 'Girajan Chaudhary',
            role: 'Founder & CEO',
            experience: '15+ years in Software Development',
            education: 'MS Computer Science, University of Texas',
            image: 'https://scontent.fbwa4-1.fna.fbcdn.net/v/t39.30808-6/477432064_648740897583930_8375864684725527244_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFQV3MN9BAOP1kuJyMvDtvoeLwgqZ64_Zh4vCCpnrj9mI2UykPbkxf204FtuUtjQyEUDg4cYA4sChRnOq5z4lNH&_nc_ohc=5WFxWdd9VfoQ7kNvwGwTizb&_nc_oc=AdnRnC93yRpnX_acugGo0S-Q8jx10mxorTiqY8cQmpAgP9zod-GU89shrAIMWENjXuLEnfxovGS7kabcN9wvSqrk&_nc_zt=23&_nc_ht=scontent.fbwa4-1.fna&_nc_gid=_mcnxPiMyFDh8e08Uswa_g&oh=00_AfJqUAcGIbpRbQgX6NGfoLNNtv3IsT0E93n4S4XyDWfbyA&oe=6845C718',
            badge: 'Founder & CEO'
        },
        {
            name: 'Rohit Tharu',
            role: 'Head of Curriculum',
            experience: '12+ years in Tech Education',
            education: 'PhD in Computer Science, IIT Delhi',
            image: 'https://scontent.fbwa4-1.fna.fbcdn.net/v/t39.30808-1/481982924_631300312853023_2889481084922151886_n.jpg?stp=c0.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGIntRLbE2sOjDzMjr5LtmO_f4mb6tCe_j9_iZvq0J7-IxUIhy8NbMhu30BGNR613hb4deiD_KUddGihtMdnoNi&_nc_ohc=6GonTPciWr4Q7kNvwFbzDf3&_nc_oc=Adn2XNqo1JBlGYjiZVTHdHl3TWRPbiMUnM5Lrq-e4ehJ9eFxxElqevhqwZF05vdyJxy9iWER6jxBFLYFl34z6aQs&_nc_zt=24&_nc_ht=scontent.fbwa4-1.fna&_nc_gid=-pUoCtro2F6k9X4rTOLSiQ&oh=00_AfK4yAyNcy6ioV4AEvOHzmaJOI_9sopPs876zl9a0vFEGw&oe=6845C145',
            badge: 'Head of Curriculum'
        },
        {
            name: 'Mamata Chaudhary',
            role: 'Lead Instructor - Data Science',
            experience: '10+ years in Data Analytics',
            education: 'MS Data Science, Stanford University',
            image: 'https://scontent.fbwa4-1.fna.fbcdn.net/v/t39.30808-6/482301185_668071108984242_3616051385216764202_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEQPfQ5LRjOYybogsyDlUf2_YSSr4O71wb9hJKvg7vXBplcdBKpmYEUrSfVQlqVBCTW1-dMDZL7AhqLVD6tX0jG&_nc_ohc=mwKBMR-oyyAQ7kNvwEZQX1v&_nc_oc=AdlBHbT6e0zwHoG2plr5UGcHlmeoBBmNAmrVdurzeSMDpCkyFxeZd6PhvnXIUxlZSNAKqiw6VTCuF7LNgUso4i_z&_nc_zt=23&_nc_ht=scontent.fbwa4-1.fna&_nc_gid=_69aEhxeM9kt3hYVE9WNfA&oh=00_AfITHBehsy7-OchfNxGkvNmW5SPOL9INikcdIY-4LS-Qxw&oe=6845D8A8',
            badge: 'Lead Instructor - Data Science'
        },
        {
            name: 'Girajan Chaudhary',
            role: 'Lead Instructor - Data Science',
            experience: '10+ years in Data Analytics',
            education: 'MS Data Science, Stanford University',
            image: 'https://scontent.fbwa4-1.fna.fbcdn.net/v/t39.30808-6/477432064_648740897583930_8375864684725527244_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFQV3MN9BAOP1kuJyMvDtvoeLwgqZ64_Zh4vCCpnrj9mI2UykPbkxf204FtuUtjQyEUDg4cYA4sChRnOq5z4lNH&_nc_ohc=5WFxWdd9VfoQ7kNvwGwTizb&_nc_oc=AdnRnC93yRpnX_acugGo0S-Q8jx10mxorTiqY8cQmpAgP9zod-GU89shrAIMWENjXuLEnfxovGS7kabcN9wvSqrk&_nc_zt=23&_nc_ht=scontent.fbwa4-1.fna&_nc_gid=_mcnxPiMyFDh8e08Uswa_g&oh=00_AfJqUAcGIbpRbQgX6NGfoLNNtv3IsT0E93n4S4XyDWfbyA&oe=6845C718',
            badge: 'Lead Instructor - Data Science'
        },
        {
            name: 'Girajan Chaudhary',
            role: 'Lead Instructor - Data Science',
            experience: '10+ years in Data Analytics',
            education: 'MS Data Science, Stanford University',
            image: 'https://scontent.fbwa4-1.fna.fbcdn.net/v/t39.30808-6/477432064_648740897583930_8375864684725527244_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFQV3MN9BAOP1kuJyMvDtvoeLwgqZ64_Zh4vCCpnrj9mI2UykPbkxf204FtuUtjQyEUDg4cYA4sChRnOq5z4lNH&_nc_ohc=5WFxWdd9VfoQ7kNvwGwTizb&_nc_oc=AdnRnC93yRpnX_acugGo0S-Q8jx10mxorTiqY8cQmpAgP9zod-GU89shrAIMWENjXuLEnfxovGS7kabcN9wvSqrk&_nc_zt=23&_nc_ht=scontent.fbwa4-1.fna&_nc_gid=_mcnxPiMyFDh8e08Uswa_g&oh=00_AfJqUAcGIbpRbQgX6NGfoLNNtv3IsT0E93n4S4XyDWfbyA&oe=6845C718',
            badge: 'Lead Instructor - Data Science'
        },
        {
            name: 'Girajan Chaudhary',
            role: 'Lead Instructor - Data Science',
            experience: '10+ years in Data Analytics',
            education: 'MS Data Science, Stanford University',
            image: 'https://scontent.fbwa4-1.fna.fbcdn.net/v/t39.30808-6/477432064_648740897583930_8375864684725527244_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFQV3MN9BAOP1kuJyMvDtvoeLwgqZ64_Zh4vCCpnrj9mI2UykPbkxf204FtuUtjQyEUDg4cYA4sChRnOq5z4lNH&_nc_ohc=5WFxWdd9VfoQ7kNvwGwTizb&_nc_oc=AdnRnC93yRpnX_acugGo0S-Q8jx10mxorTiqY8cQmpAgP9zod-GU89shrAIMWENjXuLEnfxovGS7kabcN9wvSqrk&_nc_zt=23&_nc_ht=scontent.fbwa4-1.fna&_nc_gid=_mcnxPiMyFDh8e08Uswa_g&oh=00_AfJqUAcGIbpRbQgX6NGfoLNNtv3IsT0E93n4S4XyDWfbyA&oe=6845C718',
            badge: 'Lead Instructor - Data Science'
        }

    ];

    const [showMore, setShowMore] = useState(false);

    const toggleParagraph = () => setShowMore(!showMore);
    return (
        <>
            {/* About page */}
            <section className='py-4'>

                <div className="container py-5">
                    <div className="row align-items-center">
                        {/* Text Section */}
                        <div className="col-md-6">
                            <h2 className="fw-bold mb-4">Our Story</h2>

                            {/* Collapsible text for mobile */}
                            <div className={showMore ? '' : 'd-none d-md-block'}>
                                <p>
                                    Founded in 2013, Tech Space Nepal began with a simple mission: to bridge the gap between academic learning and industry requirements in Nepal's growing technology sector.
                                </p>
                                <p>
                                    What started as a small training center with just 5 students has grown into Nepal's premier IT training institute, having trained over 5,000 students and maintained a 95% job placement rate.
                                </p>
                                <p>
                                    Today, we continue to evolve our curriculum based on industry trends and employer feedback, ensuring our graduates are job-ready and equipped with the latest skills.
                                </p>
                            </div>

                            {/* Toggle for mobile */}
                            <div className="d-md-none">
                                {showMore ? (
                                    <>
                                        <p>
                                            Founded in 2013, Tech Space Nepal began with a simple mission: to bridge the gap between academic learning and industry requirements in Nepal's growing technology sector.
                                        </p>
                                        <p>
                                            What started as a small training center with just 5 students has grown into Nepal's premier IT training institute, having trained over 5,000 students and maintained a 95% job placement rate.
                                        </p>
                                        <p>
                                            Today, we continue to evolve our curriculum based on industry trends and employer feedback, ensuring our graduates are job-ready and equipped with the latest skills.
                                        </p>
                                    </>
                                ) : (
                                    <p>
                                        Founded in 2013, Tech Space Nepal began with a simple mission: to bridge the gap between academic learning and industry requirements...
                                    </p>
                                )}

                                <button
                                    className="btn btn-link p-0"
                                    onClick={() => setShowMore(!showMore)}
                                >
                                    {showMore ? 'Read Less' : 'Read More'}
                                </button>
                            </div>

                            <div className="d-flex gap-4 mt-4">
                                <div className="text-center">
                                    <h4 className="text-primary">10+</h4>
                                    <p className="fw-semibold">Years of Excellence</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-primary">25+</h4>
                                    <p className="fw-semibold">Expert Instructors</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="col-md-6 position-relative mt-4 mt-md-0">
                            <div className="shadow rounded overflow-hidden">
                                <img
                                    className='w-100'
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                                    alt=""
                                />
                            </div>

                            {/* Badge */}
                            <div className="position-absolute bottom-0 start-0 translate-middle-y bg-white shadow p-3 rounded">
                                <h5 className="text-primary m-0">2013</h5>
                                <small className="text-muted">Established</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* About section */}
            <section className='py-3 mt-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    className="w-100"
                                    src="https://www.youtube.com/embed/DqfbSBggxvY?list=TLGGCIjdlIL4Yn8wNTA2MjAyNQ"
                                    title="Code IT | The Complete IT Solution"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4 className='text-danger  mb-3'>
                                Providing the Best IT Solutions for Your Business
                            </h4>
                            <p className="d-block d-md-none">
                                {showMore
                                    ? `At Code IT, we believe that technology is the key to success for businesses of all sizes. That's why we offer a wide range of IT solutions designed to help businesses improve their efficiency, productivity, and profitability. Our team of experienced and certified IT professionals can help you with all of your IT needs, from designing and implementing new IT systems to managing and maintaining your existing IT infrastructure. We also offer a variety of IT support services to help you keep your business running smoothly. We understand that every business is different, so we take the time to understand your specific needs and goals before recommending any IT solutions. We also offer a variety of flexible pricing options to fit your budget.

                                Whether you're looking to improve your customer service, streamline your operations, or expand into new markets, Code IT can help you achieve your business goals.`
                                    : `At Code IT, we believe that technology is the key to success for businesses of all sizes. That's why we offer a wide range of IT solutions designed to help businesses improve their efficiency...`}
                                <span
                                    onClick={toggleParagraph}
                                    style={{ color: 'blue', cursor: 'pointer' }}
                                >
                                    {showMore ? ' See less' : ' See more'}
                                </span>
                            </p>
                            <p className="d-none d-md-block">
                                At Code IT, we believe that technology is the key to success for businesses of all sizes. That's why we offer a wide range of IT solutions designed to help businesses improve their efficiency, productivity, and profitability. Our team of experienced and certified IT professionals can help you with all of your IT needs, from designing and implementing new IT systems to managing and maintaining your existing IT infrastructure. We also offer a variety of IT support services to help you keep your business running smoothly. We understand that every business is different, so we take the time to understand your specific needs and goals before recommending any IT solutions. We also offer a variety of flexible pricing options to fit your budget.

                                Whether you're looking to improve your customer service, streamline your operations, or expand into new markets, Code IT can help you achieve your business goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About section 2nd page */}
            <section className="py-5 text-center shadow">
                <div className="container">
                    <div className="row">
                        {/* Empty row - consider removing if unused */}
                    </div>
                    <div className="row">
                        <div className="col-lg-4 text-center mb-4">
                            <div className="class px-3">
                                <h5 className="fw-bold py-3">Online Advertising</h5>
                                <p>
                                    Get instant quality customer <br /> to your website with pin-point <br /> keyword advertising. I.T <br /> Smart has over 20 years <br /> advertising
                                </p>
                                <div className="text-danger">Learn More..</div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center mb-4">
                            <div className="class px-3">
                                <h5 className="fw-bold py-3">1 To 1 SEO Training</h5>
                                <p>
                                    Learn the fundamentals of <br /> SEO in this 4 hour training <br /> course. We also offer group <br /> SEO training courses all <br /> online.
                                </p>
                                <div className="text-danger">Learn More..</div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center mb-4">
                            <div className="class px-3">
                                <h5 className="fw-bold py-3">WordPress Services</h5>
                                <p>
                                    As well as building, hosting <br /> and fixing WordPress <br /> websites we also build <br /> integrations with EPOS <br /> systems and plugins...
                                </p>
                                <div className="text-danger">Learn More..</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Achievements */}
            <section className='py-4'>
                <div className="container text-center py-5">
                    <h2 className="fw-bold mb-3">Our Achievements</h2>
                    <p className="text-muted mb-5">
                        Numbers that speak to our commitment to excellence and student success.
                    </p>

                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <h3 className="text-primary fw-bold">5000+</h3>
                            <p className="text-muted">Students Trained</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h3 className="text-primary fw-bold">95%</h3>
                            <p className="text-muted">Job Placement Rate</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h3 className="text-primary fw-bold">500+</h3>
                            <p className="text-muted">Partner Companies</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h3 className="text-primary fw-bold">50+</h3>
                            <p className="text-muted">Course Offerings</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Our Core Values */}
            <section className="py-5 text-center shadow">
                <div className="container">


                    <div className="row">
                        <div className="col-lg-12  ">
                            <h4 className="fw-bold ">Our Core Values</h4>
                            <p>The principles that guide our approach to education and shape our culture.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 text-center">
                            <div className="class">

                                <h5 className="fw-bold py-3">Website Design</h5>
                                <p>We can get your new website up and running in days, with built in SEO as standard.</p>
                                <div className="text-danger">Learn More..</div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center">
                            <div className="class ">

                                <h5 className="fw-bold py-3">SEO</h5>
                                <p>Get website ranked on search engines and increase quality traffic, sales & leads...          </p>
                                <div className="text-danger">Learn More..</div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center">
                            <div className="class">

                                <h5 className="fw-bold py-3">Hands-On Website</h5>
                                <p>Your website fully assessed, then managed on a monthly basis, includes SEO, Security...
                                </p>
                                <div className="text-danger">Learn More..</div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center">
                            <div className="class">

                                <h5 className="fw-bold py-3">Consultancy</h5>
                                <p>We can get your new website up and running in days, with built in SEO as standard.</p>
                                <div className="text-danger">Learn More..</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* why choose Us */}
            <section className='py-4 bg-light'>
                <div className="container  ">
                    <div className="row ">
                        <div className="col-lg-6">
                            <img className='w-100' src="https://codeitappsware.com/frontend/img/why-choose-us.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 mt-5 ">
                            <h3 className='text-dark'>Why <span className='text-warning'>Choose Us:</span> </h3>

                            <p>Choose Code IT for unparalleled expertise, customized solutions, and a commitment to your success. Our years of experience, innovative approach, and comprehensive range of services ensure that your business gets the edge it needs to excel in today's competitive landscape. We prioritize your goals, providing tailored strategies that evolve with your needs. With Code IT, you're not just getting services – you're getting a dedicated partner invested in your growth.</p>
                        </div>
                    </div>
                </div>
                <div className="container  ">
                    <div className="row mt-5 ">

                        <div className="col-lg-6 mt-5 ">
                            <h3 className='text-dark'>Why <span className='text-warning'>Choose Us:</span> </h3>
                            <p>Choose Code IT for unparalleled expertise, customized solutions, and a commitment to your success. Our years of experience, innovative approach, and comprehensive range of services ensure that your business gets the edge it needs to excel in today's competitive landscape. We prioritize your goals, providing tailored strategies that evolve with your needs. With Code IT, you're not just getting services – you're getting a dedicated partner invested in your growth.</p>
                        </div>
                        <div className="col-lg-6">
                            <img className='w-100' src="https://codeitappsware.com/frontend/img/why-choose-us.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container  mt-5">
                    <div className="row  ">
                        <div className="col-lg-6">
                            <img className='w-100' src="https://codeitappsware.com/frontend/img/why-choose-us.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 mt-5 ">
                            <h3 className='text-dark'>Why <span className='text-warning'>Choose Us:</span> </h3>
                            <p>Choose Code IT for unparalleled expertise, customized solutions, and a commitment to your success. Our years of experience, innovative approach, and comprehensive range of services ensure that your business gets the edge it needs to excel in today's competitive landscape. We prioritize your goals, providing tailored strategies that evolve with your needs. With Code IT, you're not just getting services – you're getting a dedicated partner invested in your growth.</p>
                        </div>
                    </div>
                </div>
            </section>




            {/* Meet Our Team */}
            <section className='py-4'>
                <div className="bg-gray-50 py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold text-3xl mb-2">Meet Our Teams</h2>
                        <p className="text-muted mb-5">
                            Experienced professionals committed to delivering excellence in technology education.
                        </p>

                        <div className="row">
                            {teamMembers.map((member, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="card shadow-sm rounded-lg border-0 p-4 h-100">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="rounded-circle mx-auto mb-3"
                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                        />
                                        <h5 className="fw-bold">{member.name}</h5>
                                        <span className="badge bg-primary rounded-pill">
                                            {member.badge}
                                        </span>
                                        <p className="text-muted mb-1">{member.experience}</p>
                                        <p className="text-muted small">{member.education}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </section>

            {/* Visit Our Campus */}
            <section className='py-4 '>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <h2 className='fw-bold'>Visit Our Campus</h2>
                            <p className='mt-2'>Our modern campus in the heart of Kathmandu is equipped with state- <br />of-the-art facilities, computer labs, and collaborative learning spaces. </p>

                            <h6 className='fw-dark mt-3'><IoLocationOutline className="me-2 text-primary" />  Address</h6>
                            <p className='ms-4'>RPV8+X69, Lalmatiya 22404</p>

                            <h6 className='fw-dark mt-3'><FaGraduationCap className="me-2 text-primary" /> Facilities</h6>

                            <p className='ms-4'>Modern computer labs, project rooms, library, and student lounge</p>

                            <button className=' btn bg-primary text-center  text-white '>Schedule a Visit</button>


                        </div>

                        {/* Location */}
                        <div className="col-lg-6 justify-content-center aliGn-items-center mt-1 ">
                            <iframe className='w-100 shadow Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.8576151074813!2d82.7130302111346!3d27.844914219310684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997a5ea32a3ffff%3A0x53534073c7b7de95!2sRapti%20Rural%20Municipality!5e0!3m2!1sen!2snp!4v1749012076215!5m2!1sen!2snp" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                        </div>
                    </div>
                </div >
            </section >




        </>
    )
}

export default page
