function changeDivImage()
    {
        var imgPath = new String();
        imgPath = document.body.style.backgroundImage;
        console.log(imgPath);
        var bgs = ["url(images/home_vogue/pink_bg.png)", "url(images/home_vogue/marble_bg.png)", "url(images/home_vogue/yellow_bg.png)"];
        // var max = 0;
        // var min = 3;
        // save data value
        // localStorage.getItem("current", 0);

        // retrieve data value
        var currentItem = localStorage.getItem("current");
        console.log(currentItem)
        if (currentItem == 01){
            localStorage.setItem("current", 0);
            currentItem = 0;
        }
        document.body.style.backgroundImage = bgs[currentItem];
        localStorage.getItem("current", currentItem+1);


        // var random = Math.floor(Math.random() * (max - min) + min);

        // console.log(random)

        // document.body.style.backgroundImage = bgs[random];


        // if(imgPath == "url(images/home_vogue/marble_bg.png)" || imgPath == "url(images/home_vogue/yellow_bg.png)" || imgPath == "")
        // {
        //     console.log("do pink")
        //     document.body.style.backgroundImage = "url(images/home_vogue/pink_bg.png)";
        // }
        // else if (imgPath == "url(images/home_vogue/pink_bg.png)" || imgPath == "url(images/home_vogue/yellow_bg.png)")
        // {
            // console.log("do marble")
            // else document.body.style.backgroundImage = "url(images/home_vogue/marble_bg.png)";
        // }
        // else if (imgPath == "url(images/home_vogue/marble_bg.png)" || imgPath == "url(images/home_vogue/pink_bg.png)")
        // {
        //     console.log("do yellow")

        //     document.body.style.backgroundImage = "url(images/home_vogue/yellow_bg.png)";
        // }
    }
function changeAvatar()
{
    var imgPath = new String();
    imgPath = document.getElementById("avatarIm").src;
    var url =  new URL(imgPath)
    console.log(imgPath);
    console.log(url.href);

    if(url == "url(images/home_vogue/feifei_avatar.png)" || imgPath == "")
    {
        console.log(" change avatar");
        document.getElementById("avatarIm").imgPath = "url(images/home_vogue/grace_avatar.png)";
    }
    else
    {
        console.log(" don't change avatar");

        document.getElementById("div1").style.backgroundImage = "url(images/home_vogue/feifei_avatar.png)";
    }
}