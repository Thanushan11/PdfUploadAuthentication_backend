## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Thanushan11/PdfUploadAuthentication_backend

2. **Navigate to the project directory:**
    ```sh
    cd server
    ```

3. **Install dependencies:**
    ```sh
    npm install
    ```

4. **Set up environment variables:**
    - Create a `.env` file based on `.env.example` and configure necessary environment variables like database connection details, API keys, etc.
    - Example `.env` file:
      ```
      DB="mongodb://localhost:27017/test"(give your db address)
      JWTPRIVATEKEY=1234
      SALT = 10;
      PORT=8080;
5. **Start the server:**
    ```sh
   nodemon index.js
    ```

6. **Your backend server should now be running at `http://localhost:8080` 
