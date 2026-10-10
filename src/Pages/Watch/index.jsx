import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css"

function Watch(){
    return (
        <>
            <Header/>
            <Container>
                <section className={styles.watch}>

                    <iframe width="854" height="450" src="https://WWW.youtube.com/embed/KsFLXOTflsM" title="Youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

                    </iframe>
                </section>
            </Container>
          <Footer/>
        
        </>
   
    );
}

export default Watch;