var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'http://47.116.10.71:8080' });
});
 
server.listen(process.env.PORT || 3000);