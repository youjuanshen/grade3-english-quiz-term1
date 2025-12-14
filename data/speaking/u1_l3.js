/**
 * Speaking Part: Unit 1 Lesson 3 - How are you?
 * File: data/speaking/u1_l3.js
 * 核心目标：询问近况、回答健康状况、礼貌道别、字母认读 (Ee, Ff)
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 3: How are you? (口语)",
    mode: "speaking", // ✅ 核心模式标识

    // ✅ 图片资源配置
    // 记得上传一张名为 u1_l3_letters.png 的图片，内容是 Ee (egg) 和 Ff (face)
    images: {
        'Fine_Face':      'img/u1_l3_fine.png',    // Q1: 开心/健康表情
        'Gift_Scene':     'img/u1_l3_thanks.png',  // Q2: 送礼物场景
        'Goodbye_Wave':   'img/u1_l3_goodbye.png', // Q3: 挥手道别
        'Meet_Teacher':   'img/u1_l3_meet.png',    // Q4: 遇见老师
        'Letters_EeFf':   'img/u1_l3_letters.png'  // Q5: 字母卡片 Ee & Ff
    },

    // ✅ 5 道口语题目
    questions: [
        // 【Q1 核心问答 - 听音反应】
        {
            qNum: 1,
            type: 'speaking',
            text: '<strong>情景反应：</strong><br>老师微笑着看着你，问道：<br><span style="color:#4a90e2">"Hello! How are you?"</span><br>请用英语回答老师。',
            imageKey: 'Fine_Face', 
            guide: '✅ 参考答案：I\'m fine, thank you. / Fine, thanks.'
        },

        // 【Q2 礼貌用语 - 感谢】
        {
            qNum: 2,
            type: 'speaking',
            text: '<strong>情景模拟：</strong><br>今天是你的生日，好朋友送给你一个漂亮的礼物。<br>你应该对他说什么？',
            imageKey: 'Gift_Scene',
            guide: '✅ 参考答案：Thank you. / Thanks.'
        },

        // 【Q3 看图说话 - 道别】
        {
            qNum: 3,
            type: 'speaking',
            text: '<strong>看图说话：</strong><br>放学了，图中的小朋友正在做什么？<br>请用英语跟老师说再见。',
            imageKey: 'Goodbye_Wave',
            guide: '✅ 参考答案：Goodbye. / Bye-bye. / See you.'
        },

        // 【Q4 角色扮演 - 主动提问】
        {
            qNum: 4,
            type: 'speaking',
            text: '<strong>角色互换：</strong><br>现在你是小老师，你在校门口遇到了同学。<br>请你主动用英语问候他的身体情况。',
            imageKey: 'Meet_Teacher',
            guide: '✅ 参考答案：How are you?'
        },

        // 【Q5 字母认读 - Ee & Ff】 (已修改为字母题)
        {
            qNum: 5,
            type: 'speaking',
            text: '<strong>字母认读 (Letters)：</strong><br>请看这张字母卡片。<br>请大声读出上面的字母和对应的单词。<br><span style="color:#999;font-size:0.9em">(Read the letters and words.)</span>',
            imageKey: 'Letters_EeFf',
            guide: '✅ 参考答案：Ee [i:] - egg; Ff [ef] - face'
        }
    ]
});
