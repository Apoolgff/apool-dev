import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-content">
                <div className="contact-form">
                    <h1 className="contact-title">Contacto</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Enviar</button>
                    </form>
                </div>
                <div className="contact-image-container">
                    <img src="/tv.gif" alt="Contact Us" className="contact-image" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
