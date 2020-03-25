// tslint:disable
import { Vue, Component } from "vue-property-decorator";
import { Button } from 'vant';
import fbridge from '@/lib/fbridge.ts';

Vue.use(Button);

@Component
export default class FlutterBridge extends Vue {
    private msg: string = '123';
    render() {
        return (<div>flutter bridge page ceshi {this.msg} <van-button nativeOnClick={this.getUserInfo}>点击按钮</van-button></div>);
    }
    getUserInfo() {
        var that = this;
        alert(111)
        fbridge.call('API.getUserInfo', { platform: 1 }, (data: any) => {
            this.msg = data;
        });
    }
}
