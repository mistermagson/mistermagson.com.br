import { links } from "../../../links"

export default async function handler(req, res) {

   if (links) {
      res.status(200).json(links)
   }
   else {
      res
         .status(404)
         .json({ message: `Links nao encontrados` })
   }
}
