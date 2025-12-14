/**
 * Unit 3 Lesson 2: What color is it? (口语测试 - 最终修订版)
 * 对应教材: 闽教版三年级上册 Page 39
 * File: data/speaking/u3_l2.js
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 2: What color is it? (口语)",
    mode: "speaking", // ⚠️ 关键标识：激活口语评分模式

    // 1. 图片资源定义
    images: {
        'Scene_Ask': 'img/u3_ask_color.png',
        'Scene_Orange': 'img/u3_orange_item.png',
        'Scene_Mix_Pink': 'img/u3_mix_pink.png',
        'Scene_Mix_Green': 'img/u3_mix_green.png',
        'Letters_ST': 'img/u3_letters_st.png'
    },

    // 2. 题目列表 (满分 25 分)
    questions: [
        // Q1: 询问颜色 (What color is it?)
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '🎨 情景：美术课上，你手里拿着一支画笔。\n请指着画笔问同桌：“它是什么颜色的？”', 
            imageKey: 'Scene_Ask', 
            guide: '✅ 参考回答：\nWhat color is it?' 
        },

        // Q2: 回答颜色 (It's orange.)
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '🍊 情景：同桌指着图中的大橙子问你："What color is it?"\n请你回答颜色。', 
            imageKey: 'Scene_Orange', 
            guide: '✅ 参考回答：\nIt’s orange.' 
        },

        // Q3: 颜色混合 (It's pink.) - ✅ 优化：直接描述
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '🧪 情景：魔术时间！老师把红色(Red)和白色(White)混在了一起。\n请大声告诉老师变成了什么颜色：“它是粉色的。”', 
            imageKey: 'Scene_Mix_Pink', 
            guide: '✅ 参考回答：\nIt’s pink.' 
        },

        // Q4: 表达惊讶 (Wow! It's green.) - ✅ 优化：强调惊讶语气
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '✨ 情景：太神奇了！蓝色加黄色竟然变成了绿色！\n请用**惊讶**的语气大声说：“哇！是绿色的。”', 
            imageKey: 'Scene_Mix_Green', 
            guide: '✅ 参考回答：\nWow! It’s green.' 
        },

        // Q5: 字母与单词认读 (Phonics)
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '🔤 请大声读出卡片上的字母和单词。', 
            imageKey: 'Letters_ST', 
            guide: '✅ 参考回答：\nS s, star\nT t, teacher' 
        }
    ]
});
