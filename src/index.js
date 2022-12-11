var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    console.log(req.url)
    if(req.url=="/welcome"){
        res.writeHead(200, { "content-type": "text/plain" });
        res.write("Welcome to Dominos!")
    res.end();
      
    }else  if(req.url=="/contact"){
        res.writeHead(200, { "content-type": "text/plain" });
        res.write(JSON.stringify({  
            phone: '18602100000', 
                 email: 'guestcaredominos@jublfood.com' 
           }));
        
    res.end(); 
    }else {
        res.writeHead(404, { "content-type": "text/plain" });
        {
    
            res.write("PAGE NOT FOUND ");
            res.end();
        }
    }
    


}

httpServer.listen(8081,()=>{console.log("server started at 8081")})

module.exports = httpServer;