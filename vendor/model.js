/**
 * Created by A2-20PC on 2015/12/3.
 */

//window.onload = function () {
//
//};

(function () {
    var whpro = 0.635,
        body  = document.body,
        container = document.getElementById("container"),
        bh    = body.clientHeight,
        bw    = body.clientWidth,
        danwei = "px",
        width1 = bh * whpro,
        chazhi1 = (bw-width1)/ 2,
        bilie = bh * whpro;

    if(bw / bh > whpro){
        body.style.width = bilie + danwei;
        container.style.width = bilie + danwei;
        body.style.marginLeft = chazhi1 + danwei;
    }else{
        console.log("body比例完美")
    }

    document.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);

    console.log("初始化状态正常")
})();

