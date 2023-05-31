// запустить: node server.js

// получить данные:
 //fetch("http://localhost:3000/")
 //  .then((response) => response.json())
 //  .then((data) => console.log(data));

let data = {
    response: 200,
    description: "information about names",
    names: [
        {
            name: "Иван",
            age: 22,
            city:"Анапа"
        },
        {
            name: "Ахмед",
            age:56,
            city:"Сочи"
        },
        {
            name: "Лягушка",
            age:234,
            city:"Краснодар"
        },
    ]
}

const http = require("http")
const port = 3000

const requireHandler = (request, response) => {
    console.log("Server request");
    response.setHeader("Coontent-Type", "application/json")
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.end(JSON.stringify(data))
};

const server = http.createServer(requireHandler)

server.listen(port, (error) => {
    error
    ? console.log(error)
    : console.log(`Сервер запущен по адресу: http://localhost:${port}`)
})