import styles from "./Banner.module.css"

function Banner(){
     return(
        <div
             className={styles.banner}
            style={{backgroundImage: "url('/images/banner-home.jpeg')" } }
         ></div>
     );
}
export default Banner;