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
    this.post("/users/post", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      attrs.userObj.UserID = Date.now();
      attrs.userObj.LastLogin = new Date();

      return { users: attrs.userObj }
    });

  }
})