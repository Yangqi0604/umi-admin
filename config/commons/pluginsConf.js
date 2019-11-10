export const pluginConf = [
  [
    'umi-plugin-react',
    {
      antd: false,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi-dva-admin',
      dll: true,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    },
  ],
];
