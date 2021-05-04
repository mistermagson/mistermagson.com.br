import Perfil from "../components/Perfil";

export default function Home() {
    return (
        <>
            <Perfil />
        </>
    )
}
/*export const getStaticProps = async () => {
    const articles = await fetch(`${server}/api/articles`).then(article => article.json())

    return {
        props: {articles}
    }
}*/

/*

export const getStaticProps = async () =>{
    const articles = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=6').then(post => post.json())

    return {
        props: {articles}
    }
}*/

export const getServerSideProps = async () => {

    const articles = await fetch(`${server}/api/articles`).then(article => article.json())
    // console.log('server: ',server)
    return {
        props: { articles }
    }
}