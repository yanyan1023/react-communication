export default {
    arrfn: {},
    $emit() {
        let name = arguments[0];
        if (arguments.length == 0) return false;
        if (this.arrfn[name] != undefined && this.arrfn[name].length > 0) {
            let data = [].concat(Array.prototype.slice.call(arguments, 1));
            this.arrfn[name].forEach((v) => {
                v(...data);
            });
        }
    },
    $on(name, fn) {
        if (this.arrfn[name] == undefined) {
            this.arrfn[name] = []
        }
        this.arrfn[name].push(fn);
    }
}