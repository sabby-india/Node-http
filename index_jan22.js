const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req,res) => {

    console.log('Request for '+ req.url + ' by method '+ req.method);

   
        /*
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            fs.createReadStream('./public/index.html').pipe(res);
            */
    
    if(req.method == 'GET'){
        var fileUrl;
        if(req.url == '/')
            fileUrl = '/index.html';
        else
            fileUrl= req.url;
        
            var filepath = path.resolve('./public'+fileUrl);
           /* const fileExt = filepath.extname(filepath);
            if(fileExt == '.html'){
                fs.exists(filepath,(exists) =>{
                    if(!exists){
                        res.statusCode = 404;
                        res.setHeader('Content-Type','text/html');
                        res.end('<html><body><h1>Error 404:'+ fileUrl+ 'is not found</h1></body></html>');
                        return;
                        
                    }
                    res.statusCode = 200;
                    res.setHeader('Content-Type','text/html');
                    fs.createReadStream(filepath).pipe(res);
                                      
                })
            }
            else{
                res.statusCode = 404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1>Error 404:'+ fileUrl+ 'is not html file</h1></body></html>');
                
                
            }*/
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            fs.createReadStream(filepath).pipe(res);
    }
    else{

        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1>Error 404:'+ req.method+ 'is not supported</h1></body></html>');
       
    }    
    
})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});