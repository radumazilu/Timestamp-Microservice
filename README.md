# Timestamp-Microservice
https://www.freecodecamp.com/challenges/timestamp-microservice


      h1 API Project: URL-Shortener Microservice
      p 
        |By radumazilu | 
        a(href="https://github.com/radumazilu") See it on GitHub
      blockquote User Stories:
        ol
          li I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
          li If I pass an invalid URL that doesn't follow the valid /add/http://www.example.com format, the JSON response will contain an error instead.
          li When I visit that shortened URL, it will redirect me to my original link.
      h2 Example Usage:
      code https://radumazilu-timestamp-service.herokuapp.com/add/
      br
      code https://radumazilu-timestamp-service.herokuapp.com/
      h2 Example Output:
      code {"original_url":"https://www.google.com","short_url":"http://localhost:3000/7062"}
      br
      code {"error":"Wrong url format, make sure you have a valid protocol and real site."}
      br
      code {"error":"This url is not on the database."}
