const MyPromise = (() => {
    const PENDING = "pending",
        RESOLVED = "resolved",
        REJECTED = "rejected",
        PromiveValue = Symbol("PromiseValue"),
        PromiseStatus = Symbol("PormiseStatus"),
        thenables = Symbol("thenables"),
        catchables = Symbol("catchbles"),
        changeStatus = Symbol("changeStatus"),
        settleHandle = Symbol("settleHandle"),
        linkPromise = Symbol("linkPromise");

    return class MyPromise {

        [changeStatus](newStatus, newValue, queue) {
            if (this[PromiseStatus] !== PENDING) {
                return;
            }
            this[PromiseStatus] = newStatus;
            this[PromiveValue] = newValue;
            queue.forEach(handler => handler(newValue));
        }
        constructor(executor) {

                this[PromiseStatus] = PENDING;
                this[PromiveValue] = undefined;
                this[thenables] = [];
                this[catchables] = [];
                const resolve = data => {
                    this[changeStatus](RESOLVED, data, this[thenables]);
                }
                const reject = reason => {
                    this[changeStatus](REJECTED, reason, this[catchables]);
                }
                try {
                    executor(resolve, reject);
                } catch (err) {
                    reject(err);
                }

            }
            [settleHandle](handler, immediatelyStatus, queue) {
                if (typeof handler !== "function") {
                    return;
                }
                if (this[PromiseStatus] === immediatelyStatus) {
                    //直接运行
                    setTimeout(() => {
                        handler(this[PromiveValue]);
                    }, 0);
                } else {
                    queue.push(handler);
                }
            }
        then(thenable, catchable) {
            return this[linkPromise](thenable, catchable);
        }

        catch (catchable) {

            return this[linkPromise](undefined, catchable);
        }
    }
})();