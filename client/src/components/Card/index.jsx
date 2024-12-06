import styles from './Card.module.css';

const Card = ({ title, description }) => {
    return (
        <section className={styles.card}>
            <h3>{title}Titulo do projeto</h3>
            <p>{description}Descricao</p>
            <div className={styles.card_icons}>
                html
            </div>

            <button className={styles.card_buttons}>
                botao
            </button>
        </section>
    );
};

export default Card;