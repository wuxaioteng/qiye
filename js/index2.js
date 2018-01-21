{
    let pager=document.querySelectorAll(".da ul li");
    let act=document.querySelectorAll(".s_qu");
    let bannerContainer=document.querySelector(".da");
    act.forEach(function (ele,index) {
        ele.onclick=function () {
            for(var i=0;i<pager.length;i++){
                act[i].classList.remove("active");
                pager[i].classList.remove("active");
            }
            this.classList.add("active");
            pager[index].classList.add("active");
            n=index;
        }
    })

    let n=0;
    function bannerFn(dir="r") {
        if(dir=="r"){
            n++;//循环次数
        }else if(dir=="l"){
            n--;
        }
        if(n==pager.length){
            n=0;//下标
        }
        if(n == -1){
            n=pager.length-1;
        }
        for (let i = 0; i <pager.length; i++) {
            act[i].classList.remove("active");
            act[n].classList.add("active");
            pager[i].classList.remove("active");
            pager[n].classList.add("active");
        }
    }

    let st = setInterval(bannerFn,1000);

    bannerContainer.onmouseover=function () {
        clearInterval(st);
    }
    bannerContainer.onmouseout=function () {
        st = setInterval(bannerFn, 1000);
    }

}