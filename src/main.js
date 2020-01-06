// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import TextDefaultCard from "@/components/cards/text-default-card";
import TextTreeCard from "@/components/cards/text-tree-card";
import ImgDefaultScroll from "@/components/view/img-default-scroll";
import ImgDefaultView from "@/components/view/img-default-view";
import TextBoxCard from "@/components/cards/text-box-card";
import TableDefaultSimple from "@/components/tables/table-default-simple";
import TextSearchCard from "@/components/cards/text-search-card";
import TextMiniboxCard from '@/components/cards/text-minibox-card'
import InfoDefault from '@/components/info/info-default'
import HeaderDefault from "@/components/header/header-default";
import TitleDefault from "@/components/title/title-default";
import FooterDefault from "@/components/footer/footer-default";
import AsideDefault from '@/components/aside/aside-default';
import TagDefaultMuti from '@/components/tags/tag-default-muti';
import InfoImgView from '@/components/info/info-img-view'
Vue.config.productionTip = false

const components = [
  // 小卡片 内容 自适应文本链接
  TextDefaultCard,
  // 小卡片 内容 树形数据
  TextTreeCard,
  // 滚动图片
  ImgDefaultScroll,
  // 图片展示
  ImgDefaultView,
  // boxcard 普通样式
  TextBoxCard,
  // 单条数据表格化
  TableDefaultSimple,
  // 小卡片 搜索
  TextSearchCard,
  // 详情
  InfoDefault,
  // miniboxcard 普通样式
  TextMiniboxCard,
  // 头部样式
  HeaderDefault,
  // 标题样式
  TitleDefault,
  // 侧边栏
  AsideDefault,
  // 多选标签
  TagDefaultMuti,
  // 底部样式
  FooterDefault,
  // 详情列展示
  InfoImgView
];
components.forEach(component => {
  Vue.component(component.name, component);
});
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,

  },
  template: '<App/>'
})
