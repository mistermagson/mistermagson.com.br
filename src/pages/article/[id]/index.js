import Link from "next/link";
import {server} from "../../../config";


const article = ({article}) =>{
   /* const router = useRouter()
    const {id} = router.query*/
    console.log(article)
    return (
        <>
            <h1>{article.id}</h1>
            <p>{article.body}</p>
            <Link href='/'>Voltar</Link>
        </>
    );
}
export const getStaticProps = async (context) =>{
    const article = await fetch(`${server}/api/articles/${context.params.id}`).then(article => article.json())

    return{
        props:{article}
    }
}

export const getStaticPaths = async () =>  {
    const articles = await fetch(`${server}/api/articles`).then(article => article.json())
    const ids = articles.map( (article) => article.id)

    const paths = ids.map((id) =>({params:{id: id.toString()}}))
    return{
        paths,
        fallback: false
    }
}

/*export const getStaticProps = async (context) =>{
    const article = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`).then(article => article.json())

    return{
        props:{article}
    }
}

export const getStaticPaths = async () =>  {
    const articles = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(article => article.json())
    const ids = articles.map( (article) => article.id)

    const paths = ids.map((id) =>({params:{id: id.toString()}}))
    return{
        paths,
        fallback: false
    }
}*/

export default article;