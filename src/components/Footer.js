import Head from "next/head";

const Footer = ({children}) =>{
    return(
        <>
            <footer >
                {children}
            </footer>
        </>
    )
};


export default Footer;