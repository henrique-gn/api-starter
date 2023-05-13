import { Application } from "../types"

export function setupRoutes(app: Application) {
  app.get("/", (req, res) => {
    res.send("Hello world!")
  })
}
