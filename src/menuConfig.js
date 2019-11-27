/**
 * 定义sidebar和header中的菜单项
 *
 * 一些约定:
 * 1.菜单最多3层;
 * 2.只有"叶子"节点才能跳转;
 * 3.所有的key都不能重复;
 */

// 定义siderbar菜单
const sidebarMenu = [
  {
    label: '首页',
    key: 'home',
    name:'Home',
    icon: 'home',
  },
  {
    label: 'Dashboard',
    key: 'dashboard',
    name: 'Dashboard',
    icon: 'line-chart',
    child: [
      {
        key: 'analyze',
        name: '路由1',
      },
      {
        key: 'monitor',
        name: '路由2',
      },
      {
        key: 'Workbench',
        name: '路由3',
      },
    ],
  },
  {
    label: 'Game',
    key: 'game',
    name: 'Game',
    icon: 'google',
    child: [
      {
        key: 'turntable',
        name: '命运之轮',
      }
    ],
  }
];

export default sidebarMenu;
