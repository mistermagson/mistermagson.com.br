import Link from "next/link";

const Nav = () => {

    let left = (
        <>
            {/*  <Link href={"/"}>
                <a>Home</a>
            </Link>
            <Link href={"/sobre"}>
                <a>Sobre</a>
            </Link> */}
        </>
    )

    let right = (
        <>
            {/* <Link href="#">
                <a >ENTRAR</a>
            </Link> */}
        </>
    )

    return (
        <nav>
            {left}
            {right}
        </nav>
    )
}

export default Nav;
