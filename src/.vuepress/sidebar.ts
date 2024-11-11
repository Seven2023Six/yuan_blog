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
        "/director/demo/",
        "/director/web_note/",
        "/director/leet_code/",
    ],
    "/director/web_note/": "structure",
    "/director/demo/": "structure",
    "/director/leet_code/": "structure",
});
