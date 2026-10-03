import styles from "./Category.module.css"
import Videos  from "../../JSON/videos.json"

 export const categories =[
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia e Hidrografia"
  ]

  export function filterCategory(index){
    return Videos.filter(video =>video.category===categories[index])
  }





function Category({category, children}){
    return(
    
     <section className={styles.category}>
            <h2>{category}</h2>
            <div>  
                {children}
            </div>
     </section>

    );
}

export default Category;