import style from "../Contact/Contact.module.css";
import Line from "../Design/Line.jsx";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const {
    contact,
    contactHeader,
    contactForm,
    contactImg,
    contactContent,
    formContent,
    personalInfo,
    formControl,
    formControlTextArea,
    btnSubmit
  } = style;

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false); // tracks if message was sent

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Disable button while sending
    setIsSending(true);

    emailjs
      .sendForm(
        "service_pmqqyjm",
        "template_z7ooolb",
        formRef.current,
        "vx34HI916oGBewfv1"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSending(false);
          setIsSent(true);
          formRef.current.reset();

          setTimeout(() => {
            setIsSent(false);
          }, 3000);
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          setIsSending(false); // Allow retry
        }
      );
  };

  return (
    <div className={contact} id="contact">
      <div className={contactHeader}>
        <h1>Contact Us</h1>
        <Line />
      </div>

      <div className={contactForm}>
        <div className={contactImg}>
          <img
            src="phone-contact.gif"
            alt="Phone Contact"
            title="Phone Contact by Freepik"
          />
        </div>
        <div className={contactContent}>
          <h2>GET IN TOUCH</h2>
          <h1>Excited to hear about what you're working on</h1>
          <p>
            Whether it’s about a collaboration, an opportunity, a
            recommendation, or even just a friendly hello, your message truly
            means a lot. I’d be happy to connect and build something meaningful
            with you.
          </p>
          {/* Updated form with ref and names */}
          <form ref={formRef} onSubmit={sendEmail} className={formContent}>
            <div className={personalInfo}>
              <input
                className={formControl}
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className={formControl}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className={formControl}
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className={`${formControl} ${formControlTextArea}`}
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <div>
              <button
                className={`${btnSubmit} ${isSent ? style.btnSent : ""}`}
                type="submit"
                disabled={isSending || isSent}
              >
                {isSending ? "Sending..." : isSent ? "Sent" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
