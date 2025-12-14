/**
 * Unit 1 Lesson 4: Have a good day! (口语测试)
 * 对应教材: 闽教版三年级上册 Page 11
 * File: data/speaking/u1_l4.js
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 4: Have a good day! (口语)",
    mode: "speaking", // ⚠️ 关键标识：激活口语评分模式

    // 1. 图片资源定义
    images: {
        'Scene_Morning': 'img/u1_morning_sun.png',
        'Scene_Afternoon': 'img/u1_afternoon_clock.png',
        'Scene_Goodbye': 'img/u1_school_gate.png',
        'Letters_GH': 'img/u1_letters_gh.png'
    },

    // 2. 题目列表 (满分 25 分)
    questions: [
        // Q1: 晨间问候
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '🌞 情景：太阳刚刚升起。\n老师对你说："Good morning."\n请你回答老师。', 
            imageKey: 'Scene_Morning', 
            guide: '✅ 参考回答：\nGood morning.' 
        },

        // Q2: 午间问候
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '🕑 情景：现在是下午 3 点。\n老师对你说："Good afternoon."\n请你回答老师。', 
            imageKey: 'Scene_Afternoon', 
            guide: '✅ 参考回答：\nGood afternoon.' 
        },

        // Q3: 核心祝福应答
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '👋 情景：放学了，老师对你说：\n"Have a good day!" (祝你一天愉快！)\n你该怎么礼貌地回答？', 
            imageKey: 'Scene_Goodbye', 
            guide: '✅ 参考回答：\nThank you. You too.\n(谢谢，你也是。)' 
        },

        // Q4: 综合运用 (主动道别)
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '🎒 情景：你要回家了，向你的朋友李丽道别。\n请用英语说："再见！祝你一天愉快！"', 
            imageKey: 'Scene_Goodbye', 
            guide: '✅ 参考回答：\nGoodbye! Have a good day!' 
        },

        // Q5: 字母与单词认读
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '🔤 请大声读出卡片上的字母和单词。', 
            imageKey: 'Letters_GH', 
            guide: '✅ 参考回答：\nG g, girl / green\nH h, hand / hi' 
        }
    ]
});
