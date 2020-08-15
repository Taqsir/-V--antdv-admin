// 此配置为系统默认设置，需修改的设置项，在src/config/config.js中添加修改项即可。也可直接在此文件中修改。
module.exports = {
  lang: 'US',
  theme: {
    color: '#1890ff',
    mode: 'light',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
  },
  layout: 'side',                  //导航布局，可选 side 和 head，分别为侧边导航和顶部导航
  fixedHeader: true,               //固定头部状态栏，true:固定，false:不固定
  fixedSideBar: true,              //固定侧边栏，true:固定，false:不固定
  weekMode: false,                 //色弱模式，true:开启，false:不开启
  multiPage: true,                 //多页签模式，true:开启，false:不开启
  hideSetting: false,              //隐藏设置抽屉，true:隐藏，false:不隐藏
  systemName: 'SARA Admin',        //系统名称
  copyright: '2020 SARA group',    //copyright
  asyncRoutes: false,              //异步加载路由，true:开启，false:不开启
  animate: {
    disabled: false,
    name: 'slide',
    direction: 'left',
  },
  footerLinks: [
    // {link: '链接地址', name: '名称/显示文字', icon: '图标，支持 ant design vue 图标库'}
    // {link: 'https://pro.ant.design', name: 'Pro首页'},
    // {link: 'https://github.com/iczer/vue-antd-admin', icon: 'github'},
    // {link: 'https://ant.design', name: 'Ant Design'}
  ],
}


