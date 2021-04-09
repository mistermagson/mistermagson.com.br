import Nav from "./Nav";
import Meta from "./Meta";

const Layout = ({children}) => {
    return (
        <>
            <Meta />
            <Nav/>
            <layout className={"container-fluid"}>
                <main>
                    {children}
                </main>
            </layout>
        </>

    )
};

export default Layout;