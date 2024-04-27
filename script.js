let image;

function loadImage() {
    const canvas = document.getElementById('canvas');
    canvas.width = window.screen.width;
    canvas.height = window.screen.height;
    image = new Image();
    image.onload = function() {
        const canvas = document.getElementById('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);

        addTextToImage();
    };
    const imageUrl = "./template.png";
    image.src = imageUrl;
}

function addTextToImage() {
    const text1 = document.getElementById('text-input').value;
    const text2 = document.getElementById('text-input-2').value;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);

    ctx.font = '38px Pattaya'; 
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fillText(text1, canvas.width / 2, canvas.height - 560);
    ctx.fillText(text2, canvas.width / 2, canvas.height - 450);

    const downloadLink = document.getElementById('download-btn');
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.style.display = 'block'; 
    });
}


window.onload = function() {
    loadImage();
    const addTextButton = document.getElementById('add-text-btn');
    addTextButton.addEventListener('click', addTextToImage);
    window.addEventListener('resize', function() {
        loadImage();
    });
};
