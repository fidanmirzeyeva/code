import React, { useState } from "react";
import "./Contact.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Burada form məlumatlarını göndərmək əvəzinə konsola yazırıq
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact Page</title>
        </Helmet>
      </HelmetProvider>

      <div className="container">
        <div className="contact_sect">
          <div className="contact_img">
            <img
              src="https://static.wixstatic.com/media/c837a6_83b176717069492394ec2ba4393637ed~mv2.jpg/v1/fill/w_611,h_1123,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_83b176717069492394ec2ba4393637ed~mv2.jpg"
              alt=""
            />
          </div>
          <div className="contact-info">
            <h1>Bizimlə əlaqə</h1>
            <p>
              Sizə geri dönüş edə bilməyimiz üçün adınızı,e-mail adresinizi və mesajınızı
              bizə göndərin.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn_contact">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3039.6692780480257!2d49.83439887003044!3d40.371857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1719760167573!5m2!1sen!2saz"></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
