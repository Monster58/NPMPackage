# picture-factory
> An excellent image processing plug-in, support Base64 image compression, image to Base64, Base64 to image.
## [Installation](#Installation)
Using npm:
```javascript
npm install --save picture-factory 
```

## Browser Support
Not compatible with IE browser

## Quickstart
```javascript
import { compressImg, getBase64Image, base64ToFile } from 'picture-factory'
/**
* compressImg
* @param {String} base64 
* @param {Object} configs 
* * @param {String || Number} configs.percentage Compression ratio
* * @param {String || Number} configs.quality image quality
*/
compressImg(base64, { percentage: 0.5, quality: 0.5 }).then((res) => {
   const base64Obj = res
);

/**
* getBase64Image
* @param {DOMObject} img 
*/
const base64 = getBase64Image(image);

/**
* base64ToFile
* @param {String} base64 
* @param {String} filename 
*/
const imageFile = base64ToFile(base64,'filename')
```