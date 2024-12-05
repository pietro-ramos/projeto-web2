import React from 'react';
import Chatbox from '../../components/Chatbox';
import styles from './Chatbot.module.css';

const Chatbot = () => {
  return (
    <div className={styles.chatbotContainer}>
      <h2>Chatbot de Serviços Públicos</h2>
      <p className={styles.description}>
        Consulte informações sobre serviços públicos nas cidades de Osório e Região.
      </p>
      <Chatbox />
    </div>
  );
};

export default Chatbot;