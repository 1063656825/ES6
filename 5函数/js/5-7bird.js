const birdDom = document.querySelector(".bird");
const birdStyles = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdTop = parseFloat(birdStyles.top);
const birdLeft = parseFloat(birdStyles.left);
const gameDom = document.querySelector(".game");
const gameHeight = gameDom.clientHeight;


class Bird extends Rectangle {
    constructor() {
        super(birdWidth, birdHeight, birdLeft, birdTop, 0, 0, birdDom)
            // 调用父类方法
        this.g = 1500;
        // 自己的属性加速度 像素/秒²
        this.maxY = gameHeight - landHeight - this.height;
        this.swingStatus = 1; //小鸟翅膀的状态
        this.timer = null; //小鸟煽动翅膀的计时器
        this.render();
    }

    // 小鸟状态改变
    starSwing() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.swingStatus++;
            if (this.swingStatus > 3) {
                this.swingStatus = 1;
            }
            this.render();
        }, 200)
    }
    render() {
        super.render(); //重用弗雷渲染逻辑
        this.dom.className = `bird swing${this.swingStatus}`
    }
    stopSwing() {
        clearInterval(this.timer);
        this.timer = null;
    }

    move(duration) {
        super.move(duration);
        // 调用父类方法
        this.ySpeed += this.g * duration;
    }
    onMove() {
            // 控制坐标范围
            if (this.top < 0) {
                this.top = 0;
            } else if (this.top > this.maxY) {
                this.top = this.maxY;
            }

        }
        // 向上跳
    jump() {
        this.ySpeed = -400;
    }

}