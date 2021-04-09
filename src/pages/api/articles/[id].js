/*import {articles} from "../../../data"*/

export default  async function handler (req,res)
{
    //const filtered = article.filter(article => article.id === id)

    const article = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`).then(article => article.json())
   // console.log(article)
    if (article) {
        res.status(200).json(article)
    }
    else{
        res
            .status(404)
            .json({message: `Article not found`})
    }

}
