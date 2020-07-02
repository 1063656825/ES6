const skyDom = document.querySelector(".sky"); //获取天空class
const skyStyles = getComputedStyle(skyDom); //获取天空的样式
const skyWidth = parseFloat(skyStyles.width); //宽
const skyHeight = parseFloat(skyStyles.height); //高

class Sky extends Rectangle {
    constructor() {
        super(skyWidth, skyHeight, 0, 0, -50, 0, skyDom);
    }
    onMove() {
        if (this.left <= -skyWidth / 2) {
            this.left = 0;
        }
    }
}