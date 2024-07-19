let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "https://mod.3dmgame.com/static/upload/logo/croppedImg_5e7c5b5ee0b91.png")
    {
        myImage.setAttribute("src", "https://th.bing.com/th/id/OIP.tYvAbaNc1s_2RfHwfObLDQHaFP?rs=1&pid=ImgDetMain");
    }
    else
    {
        myImage.setAttribute("src", "https://mod.3dmgame.com/static/upload/logo/croppedImg_5e7c5b5ee0b91.png", this.width = "250");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}

if (!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function ()
{
    setUserName();
};