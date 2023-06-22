import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 4rem 5rem 4rem;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 30rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            max-width: 10rem;
            background:violet;
            color:black;
            font-weight:bold;
            font-size:1.5rem;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2
        className="common-heading"
        style={{ color: "white", textShadow: "1px 1px yellow" }}
      >
        Contact &nbsp;Me
      </h2>

      <iframe
        title="gh"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.352666515293!2d88.35844187414921!3d22.565909533217805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277aaf066a6d9%3A0x2d42cce65bdb98f3!2sDhiren%20Dhar%20Sarani%2C%20Bowbazar%2C%20Kolkata%2C%20West%20Bengal%20700012!5e0!3m2!1sen!2sin!4v1681847335827!5m2!1sen!2sin"
        alt="img"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xqkoywjd"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
