import React from "react";

function Contact() {
    return (
        <section id="contact" class="contact">
            <div class="container wrapper" data-aos="fade-up">
                <div class="section-title">
                    <h3>Contact</h3>
                </div>

                <div>
                    <iframe
                        style={{border: '0', width: '100%', height: '270px'}}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9125118811285!2d-0.12353629999999999!3d51.51482105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccac69823f%3A0x4eb63cbd6bcc52c7!2sShelton%20St%2C%20London%20WC2H%209JQ!5e0!3m2!1sen!2suk!4v1670582382339!5m2!1sen!2suk"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="content-box">
                    <div class="left">
                        <div class="info">
                            <div class="address info-pack">
                                <i class="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>
                                    Shelton Street, Covent Garden, El, London,
                                    WC2H 9JQ, United Kingdom
                                </p>
                            </div>

                            <div class="email info-pack">
                                <i class="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@logo.com</p>
                            </div>

                            <div class="phone info-pack">
                                <i class="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+44 0000000000</p>
                            </div>
                            <div class="phone info-pack">
                                <i class="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+44 0000000000</p>
                            </div>
                        </div>
                    </div>

                    <div class="right">
                        <form
                            action="forms/contact.php"
                            method="post"
                            role="form"
                            class="php-email-form"
                        >
                            <div class="form-essential">
                                <input
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                />
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div class="subject">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div class="message">
                                <textarea
                                    class="form-control"
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                            {/* <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit">Send Message</button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
