import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Search.module.css";
import VideoList from "../../components/VideoList";
import Videos from "../../JSON/videos.json"

function Search(){
    return(
        <>
            <Header/>
            <Container>
            <section className={styles.search}>
                <h2>Pesquisar</h2>
                <VideoList videos={Videos}/>
            </section>
            </Container>
            <Footer/>
        
        </>
    );

}

export default Search;