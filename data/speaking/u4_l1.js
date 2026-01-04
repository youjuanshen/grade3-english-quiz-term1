/**
 * Unit 4 Lesson 1: This is my father (口语测试)
 * 教材来源: 闽教版三年级上册
 * 核心词汇: father, mother, brother, sister, family
 * 核心句型: This is my... / He is... / She is...
 * 模式: Speaking (大屏口语布局)
 * File: data/speaking/u4_l1.js
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 1: My Family Members (Speaking)",
    mode: "speaking", // 激活大屏口语布局

    // ✅ 图片资源 (请确保 img 文件夹里有这些图片)
    images: {
        'Dad': 'img/u4_father.png',
        'Mum': 'img/u4_mother.png',
        'Bro': 'img/u4_brother.png',
        'Sis': 'img/u4_sister.png',
        'Family': 'img/u4_family_photo.png'
    },

    // ✅ 完整 5 道口语题 (覆盖一家四口核心词汇)
    questions: [
        // 【Q1 核心词汇 - Father】
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '看图说词：请用英语大声说出这是谁？', 
            imageKey: 'Dad', 
            guide: '✅ 参考答案：\nFather / Dad\n💡 注意 th 咬舌音' 
        },

        // 【Q2 核心词汇 - Mother】
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '看图说词：请用英语大声说出这是谁？', 
            imageKey: 'Mum', 
            guide: '✅ 参考答案：\nMother / Mum\n💡 注意 th 咬舌音' 
        },

        // 【Q3 核心句型 - 介绍 Brother】
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '看图说话：用 "This is..." 句型介绍他。', 
            imageKey: 'Bro', 
            guide: '✅ 参考答案：\nThis is my brother.' 
        },

        // 【Q4 核心句型 - 介绍 Sister】
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '看图说话：用 "This is..." 句型介绍她。', 
            imageKey: 'Sis', 
            guide: '✅ 参考答案：\nThis is my sister.' 
        },

        // 【Q5 综合应用 - 全家福】
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '看全家福，任选一位家庭成员用英语介绍。', 
            imageKey: 'Family', 
            guide: '✅ 参考答案 (任选其一)：\nThis is my father.\nThis is my mother.\nThis is my family.' 
        }
    ]
});
