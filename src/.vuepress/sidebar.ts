import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "笔记",
            icon: "book",
            link: "director/",
        },
    ],
    "/director/": [
        {
            text: "Web",
            icon: "book",
            prefix: "web_note/",
            link: "web_note/",
        },
        {
            text: "设计模式",
            icon: "book",
            prefix: "design_pattern/",
            link: "design_pattern/",
        },
        {
            text: "演示",
            icon: "laptop-code",
            prefix: "demo/",
            link: "demo/",
            children: "structure",
        },
    ],
    "/director/web_note/": "structure",
    "/director/design_pattern/": "structure",
    "/director/demo/": "structure",
});
