import {server} from "../config";
import ArticleList from "../components/ArticleList";

export default function Home({articles}) {
    return (
        <>
            <ArticleList articles={articles}/>
        </>
    )
}
/*export const getStaticProps = async () => {
    const articles = await fetch(`${server}/api/articles`).then(article => article.json())

    return {
        props: {articles}
    }
}*/


export const getStaticProps = async () =>{
    const articles = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=6').then(post => post.json())

    return {
        props: {articles}
    }
}