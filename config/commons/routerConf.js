export const routerConf = [
  {
    path: '/',
    component: '../layouts/layout',
    routes: [
      { path: '/', component: './home' },
      { path: '/home', component: './home' },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analyze', component: './dashboard/analyze' },
          { path: '/dashboard/monitor', component: './dashboard/monitor' },
          { path: '/dashboard/Workbench', component: './dashboard/Workbench' }
        ],
      },
      {
        path: '/game',
        routes: [
          { path: '/game/turntable', component: './game/turntable'}
        ],
      }
    ],
  },
];
