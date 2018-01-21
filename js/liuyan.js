{
   let sp=document.querySelector("#wenben");
    sp.onclick=function () {
        this.placeholder="";
    }
    sp.onfocus=function () {
        if(this.value==="留言需审核后才会显示")
            this.value="";
    }
    sp.onblur=function () {
        if(this.value===""){
            this.value="留言需审核后才会显示";
        }
    }
}
