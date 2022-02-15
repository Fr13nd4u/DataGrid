import { createServer } from "miragejs"

import { users } from "./data/users"

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/users', () => {
      return {
        users
      }
    })
  },
})