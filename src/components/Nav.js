import Link from "next/link";

const Nav = () => {

    let left = (
        <>
            <Link href={"/"}>
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3">Home</a>
            </Link>
            <Link href={"/sobre"}>
                <a className="nav-link">Sobre</a>
            </Link>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <input className="form-control form-control-dark w-100" type="text" placeholder="Busca"
                   aria-label="Search"/>
        </>
    )

    let right = (
        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">Sign out</a>
            </li>
        </ul>
    )

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            {left}
            {right}
        </header>
    )
}

export default Nav;
