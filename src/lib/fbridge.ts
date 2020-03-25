// tslint:disable
declare var window: Window;
interface Window {
    [p: string]: any
}
const fbridge = {
    default: this,// for typescript
    call: function (method, args, callback) {
        window.fbcb = window.fbcb || 0
        if (typeof args == 'function') {
            callback = args;
            args = {};
        }
        var messsage:any = {
            data: args===undefined ? null : args,
            method: method
        }
        if (typeof callback == 'function') {
            // flutter bridge callback 回调事件
            var callbackName = 'fbcallback' + window.fbcb++;
            window[callbackName] = callback;
            messsage['_fbcallback'] = callbackName;
        }
        messsage= JSON.stringify(messsage)

        if(window._flutterBridge){
            window._flutterBridge.postMessage(messsage)
        }
    }
}

export default fbridge;

// module.exports = fbridge;