/**
 * Speaking Part: Unit 1 Lesson 2 - What’s your name, please?
 * File: data/speaking/u1_l2.js
 * 模式：适配 script_engine.js v12.5+ (参考 U1L1 结构)
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 2: What’s your name, please? (口语)",
    mode: "speaking", // ✅ 明确指定模式

    // ✅ 图片资源定义 (集中管理路径，请确保 img 文件夹里有这些图)
    // 注意：这里假设您的图片都在根目录的 img/ 文件夹下
    images: {
        'Greeting_Scene': 'img/u1_l2_hi_hello.png',
        'My_Name_Tag':    'img/u1_l2_my_name.png',
        'The_Cat':        'img/u1_l2_cat.png',
        'New_Friend':     'img/u1_l2_new_friend.png',
        'Nice_Meeting':   'img/u1_l2_meet_you.png'
    },

    // ✅ 完整 5 道口语题
    questions: [
        // 【Q1 问候互动】
        {
            qNum: 1,
            type: 'speaking',
            // 将原来的提示语和教师动作整合成一段给老师看的文本
            text: '情景反应：老师走到你面前，笑着跟你打招呼说 "Hi!". 请用正确的英语向老师回话。',
            imageKey: 'Greeting_Scene', // 引用上面定义的图片Key
            guide: '✅ 参考答案：Hello. / Hi. / Hello, Miss/Mr. [Teacher Name].'
        },

        // 【Q2 询问与自我介绍】
        {
            qNum: 2,
            type: 'speaking',
            text: '情景问答：仔细听老师提问 "What’s your name, please?". 请流利地用英语介绍你的名字。',
            imageKey: 'My_Name_Tag',
            guide: '✅ 参考答案：My name is [学生名字]. / I’m [学生名字].'
        },

        // 【Q3 词汇识别】
        {
            qNum: 3,
            type: 'speaking',
            text: '请看这张图片。老师指着图片问 "What’s this?". 请用英语大声告诉老师这是什么动物。',
            imageKey: 'The_Cat',
            // 假设您使用我们之前生成的猫咪图片。如果是狗，请相应修改。
            guide: '✅ 参考答案：It’s a cat. / A cat.'
        },

        // 【Q4 介绍任务】
        {
            qNum: 4,
            type: 'speaking',
            text: '图说任务：老师指着图片说 "Look, a new friend!". 请用 "I\'m..." 的句型向图片里的新朋友介绍你自己。',
            imageKey: 'New_Friend',
            guide: '✅ 参考答案：Hello. I’m [学生名字].'
        },

        // 【Q5 社交回应】
        {
            qNum: 5,
            type: 'speaking',
            text: '社交回应：仔细听老师对你说 "Nice to meet you.". 请用正确的英语礼貌回应（别忘了加上 "too"）。',
            imageKey: 'Nice_Meeting',
            guide: '✅ 参考答案：Nice to meet you, too.'
        }
    ]
});
