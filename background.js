function resetBg(){
    localStorage.clear();
}
function changeDivImage()
    {
        var imgPath = new String();
        imgPath = document.body.style.backgroundImage;
        console.log(imgPath);
        var bgs = [ "url(images/home_vogue/brocade7.jpeg)", "url(images/home_vogue/yellow_bg.png)",  "url(images/home_vogue/flowers.jpeg)", "url(images/home_vogue/firework1.gif)", "url(images/home_vogue/gradient.jpeg)",  "url(images/home_vogue/grass.jpeg)"];
       
        // retrieve data value
        var currentItem = new Number;
        currentItem = localStorage.getItem("current");
        console.log(currentItem)
        if (currentItem == null || currentItem ==6){
            console.log("set first")
            localStorage.setItem("current", 0);
            document.body.style.backgroundImage = bgs[currentItem];
        }
        else{
            document.body.style.backgroundImage = bgs[currentItem];
            currentItem++;
            localStorage.setItem("current", currentItem);
        }
        
    }
function changeAvatar()
{
    var imgPath = new String();
    imgPath = document.getElementById("avatarIm").src;
    console.log(imgPath);
    var avatars = ["images/home_vogue/feifei_avatar.png", "images/home_vogue/grace_avatar.png", "images/home_vogue/dude1_avatar.png", "images/home_vogue/dude2_avatar.png"];
   
    // retrieve data value
    var currentItem = new Number;
    currentItem = localStorage.getItem("currentAvatar");
    console.log(currentItem)
    if (currentItem == null || currentItem ==4){
        console.log("set first")
        localStorage.setItem("currentAvatar", 0);
        currentItem = 0;
        console.log(avatars[currentItem]);

        document.getElementById("avatarIm").src = avatars[currentItem];
    }
    else{
        document.getElementById("avatarIm").src = avatars[currentItem];
        currentItem++;
        localStorage.setItem("currentAvatar", currentItem);
    }
}

function changeDivBG()
{
    var imgPath = new String();
    imgPath = document.getElementById("magazine").style.backgroundImage;
    console.log(imgPath);
    var bgs = [ "url(images/home_vogue/glitch.gif)", "url(images/home_vogue/hologram.jpeg)",  "url(images/home_vogue/flowers.jpeg)", "url(images/home_vogue/thumb.png)", "url(images/home_vogue/gradient.jpeg)",  "url(images/home_vogue/grass.jpeg)", "url(images/home_vogue/marble_bg.png)", "url(images/home_vogue/pink_bg.png)", "url(images/home_vogue/blue_bg.png)","url(images/home_vogue/yellow_bg.png)"];
   
    // retrieve data value
    var currentItem = new Number;
    currentItem = localStorage.getItem("currentMag");
    console.log(currentItem)
    if (currentItem == null || currentItem ==10){
        console.log("set first")
        localStorage.setItem("currentMag", 0);
        currentItem = 0;
        console.log(bgs[currentItem]);

        document.getElementById("magazine").style.backgroundImage = bgs[currentItem];
    }
    else{
        document.getElementById("magazine").style.backgroundImage = bgs[currentItem];
        currentItem++;
        localStorage.setItem("currentMag", currentItem);
    }
}

