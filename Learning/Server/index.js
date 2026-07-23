import http from 'http'
import fs from 'fs'


const Server = http.createServer((req, res) => {
    const log = `${Date.now().toLocaleString()} ${req.url} ${req.signal} New Request Recieved.\n`
    fs.appendFile("log.txt", log, (err, data) => {
        if (err) {
            console.log("Error :", err);
            
        } else {
            switch (req.url) {
                case '/':
                    res.end("Hello from server HomePage");
                    break;
                case "/about":
                    res.end("Hello, I'm Mehmood Coder");
                    break
                default:
                    res.end("404 Error Not Found")
                    break;
            }
            
        }
    })
    console.log(req.headers);
    
})


Server.listen(8000, () => console.log("server started"))
