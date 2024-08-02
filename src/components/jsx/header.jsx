import styles from "./../css/header.module.css"

function Header(){
  return (
  <header className={styles.headerInfoContainer}>

    <div className={styles.headerInfo}>

    <h1>Daniel Durant</h1>
    <p>Aspiring Software Developer learning React!</p>

    </div>

  </header>
  )

}

export default Header