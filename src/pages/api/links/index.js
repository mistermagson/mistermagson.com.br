import { links } from "../../../linktree"

export default function handler(req, res) {
    res.status(200).json(links)
}
