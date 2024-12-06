import { React } from "react";
import avatar from "./images/avatar.png";
import styles from "./About.module.css";
import react from "./images/icon-react.svg";
import node from "./images/icon-node.svg";
import python from "./images/icon-python.svg";
import java from "./images/icon-java.svg";
import sql from "./images/icon-sql.svg";
import mongodb from "./images/icon-mongodb.svg";
import rabbitmq from "./images/icon-rabbitmq.svg";

const About = () => {
    return (
        <>
            <section className={styles.about}>
                <div className={styles.bio}>
                    <img src={avatar} alt="Avatar" className={styles.avatar}/>
                    <div className={styles.texts}>
                        <h2>About</h2>
                        <p>
                         My name is <strong>Pietro Ramos</strong>. I am a software developer and systems analyst.
                            <br />
                        </p>
                        <br />
                        <p>
                        I am a student of Systems Analysis and Development with experience in financial data management and analysis, <br />
                         process automation, and development of technological tools.
                            <br />
                        </p>
                        <br />
                        <p>
                        Currently, I work on developing technological solutions that optimize business processes <br />
                         and improve the accuracy and efficiency of financial analyses. 
                            <br />
                        </p>
                        <br />
                        <p>
                        I am continuously expanding my knowledge in microservices and technologies such as Docker, <br />
                         RabbitMQ, and messaging services.                            <br />
                        </p>
                    </div>

                </div>
                 <div className={styles.techs}>
                        <img src={react} alt="Ícone do React" />
                        <img src={node} alt="Ícone do Node" />
                        <img src={python} alt="Ícone do Python" />
                        <img src={java} alt="Ícone do Java" />
                        <img src={sql} alt="Ícone do SQL" />
                        <img src={mongodb} alt="Ícone do MongoDB" />
                        <img src={rabbitmq} alt="Ícone do RabbitMQ" />
                </div>
            </section>
        </>
    );
}

export default About;