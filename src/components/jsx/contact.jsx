import { Component } from "react";
import styles from "./../css/contact.module.css";

class Contact extends Component {
  render(){
    return (
  <section className={styles.contactSection}>

      <div>

        <h2 className={styles.contactTitle}>Contact Me</h2>

        <div className={styles.waysToContactContainer}>

          <p>
            Email: <br />dannyjdurant@gmail.com <br />runedurant@gmail.com
          </p>

          <p>
          LinkedIn: <br /> https://www.linkedin.com/in/daniel-durant
          </p>

          <p>
          GitHub: <br /> https://github.com/DDurant94
          </p>

        </div>

      </div>

    </section>
    )
  }
}

export default Contact