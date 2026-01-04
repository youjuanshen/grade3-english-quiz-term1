/**
 * Unit 4 Lesson 4: I love my family (口语测试)
 * 教材来源: 闽教版三年级上册
 * 核心词汇: uncle, aunt, worker, nurse, love, family
 * 核心句型: He/She is my... / He/She is a... / I love my family.
 * 重点: 介绍亲戚 (Uncle/Aunt) + 职业 (Worker/Nurse) + 情感表达
 * 模式: Speaking (大屏口语布局)
 * File: data/speaking/u4_l4.js
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 4: I love my family (Speaking)",
    mode: "speaking", // 激活大屏口语布局

    // ✅ 图片资源 (请确保 img 文件夹里有这些图片)
    images: {
        'Uncle': 'img/u4_uncle_worker.png',
        'Aunt': 'img/u4_aunt_nurse.png',
        'BigFamily': 'img/u4_big_family.png'
    },

    // ✅ 完整 5 道口语题 (介绍亲戚 + 职业 + 情感表达)
    questions: [
        // 【Q1 核心词汇 - Uncle】
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '看图说词：请用英语大声说出这是谁？', 
            imageKey: 'Uncle', 
            guide: '✅ 参考答案：\nUncle\n💡 注意发音 /ʌŋkl/' 
        },

        // 【Q2 核心词汇 - Aunt】
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '看图说词：请用英语大声说出这是谁？', 
            imageKey: 'Aunt', 
            guide: '✅ 参考答案：\nAunt\n💡 注意发音 /ɑːnt/ 或 /ænt/' 
        },

        // 【Q3 综合句型 - 介绍叔叔 (身份+职业)】
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '老师问："Who is he?" (他是谁？)\n请介绍他的身份和职业。', 
            imageKey: 'Uncle', 
            guide: '✅ 参考答案 (两句话)：\nHe is my uncle.\nHe is a worker.\n💡 引导学生说完整' 
        },

        // 【Q4 综合句型 - 介绍阿姨 (身份+职业)】
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '老师问："Who is she?" (她是谁？)\n请介绍她的身份和职业。', 
            imageKey: 'Aunt', 
            guide: '✅ 参考答案 (两句话)：\nShe is my aunt.\nShe is a nurse.\n💡 引导学生说完整' 
        },

        // 【Q5 情感升华 - 大家庭】
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '看图表达感受！\n提示：大家庭 / 爱\n用英语表达你对家人的爱。', 
            imageKey: 'BigFamily', 
            guide: '✅ 参考金句：\nI have a big family.\nI love my family.\n💡 鼓励学生充满感情地表达' 
        }
    ]
});
