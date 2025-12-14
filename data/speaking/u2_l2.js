/**
 * Unit 2 Lesson 2: How Many Ducks? (口语测试 - 最终修订版)
 * 对应教材: 闽教版三年级上册 Page 19
 * File: data/speaking/u2_l2.js
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 2: How Many Ducks? (口语)",
    mode: "speaking", // ⚠️ 关键标识：激活口语评分模式

    // 1. 图片资源定义
    images: {
        'Scene_Ducks': 'img/u2_pond_ducks.png',
        'Scene_Lion': 'img/u2_zoo_lion.png', // ✅ 新增：狮子图
        'Scene_Kite': 'img/u2_sky_kite.png',
        'Letters_KL': 'img/u2_letters_kl.png'
    },

    // 2. 题目列表 (满分 25 分)
    questions: [
        // Q1: 引起注意并提问数量 (How many...?)
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '🦆 情景：你在公园看到池塘里有许多鸭子。\n请大声问一问：“有多少只鸭子？”', 
            imageKey: 'Scene_Ducks', 
            guide: '✅ 参考回答：\nHow many ducks?' 
        },

        // Q2: 直接回答数量 (Seven ducks)
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '🔢 情景：(手指着图片) 老师问你："How many ducks?"\n请你数一数（假设图中有 7 只），然后回答。', 
            imageKey: 'Scene_Ducks', 
            guide: '✅ 参考回答：\nSeven ducks.' 
        },

        // Q3: 单词认读与表达 (Look! A lion.) - ✅ 已修改为新考点
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '🦁 情景：除了鸭子，你在草地上还看到了一只威风的狮子！\n请让朋友看，并大声说：“看！一只狮子！”', 
            imageKey: 'Scene_Lion', 
            guide: '✅ 参考回答：\nLook! A lion.' 
        },

        // Q4: 远指物体 (That is...)
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '🪁 情景：老师指着天上很远的风筝问："What is that?"\n请你告诉老师：“那是一只风筝。”', 
            imageKey: 'Scene_Kite', 
            guide: '✅ 参考回答：\nThat is a kite.' 
        },

        // Q5: 字母与单词认读 (Phonics)
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '🔤 请大声读出卡片上的字母和单词。', 
            imageKey: 'Letters_KL', 
            guide: '✅ 参考回答：\nK k, kite\nL l, lion' 
        }
    ]
});
