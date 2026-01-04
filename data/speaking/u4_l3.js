/**
 * Unit 4 Lesson 3: Who are they? (口语测试)
 * 教材来源: 闽教版三年级上册
 * 核心词汇: they, farmers, cooks, cute
 * 核心句型: Who are they? They are... / They are so cute!
 * 重点: 复数代词 They + 职业名词复数 + 情感表达
 * 模式: Speaking (大屏口语布局)
 * File: data/speaking/u4_l3.js
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 3: Who are they? (Speaking)",
    mode: "speaking", // 激活大屏口语布局

    // ✅ 图片资源 (请确保 img 文件夹里有这些图片)
    images: {
        'Family': 'img/u4_family_photo.png',
        'Farmers': 'img/u4_farmers.png',
        'Cooks': 'img/u4_cooks.png',
        'Cute': 'img/u4_cute_babies.png'
    },

    // ✅ 完整 5 道口语题 (重点训练 They 复数句型)
    questions: [
        // 【Q1 语法概念 - 单复数辨析】
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '概念热身：\n指一个人 → He/She\n指两个人 → 用英语怎么说？', 
            imageKey: 'Family', 
            guide: '✅ 参考答案：\nThey\n💡 老师指着全家福中的两个人，引导学生说 They' 
        },

        // 【Q2 核心句型 - 农民 (复数)】
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '老师问："Who are they?" (他们是谁？)\n请看图用英语回答。', 
            imageKey: 'Farmers', 
            guide: '✅ 参考答案：\nThey are farmers.\n💡 注意复数词尾 s 的发音 /z/' 
        },

        // 【Q3 核心句型 - 厨师 (复数)】
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '老师问："Who are they?" (他们是谁？)\n请看图用英语回答。', 
            imageKey: 'Cooks', 
            guide: '✅ 参考答案：\nThey are cooks.\n💡 注意复数词尾 s 的发音 /s/' 
        },

        // 【Q4 句型转换 - 介绍家人】
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '看全家福，用英语介绍爷爷和奶奶。\n(用 They are... 句型)', 
            imageKey: 'Family', 
            guide: '✅ 参考答案：\nThey are my grandpa and grandma.\n💡 或：They are my grandparents.' 
        },

        // 【Q5 情感表达 - 赞美】
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '看图表达感受！\n这些小宝宝真可爱，用英语怎么说？', 
            imageKey: 'Cute', 
            guide: '✅ 参考答案：\nThey are so cute!\n💡 引导学生做出喜爱的表情' 
        }
    ]
});
