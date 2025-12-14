/**
 * Speaking Part: Unit 1 Lesson 2 - What’s your name, please?
 * File: data/speaking/u1_l2.js
 * * 核心目标：问候、询问姓名、自我介绍、词汇识别 (cat/dog)、社交回应
 */
window.LOAD_SPEAKING_QUIZ({
    title: "Unit 1 Lesson 2: What’s your name, please? (口语)",
    totalScore: 25,
    
    // 📢 图片仅作教师提示和情境引入使用
    // 请确保以下图片已上传至 img/ 文件夹
    questions: [
        {
            qNum: 1,
            score: 5,
            text: '用正确的问候语向老师/同学打招呼。<br><span style="font-size:14px;color:#666">（Use a greeting phrase based on Hello/Hi.）</span>',
            imageUri: 'u1_l2_hi_hello.png', 
            teacherPrompt: "（教师走到学生面前，笑着说）Hi!",
            expectedAnswer: "Hello. / Hi. / Hello, Miss/Mr. [Teacher Name]."
        },
        {
            qNum: 2,
            score: 5,
            text: '回答老师关于名字的询问，并流利进行自我介绍。<br><span style="font-size:14px;color:#666">（Introduce yourself clearly after the prompt.）</span>',
            imageUri: 'u1_l2_my_name.png', 
            teacherPrompt: "What’s your name, please?",
            expectedAnswer: "My name is [学生名字]. / I’m [学生名字]."
        },
        {
            qNum: 3, // 修正后：替换为词汇识别 (cat/dog)
            score: 5,
            text: '看图，说出图中动物的英文单词（cat或dog）。<br><span style="font-size:14px;color:#666">（Look and say the word for the animal.）</span>',
            imageUri: 'u1_l2_cat.png', 
            teacherPrompt: "（教师指着猫或狗的图片）What’s this?",
            expectedAnswer: "It’s a cat. / It’s a dog. / A cat. / A dog."
        },
        {
            qNum: 4,
            score: 5,
            text: '用 "I’m..." 的句型向图中的新朋友介绍你自己。<br><span style="font-size:14px;color:#666">（Introduce yourself to the new friend.）</span>',
            imageUri: 'u1_l2_new_friend.png', 
            teacherPrompt: "（教师指着图片说：）Look, a new friend!",
            expectedAnswer: "Hello. I’m [学生名字]."
        },
        {
            qNum: 5,
            score: 5,
            text: '回应初次见面的礼貌用语，别忘了加上 "too"。 <br><span style="font-size:14px;color:#666">（Respond to the phrase "Nice to meet you" using "too".）</span>',
            imageUri: 'u1_l2_meet_you.png', 
            teacherPrompt: "Nice to meet you.",
            expectedAnswer: "Nice to meet you, too."
        }
    ]
});
