import styles from './Card.module.css';

function Card(){
    return (
        <section className={styles.card}>
            <a
                 href="https://WWW.youtube.com/watch?v=B_nq7VTJZds"
                 rel="noreferrer noopener"  
                 target='_blank'>
                <img src="https://img.youtube.com/vi/B_nq7VTJZds/mqdefault.jpg" alt="Capa do vídeo" />
            </a>
        </section>
    );
}

export default Card;