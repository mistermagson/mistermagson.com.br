import styles from "../styles/perfil.module.scss";
import Link from "next/link";

const Perfil = () => {
  return (
    <div className={styles.perfilContainer} >
      <img className={styles.fotoPerfil} src="../images/perfil.jpg" alt="foto-magson" />
      <span className={styles.block}>
        <Link href="https://instagram.com/mistermagson" >
          <a> <img src="../images/instagram48.png" alt="instagram" /></a>
        </Link>
        <Link href="https://linkedin/in/mistermagson" >
          <a > <img src="../images/linkedin48.png" alt="linkedin" /></a>
        </Link>
        <Link href="https://github.com/mistermagson" >
          <a> <img src="../images/github48.png" alt="github" /></a>
        </Link>
      </span>
    </div>

  )
};

export default Perfil;