const http=require('http'),fs=require('fs'),p=require('path');
const root=p.join(__dirname,'public');
const realRoot=(fs.realpathSync.native?fs.realpathSync.native(root):fs.realpathSync(root));
http.createServer((req,res)=>{
  const u=((req.url||'/').split('?')[0]||'/');
  let f=u==='/'?'index.html':decodeURIComponent(u).replace(/^\/+/,'');
  f=p.resolve(root,f);
  const rel=p.relative(root,f);
  if(/^(\.\.(\/|\\|$))/.test(rel)||p.isAbsolute(rel)) return res.writeHead(403).end('Forbidden');
  fs.realpath(f,(re,rf)=>{
    if(re) return res.writeHead(404).end('Not found');
    if(!(rf===realRoot||rf.startsWith(realRoot+p.sep))) return res.writeHead(403).end('Forbidden');
    fs.readFile(rf,(e,d)=>{
    if(e) return res.writeHead(404).end('Not found');
    const ext=p.extname(rf);
    const t={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.txt':'text/plain'}[ext]||'application/octet-stream';
    res.writeHead(200,{'Content-Type':t});res.end(d);
  });
  });
}).listen(process.env.PORT||3000,()=>console.log('OS running on http://localhost:'+(process.env.PORT||3000)));
