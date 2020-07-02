const gameWidth = gameDom.clientWidth;

class Pipe extends Rectangle {
    constructor(height, top, speed, dom) {
        super(52, height, gameWidth, top, speed, 0, dom);
    }
    onMove() {
        if (this.left < -this.width) {
            // 移出dom
            this.dom.remove();
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
class PipePare {
    constructor(speed) {

        this.spaceHeight = 150; //空隙大小
        this.minHeight = 80; //柱子最小高度
        this.maxHeight = landTop - this.minHeight - this.spaceHeight; //柱子最大高度
        const upHeight = getRandom(this.minHeight, this.maxHeight);
        const upDom = document.createElement("div");
        upDom.className = "pipe up";

        this.upPipe = new Pipe(upHeight, 0, speed, upDom); //上水管
        const downHight = landTop - upHeight - this.spaceHeight;
        const downTop = landTop - downHight;
        const downDom = document.createElement("div");
        downDom.className = "pipe down";
        this.downPipe = new Pipe(downHight, downTop, speed, downDom); //下水管

        gameDom.appendChild(upDom);
        gameDom.appendChild(downDom);

    }

    /**
     *这个是用来判断是否移出视野
     *
     * @readonly
     * @memberof PipePare
     */
    get useLess() {
        return this.upPipe.left < -this.upPipe.width;
    }

    move(duration) {
        this.upPipe.move(duration);
        this.downPipe.move(duration);
    }

}

class PipePareProduce {

    constructor(speed) {
        this.count = 0;
        this.speed = speed;
        this.pairs = [];
        this.timer = null;
        this.tick = 1500;
    }
    startProduce() {

        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.pairs.push(new PipePare(this.speed));
            //移除不用的柱子
            for (let i = 0; i < this.pairs.length; i++) {
                var pair = this.pairs[i];
                if (pair.useLess) {
                    this.pairs.splice(i, 1);
                    i--;
                    this.count++;
                }

            }
        }, this.tick);
        return this.count;
    }
    stopProduce() {
        clearInterval(this.timer);
        this.timer = null;
        // return this.count;
        console.log(this.count + 1)
    }
}