//js

var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var char = document.getElementById("data").value;
    var box=document.querySelector(".box");
    var img = document.createElement("img");

    box.innerHTML = '';

    img.src = "imagesjpg_hydron/" + char + ".jpg";
	img.height = 300;
    box.appendChild(img);
    console.log(img.src);
})