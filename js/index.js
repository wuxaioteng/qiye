{
    window.onload = function () {
        let tu = document.querySelector('.tu');
        console.log(tu);
        let t = setInterval(yidong, 3000);
        let flag = true;

        function yidong() {
            if (flag == true) {

                tu.style.left = -1265 + 'px';
                animate(tu, {left: 0}, 3000, function () {
                    flag = false
                });
                // console.log(flag);
                flag = false;
            } else if (flag == false) {

                tu.style.left = 0;
                animate(tu, {left: -1265}, 3000, function () {
                    flag = true
                });
                flag = true;
            }
        }

        tu.onmouseover = function () {
            clearInterval(t);
        }
        tu.onmouseout = function () {
            t = setInterval(yidong, 3000);
        }
    }
}
