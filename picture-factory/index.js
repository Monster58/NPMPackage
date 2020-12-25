/**
 * 图像压缩
 * @param {String} base64 
 * @param {Object} configs 
 * * @param {String || Number} configs.percentage 
 * * @param {String || Number} configs.quality 
 */
const compressImg = (base64, configs) => {
    let img = new Image();
    img.src = base64;
    return new Promise(function (resolve) {
        img.onload = () => {
            let targetWidth = img.width * configs.percentage;
            let targetHeight = img.height * configs.percentage;
            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            let result = canvas.toDataURL('image/png', configs.quality);
            resolve(result);
        }
    })
}

/**
 * @param {DOMObject} img 
 */
const getBase64Image = img => {
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    let ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    let dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
}

/**
 * 
 * @param {String} base64 
 * @param {String} filename 
 */
const base64ToFile = (base64, filename) => {
    var arr = base64.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {
        type: mime
    });
}


export {
    compressImg,
    getBase64Image,
    base64ToFile
}