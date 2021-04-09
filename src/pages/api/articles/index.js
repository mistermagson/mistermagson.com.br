import {articles} from "../../../data"

function Handler(req,res) {
 res.status(200).json(articles)
}
export default Handler