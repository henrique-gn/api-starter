import { connectDatabase } from "./database"
import { connectStorage } from "./storage"

export function setupServices() {
  connectDatabase()
  connectStorage()
}
