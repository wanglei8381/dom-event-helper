(function () {

    var stack = {};
    var i = 1;
    var helper = {};

    helper.add = function (el, event, cb, useCapture) {
        el._uid = el._uid || i++;
        var obj = stack[el._uid] = stack[el._uid] ? stack[el._uid] : {};
        var arr = obj[event] = obj[event] ? obj[event] : [];
        arr.push(cb);
        el.addEventListener(event, cb, !!useCapture);
    };

    helper.remove = function (el, event, cb) {
        if (typeof cb === 'function' && cb.name) {
            el.removeEventListener(event, cb);
        } else if (el._uid && stack[el._uid]) {
            var obj = stack[el._uid];
            var keys = [];
            if (event) {
                if (obj[event]) {
                    keys.push(event);
                }
            } else {
                keys = Object.keys(obj);
            }

            keys.forEach(function (key) {
                obj[key].forEach(function (_cb) {
                    el.removeEventListener(event, _cb);
                });
                delete obj[key];
            });

        }
    };

    //引入Node中
    Node.prototype.addEvent = function (event, cb, useCapture) {
        helper.add(this, event, cb, useCapture);
        return this;
    }

    Node.prototype.removeEvent = function (event, cb) {
        helper.remove(this, event, cb);
        return this;
    }

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = helper;
        }
        exports.domEventHelper = helper;
    } else {
        window.domEventHelper = helper;
    }

})();