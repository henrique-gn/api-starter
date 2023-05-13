import express from "express"
import { setupMiddleware } from "./middleware/setup"
import { setupRoutes } from "./controllers/setup"
import { config } from "dotenv"

function createApp() {
  const app = express()
  setupMiddleware(app)
  setupRoutes(app)
  return app
}

export function startApp() {
  config()
  const port = process.env.PORT || 3000
  createApp().listen(port, () => console.log("Server started on port", port))
}
