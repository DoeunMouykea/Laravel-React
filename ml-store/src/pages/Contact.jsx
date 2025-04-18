import React from 'react'

export default function Contact() {
    return (
        <>
            {/* <!-- Page Add Section Begin --> */}
            <section class="page-add">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="page-breadcrumb">
                                <h2>Contact us<span>.</span></h2>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <img src="img/add.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Page Add Section End --> */}

            {/* <!-- Contact Section Begin --> */}
            <div class="contact-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <form action="#" class="contact-form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input type="text" placeholder="First Name" />
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="text" placeholder="Last Name" />
                                    </div>
                                    <div class="col-lg-12">
                                        <input type="email" placeholder="E-mail" />
                                        <input type="text" placeholder="Subject" />
                                        <textarea placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-lg-12 text-right">
                                        <button type="submit">Send message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-3 offset-lg-1">
                            <div class="contact-widget">
                                <div class="cw-item">
                                    <h5>Location</h5>
                                    <ul>
                                        <li>Russian Federation Blvd (110), </li>
                                        <li>Phnom Penh 120404</li>
                                    </ul>
                                </div>
                                <div class="cw-item">
                                    <h5>Phone</h5>
                                    <ul>
                                        <li>+855 85378162</li>
                                        <li>+855 979051443</li>
                                    </ul>
                                </div>
                                <div class="cw-item">
                                    <h5>E-mail</h5>
                                    <ul>
                                        <li>contact@mlstore.com</li>
                                        <li>www.mlstore.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="map">
                        <div class="row">
                            <div class="col-lg-12">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7652231711418!2d104.8881667747755!3d11.568681244081688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1744443183423!5m2!1sen!2skh"
                                    title="Google Maps Location" // <-- Add a meaningful title here
                                    width="600"
                                    height="650"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact Section End --> */}
        </>
    )
}
