function changePic() {
    var pic = document.getElementById('img');
    if (pic.src == "/img/nature.jpeg") {
        console.log(pic.src)
    } else {
        console.log("src does not match")
    }
}