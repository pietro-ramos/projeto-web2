import styles from "./Contact.module.css";
import { GoMail } from "react-icons/go";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
    return (
        <section className={styles.contact}>
            <h2>Contact</h2>
            <br />
            <h3>Hi! I'm Pietro Ramos, a student of Systems Analysis and Development at IFRS.</h3>
            <br />
            <p>Feel free to contact me through the following channels:</p>
            <br />

            <div className={styles.icons}>

                <a href='mailto:pietroramos.dev@gmail.com' target="_blank" rel='noopener noreferrer'>
                <GoMail className={styles.icon} />
                </a>

                <a href='https://www.instagram.com/pietroramos.dev/' target='_blank' rel='noopener noreferrer'>
                <BsInstagram className={styles.icon} />
                </a>

                <a href='https://github.com/pietro-ramos' target='_blank' rel='noopener noreferrer'>
                <BsGithub className={styles.icon} />
                </a>

                <a href='https://www.linkedin.com/in/pietro-ramos-440b88243/' target='_blank' rel='noopener noreferrer'>
                <BsLinkedin className={styles.icon} />
                </a>

            </div>

        </section>
    );

}

export default Contact;