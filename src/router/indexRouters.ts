export default [
  {
    path: '/',
    component: (resolve: any) => require(['../views/result/result.vue'], resolve),
    name: 'result',
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/flutter-bridge',
    component: (resolve: any) => require(['../views/flutterBridge/flutterBridge.tsx'], resolve),
    name: 'flutterBridge',
    meta: {
      keepAlive: false,
    },
  }
];

