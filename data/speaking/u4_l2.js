/**
 * Unit 4 Lesson 2: Who is he? (口语测试)
 * 教材来源: 闽教版三年级上册
 * 核心词汇: grandpa, grandma, he, she, birthday
 * 核心句型: Who is he? He is... / Who is she? She is...
 * 重点: 区分 He/She 提问身份 + 生日派对互动
 * 模式: Speaking (大屏口语布局)
 * File: data/speaking/u4_l2.js
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 2: Who is he? (Speaking)",
    mode: "speaking", // 激活大屏口语布局

    // ✅ 图片资源 (请确保 img 文件夹里有这些图片)
    images: {
        'Grandpa': 'img/u4_grandpa.png',
        'Grandma': 'img/u4_grandma.png',
        'Cake': 'img/u4_birthday_cake.png',
        'Gift': 'img/u4_gift.png'
    },

    // ✅ 完整 5 道口语题 (重点训练 He/She 区分)
    questions: [
        // 【Q1 核心词汇 - Grandpa】
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '看图说词：请用英语大声说出这是谁？', 
            imageKey: 'Grandpa', 
            guide: '✅ 参考答案：\nGrandpa\n💡 完整句：He is my grandpa.' 
        },

        // 【Q2 核心词汇 - Grandma】
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '看图说词：请用英语大声说出这是谁？', 
            imageKey: 'Grandma', 
            guide: '✅ 参考答案：\nGrandma\n💡 完整句：She is my grandma.' 
        },

        // 【Q3 核心句型 - Who is he? (重点训练 He)】
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '老师问："Who is he?" (他是谁？)\n请看图用英语回答。', 
            imageKey: 'Grandpa', 
            guide: '✅ 参考答案：\nHe is my grandpa.\n💡 注意区分 He/She' 
        },

        // 【Q4 核心句型 - Who is she? (重点训练 She)】
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '老师问："Who is she?" (她是谁？)\n请看图用英语回答。', 
            imageKey: 'Grandma', 
            guide: '✅ 参考答案：\nShe is my grandma.\n💡 注意区分 He/She' 
        },

        // 【Q5 情景互动 - 生日许愿】
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '动作互动时间！\n老师说："Make a wish and blow out the candles!"\n(许个愿，吹蜡烛！)', 
            imageKey: 'Cake', 
            guide: '✅ 学生动作与回应：\n(闭眼许愿，做吹蜡烛动作)\n说：Happy Birthday!' 
        }
    ]
});
