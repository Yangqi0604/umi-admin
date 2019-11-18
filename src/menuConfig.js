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
    name:'首页',
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
        name: '分析页',
      },
      {
        key: 'monitor',
        name: '监控页',
      },
      {
        key: 'Workbench',
        name: '工作台',
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
