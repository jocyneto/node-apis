import http from "http";

const PORT = 3000;

const server = http.createServer((response, request) =>{
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Funcionando!");
});

server.listen(PORT, ()=>{
    console.log("servidor aberto!");
})