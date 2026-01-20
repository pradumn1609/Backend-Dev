const http = require("http");
const obj = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify(obj));
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});