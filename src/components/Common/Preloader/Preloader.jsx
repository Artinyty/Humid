import React from "react"
import preloader from "../../../assets/images/preloarder.gif"
import styles from "./Preloader.module.css"


let Preloader = (props) => {
  return <div>
    <img src={preloader} alt="hh" className={styles.preloarder} />
  </div>
}

export default Preloader;