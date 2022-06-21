import { burgers } from "./data/burgers";

export default function handler(req, res) {
    res.status(200).json(burgers)
}