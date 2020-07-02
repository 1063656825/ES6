/**
 *矩形类，可以移动
 *属性：宽度、高度、横坐标、纵坐标、横向速度、纵向速度、对应的dom对象
 *xSpeed 横向速度，单位（像素/毫秒）正数向右，负数向左
 *YSpeed 纵向速度，单位（像素/毫秒）
 */
class Rectangle {
    constructor(width, height, left, top, xSpeed, ySpeed, dom) {
            this.width = width;
            this.height = height;
            this.left = left;
            this.top = top;
            this.xSpeed = xSpeed;
            this.ySpeed = ySpeed;
            this.dom = dom;
            this.render();
        }
        // 写入
    render() {
            this.dom.style.width = this.width + "px";
            this.dom.style.height = this.height + "px";
            this.dom.style.left = this.left + "px";
            this.dom.style.top = this.top + "px";
        }
        /**
         *按照矩形的速度，和制定的时间，移动矩形
         *
         * @param {*} duration
         * @memberof Rectangle
         */
    move(duration) {
        const xDis = this.xSpeed * duration;
        const yDix = this.ySpeed * duration;
        this.left = this.left + xDis;
        this.top = this.top + yDix;

        //可能会发生一些事
        if (this.onMove) {
            //每次移动后，渲染前，均会调用该方法
            this.onMove(); //是否存在onMove方法，如果存在，则调用
        }

        this.render(); //重新渲染

    }
}