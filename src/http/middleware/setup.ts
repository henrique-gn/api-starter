import cors from "cors"
import express, { Application } from "express"
import morgan from "morgan"

export function setupMiddleware(app: Application) {
  app.use(morgan("dev"))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())
}
