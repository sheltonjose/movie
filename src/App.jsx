import Home from "./Pages/Home"
import Card from "./components/Card"
import Category, {categories, filterCategory}from "./components/Category"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRoutes from "./routes"

function App() {


  return (
      <>
      
     
      <AppRoutes/>

     

      {/*
       <h2>Georgrafia</h2>
       <section className="cards">  
        {
          Videos.map(video =>{
            return <Card id={video.id} key={video.id}/>
          })
        }
       </section>
        */}







   



{/*
       <Category category={categories[1]}>
            {
          filterCategory(1).map(video =>{
            return <Card id={video.id} key={video.id}/>
          })
       }
      </Category>
*/}


       


     
      
      </>
    
  )
}

export default App
