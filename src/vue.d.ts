import Vue from 'vue'
import VueRouter, {Route} from 'vue-router';
import fbridge from '@/lib/fbridge.ts';

declare module 'vue/types/vue' {
    interface Vue {
        $router: VueRouter; // 这表示this下有这个东西
        $route: Route;
    }
}