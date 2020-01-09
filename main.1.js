
function proxy_request(url,opt,callback,error){
    let proxy="https://req-pro.herokuapp.com/";
    _request(proxy,{
        url:url,
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
