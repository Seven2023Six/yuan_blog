import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/yuan_blog/",

    lang: "zh-CN",
    title: "个人博客",
    description: "私人第一个博客网站",

    theme,
});
