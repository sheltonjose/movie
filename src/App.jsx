import Banner from "./components/Banner"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {


  return (
      <>
      <Header/>
      <Banner/>
      <Container>
        <h1>hello world</h1>
        <p>Olá Mundo, estou aprendendo React JS!</p>
          
     </Container>
      <Footer/>
      </>
    
  )
}

export default App
