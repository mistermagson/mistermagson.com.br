import Link from "next/link";
import Image from "next/image";

const Perfil = () => {
    const perfil = 196
    const social = 48
    return (
        <div className="perfilContainer">
            <Image
                className="fotoPerfil"
                src="/images/perfil.jpg" alt="foto-magson" width={perfil} height={perfil}/>
            <span className="social">
                <Link href="https://instagram.com/mistermagson">
                  <a> <Image src='/images/instagram48.png' alt="instagram" width={social} height={social}/></a>
                </Link>
                <Link href='https://linkedin.com/in/mistermagson'>
                  <a> <Image src='/images/linkedin48.png' alt="linkedin" width={social} height={social}/></a>
                </Link>
                <Link href='https://github.com/mistermagson'>
                  <a> <Image src='/images/github48.png' alt="github" width={social} height={social}/></a>
                </Link>
            </span>
        </div>

    )
};

export default Perfil;