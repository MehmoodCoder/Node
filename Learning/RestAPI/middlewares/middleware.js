import fs from 'fs';

function logReqRes(fileName) {
    return (req, res, next) => {
        const log = `\n[${new Date().toLocaleString()}] ${req.method}: ${req.path} IP : ${req.ip}`;
        
        fs.appendFile(fileName, log, (err) => {
            if (err) {
                console.error("Error writing to log file:", err);
            }
            next()
        });
    };
}

export default logReqRes;