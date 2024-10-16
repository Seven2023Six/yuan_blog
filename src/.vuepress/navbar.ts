import { navbar } from "vuepress-theme-hope";

export default navbar([
    "/",
    "/demo/",
    {
        text: "主要目录",
        icon: "pen-to-square",
        prefix: "/posts/",
        children: [
            {
                text: "工具",
                icon: "pen-to-square",
                prefix: "apple/",
                children: [
                    { text: "Git", icon: "pen-to-square", link: "dragonfruit" },
                    { text: "hello", icon: "pen-to-square", link: "2" },
                    "3",
                    "4",
                ],
            },
            {
                text: "香蕉",
                icon: "pen-to-square",
                prefix: "banana/",
                children: [
                    {
                        text: "香蕉 1",
                        icon: "pen-to-square",
                        link: "1",
                    },
                    {
                        text: "香蕉 2",
                        icon: "pen-to-square",
                        link: "2",
                    },
                    "3",
                    "4",
                ],
            },
            { text: "樱桃", icon: "pen-to-square", link: "cherry" },
            { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
            "tomato",
            "strawberry",
        ],
    },
    {
        text: "软件",
        icon: "pen-to-square",
        prefix: "/class/",
        children: [
            { text: "第九天", icon: "pen-to-square", link: "day" },
        ]
    },
]);
