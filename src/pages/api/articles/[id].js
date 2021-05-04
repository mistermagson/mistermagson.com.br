import {articles} from "../../../data"

export default  async function handler ({query: {id}}, res)
{
    //console.log(id)
    const filtered = articles.filter(article => article.id === id)
//    const article = await fetch(`${server}/api/articles/${id}`).then(article => article.json())
    //const article = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`).then(article => article.json())
   // console.log(article)
    if (filtered) {
        res.status(200).json(filtered[0])
    }

    else{
        res
            .status(404)
            .json({message: `Article not found`})
    }

}
