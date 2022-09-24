let galleryImages = document.querySelectorAll('.texthover');
let getLatesOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function (image) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue('background-image');
            let getImgUrlPos = getFullImgUrl.split('imgur.com/');
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');
            let container = document.body;
            let newImgWindow = document.createElement('div');
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute('class', 'img-window');
            newImgWindow.setAttribute('onclick', 'closeImg()');
            
            let newImg = document.createElement('img');
            newImgWindow.appendChild(newImg);
            newImg.setAttribute('src', 'https://i.imgur.com/' + setNewImgUrl );
       
        }
    })
}


function closeImg() {
    document.querySelector('.img-window').remove();  
}

