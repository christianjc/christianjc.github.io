var pics = ["nature.jpeg", "nature2.jpg", "nature3.jpg"];
var counter = 0
function changePic() {
    var pic = document.querySelector('img');
    console.log(pic.src);
    index = counter % pics.length;
    counter += 1;
    pic.src = "/img/" + pics[index];
}