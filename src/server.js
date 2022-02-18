import { createServer } from "miragejs"

import { users } from "./data/users"

createServer({
  routes() {
    this.namespace = 'api'

    // Responding to a GET request
    this.get('/users', () => {
      return {
        users
      }
    }, {timing: 1000}); // Using to slow down the response

    // Responding to a POST request
    this.post("/movies", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      attrs.id = Date.now()

      return { movie: attrs }
    });

  }
})