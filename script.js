function changePic() {
    var pic = document.querySelector('img');
    console.log(pic.src);
    if (pic.src == "/img/nature.jpeg") {
        console.log(pic.src);
    } else {
        console.log("src does not match");
    }
}