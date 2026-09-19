import styles from './Card.module.css';

function Card({id}){
    return (
        <section className={styles.card}>
            <a
                 href={`https://WWW.youtube.com/watch?v=${id}`}
                 rel="noreferrer noopener"  
                 target='_blank'>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa do vídeo" />
            </a>
        </section>
    );
}

export default Card;