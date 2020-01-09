function proxy_request(url,opt,callback,error,def_heads){
    let proxy="https://req-pro.herokuapp.com/";
    if (!url && !opt.url)throw new Error ("Invalid URL");
    if(typeof opt == "function"){
        callback = opt; opt=undefined;
    };
    opt||(opt = {});
    opt.headers||(opt.headers= {});
    opt.url||(opt.url=url);
    if (def_heads!=false){
        opt.headers["User-agent"] = navigator&&navigator.userAgent;
    }
    alert(opt.url)
    _request(proxy,{
        method:"POST",
        body:JSON.stringify({
            ...opt,
            url:opt.url
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
