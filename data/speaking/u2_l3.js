/**
 * Unit 2 Lesson 3: How Old Are You? (口语测试)
 * 对应教材: 闽教版三年级上册 Page 22
 * File: data/speaking/u2_l3.js
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 3: How Old Are You? (口语)",
    mode: "speaking", // ⚠️ 关键标识：激活口语评分模式

    // 1. 图片资源定义
    images: {
        'Scene_Ask_Age': 'img/u2_ask_age.png',
        'Scene_Five': 'img/u2_cake_five.png',
        'Scene_Playground': 'img/u2_playground_gate.png',
        'Scene_Fun': 'img/u2_roller_coaster.png',
        'Letters_MN': 'img/u2_letters_mn.png'
    },

    // 2. 题目列表 (满分 25 分)
    questions: [
        // Q1: 询问年龄 (How old are you?)
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '🎂 情景：你认识了一位新朋友，想知道他几岁了。\n请你用英语问一问他的年龄。', 
            imageKey: 'Scene_Ask_Age', 
            guide: '✅ 参考回答：\nHow old are you?' 
        },

        // Q2: 回答年龄 (I'm five years old.)
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '🖐️ 情景：朋友问你："How old are you?"\n请看图（蛋糕上的蜡烛是 5），回答你的年龄。', 
            imageKey: 'Scene_Five', 
            guide: '✅ 参考回答：\nI’m five years old. / I’m five.' 
        },

        // Q3: 提出建议 (Let's go and play.)
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '🎡 情景：到了游乐场门口，你想邀请朋友一起进去玩。\n请大声提议：“让我们去玩吧！”', 
            imageKey: 'Scene_Playground', 
            guide: '✅ 参考回答：\nLet’s go and play! / Let’s go!' 
        },

        // Q4: 表达祝愿 (Have fun!)
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '🎢 情景：朋友坐上了旋转木马，看起来很开心。\n请对他说：“玩得开心！”', 
            imageKey: 'Scene_Fun', 
            guide: '✅ 参考回答：\nHave fun!' 
        },

        // Q5: 字母与单词认读 (Phonics)
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '🔤 请大声读出卡片上的字母和单词。', 
            imageKey: 'Letters_MN', 
            guide: '✅ 参考回答：\nM m, monkey\nN n, noodles' 
        }
    ]
});
