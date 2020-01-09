function proxy_request(url,opt,callback,error,def_heads){
    let proxy="https://req-pro.herokuapp.com/";
    if (!url)throw new Error ("Invalid URL");
    opt||(opt = {});
    opt.headers||(opt.headers= {});
    opt.url||(opt.url=url);
    if (def_heads!=false){
        opt.headers["User-agent"] = navigator&&navigator.userAgent;
    }
    _request(proxy,{
        url:opt.url,
        method:"POST",
        body:JSON.stringify({
            ...opt,
            url:url
        })
    },function (){
        callback(JSON.parse(this.response))
    },error);
}
function _request(url,opt,callback,error){
    let xhr = new XMLHttpRequest();
    xhr.open(opt.method,url);
    xhr.onload = callback;
    xhr.onerror = error;
    xhr.send(opt.body);
}
