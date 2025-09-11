import './Contact.css'
import { FaPhone, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contact = () => {
    return (
        <section id='contacts' className='contact-section'>
            <div className='contact-box'>
                <h3>راه های ارتباط با من</h3>
                <div className='contact-items'>
                    <div className='contact-item'>
                        <FaPhone className='contact-icon' />
                        <a href="tel:+989125100600">09125100600</a>
                    </div>
                    <div className='contact-item'>
                        <FaTelegram className='contact-icon' />
                        <a href="https://t.me/SepehrShK" target="_blank" rel="noopener noreferrer">SepehrShK</a>
                    </div>
                    <div className='contact-item'>
                        <CgMail className='contact-icon' />
                        <a href="mailto:sepehrshayankia@gmail.com" target="_blank" rel="noopener noreferrer">sepehrshayankia@gmail.com</a>
                    </div>
                    <div className='contact-item'>
                        <FaLinkedin className='contact-icon' />
                        <a href="https://linkedin.com/in/sepehrshk" target="_blank" rel="noopener noreferrer">sepehrshk</a>
                    </div>
                    <div className='contact-item'>
                        <FaGithub className='contact-icon' />
                        <a href="https://github.com/SepehrShK" target="_blank" rel="noopener noreferrer">SepehrShK</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
