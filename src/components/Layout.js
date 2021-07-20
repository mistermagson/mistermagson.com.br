import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";

const Layout = ({ children }) => {

    let date = new Date(Date.now());
    let ano = date.getFullYear();

    return (
        <>
            <Meta />


            {children}

            <Footer >

                <small>Mister Magson - Copyright &copy; {ano} </small>

            </Footer>

        </>

    )
};

export default Layout;