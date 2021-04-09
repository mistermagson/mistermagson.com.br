export default  async function handler (req,res)
   {
      //const filtered = article.filter(article => article.id === id)

      const articles = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=6').then(post => post.json())
      // console.log(article)
      if (articles) {
         res.status(200).json(articles)
      }
      else{
         res
             .status(404)
             .json({message: `Articles not found`})
      }



}
