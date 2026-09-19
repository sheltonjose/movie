import Banner from "./components/Banner"
import Card from "./components/Card"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {


  return (
      <>
      <Header/>
      <Banner image="Home" />
      <Container>
        <h2>Georgrafia</h2>
       <section className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
       </section>
     </Container>
      <Footer/>
      </>
    
  )
}

export default App
