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
                        <h2>Sobre</h2>
                        <p>
                         Me chamo <strong>Pietro Ramos</strong>. Sou desenvolvedor de software e analista de sistemas.
                            <br />
                        </p>
                        <br />
                        <p>
                        Estudante de Análise e Desenvolvimento de Sistemas com experiência em gestão e análise de dados financeiros, <br />
                         automação de processos e desenvolvimento de ferramentas tecnológicas.
                            <br />
                        </p>
                        <br />
                        <p>
                        Atualmente, atuo no desenvolvimento de soluções tecnológicas que otimizam processos empresariais <br />
                         e melhoram a precisão e eficiência das análises financeiras. 
                            <br />
                        </p>
                        <br />
                        <p>
                        Estou expandindo continuamente meu conhecimento em microsserviços e tecnologias como Docker, <br />
                         RabbitMQ e serviços de mensageria.                            <br />
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