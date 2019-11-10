export const routerConf = [
  {
    path: '/',
    component: '../layouts/layout',
    routes: [	
      { path: '/home', component: './home' },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analyze', component: './dashboard/analyze' },
          { path: '/dashboard/monitor', component: './dashboard/monitor' },
          { path: '/dashboard/Workbench', component: './dashboard/Workbench' }
        ],
      },
    ],
  },
];
