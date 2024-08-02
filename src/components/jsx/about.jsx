import styles from"./../css/about.module.css"

function About (){
  return (
    <section className={styles.sectionContainer}>

      <div>

        <h2 className={styles.aboutTitle}>About Me</h2>

        <p>
          I am Daniel Durant a father of two boys and aspiring software developer trying to change career paths. A few things I like to do are 
          spending quality time with my boys, playing chess, working out and going on adventures.
        </p>

      </div>

    </section>
  )
}

export default About