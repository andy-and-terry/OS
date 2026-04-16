const http=require('http'),fs=require('fs'),p=require('path');
const root=p.join(__dirname,'public');
http.createServer((req,res)=>{
  let f=req.url==='/'?'/index.html':req.url;
  f=p.normalize(p.join(root,f));
  if(!f.startsWith(root)) return res.writeHead(403).end('Forbidden');
  fs.readFile(f,(e,d)=>{
    if(e) return res.writeHead(404).end('Not found');
    const ext=p.extname(f);
    const t={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.txt':'text/plain'}[ext]||'application/octet-stream';
    res.writeHead(200,{'Content-Type':t});res.end(d);
  });
}).listen(process.env.PORT||3000,()=>console.log('OS running on http://localhost:'+(process.env.PORT||3000)));
