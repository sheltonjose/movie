import Banner from "./components/Banner"
import Card from "./components/Card"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Videos  from "./JSON/videos.json"

function App() {


  return (
      <>
      <Header/>
      <Banner image="Home" />
      <Container>

        <h2>Georgrafia</h2>

       <section className="cards">  
        {
          Videos.map(video =>{
            return <Card id={video.id} key={video.id}/>
          })
        }
       </section>

     </Container>
      <Footer/>
      </>
    
  )
}

export default App
