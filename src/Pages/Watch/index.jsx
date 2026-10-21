import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css"
import { useParams } from "react-router-dom";
import videos from "../../JSON/videos.json";
import PageNotFound from "../PageNotFound";

function Watch(){
    const params = useParams();
    const video = videos.find((video)=>{return video.id === params.id})
    if(!video){return <PageNotFound/>}

    return (
        <>
            <Header/>
            <Container>
                <section className={styles.watch}>

                    <iframe 
                        width="854" height="450" 
                        src={`https://WWW.youtube.com/embed/${video.id}`}
                        title="Youtube video player"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

                    </iframe>
                </section>
            </Container>
          <Footer/>
        
        </>
   
    );
}

export default Watch;