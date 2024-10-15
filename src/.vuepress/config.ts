import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "源的个人博客",
  description: "私人第一个博客网站",

  theme,
});
