/**
 * Unit 2 Lesson 1: Let's play! (口语测试)
 * 对应教材: 闽教版三年级上册 Page 16
 * File: data/speaking/u2_l1.js
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 1: Let's play! (口语)",
    mode: "speaking", // ⚠️ 关键标识：激活口语评分模式

    // 1. 图片资源定义
    images: {
        'Scene_Play': 'img/u2_park_play.png',
        'Scene_Count_Low': 'img/u2_count_1to5.png',
        'Scene_Count_High': 'img/u2_count_6to10.png',
        'Scene_Great': 'img/u2_gesture_great.png',
        'Letters_IJ': 'img/u2_letters_ij.png'
    },

    // 2. 题目列表 (满分 25 分)
    questions: [
        // Q1: 提出建议 (Let's...)
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '🌳 情景：你在公园里遇到了朋友。\n你想邀请他一起去玩，你会怎么说？', 
            imageKey: 'Scene_Play', 
            guide: '✅ 参考回答：\nLet’s play!' 
        },

        // Q2: 数字数数 (1-5)
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '🔢 情景：我们来踢毽子吧！\n请大声数出前五个数字 (1 到 5)。', 
            imageKey: 'Scene_Count_Low', 
            guide: '✅ 参考回答：\nOne, two, three, four, five.' 
        },

        // Q3: 数字数数 (6-10)
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '🔢 情景：继续数数！\n请大声数出接下来的五个数字 (6 到 10)。', 
            imageKey: 'Scene_Count_High', 
            guide: '✅ 参考回答：\nSix, seven, eight, nine, ten.' 
        },

        // Q4: 表达赞扬
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '👍 情景：你的朋友从 1 数到了 10，非常棒！\n你想夸赞他，你会怎么说？', 
            imageKey: 'Scene_Great', 
            guide: '✅ 参考回答：\nGreat! / You are great!' 
        },

        // Q5: 字母与单词认读
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '🔤 请大声读出卡片上的字母和单词。', 
            imageKey: 'Letters_IJ', 
            guide: '✅ 参考回答：\nI i, ice cream\nJ j, jacket' 
        }
    ]
});
