/**
 * Unit 3 Lesson 4: Speaking Test (口语测试)
 * 目标: 考察学生对花朵、颜色、指令动作的口头表达能力
 * File: data/speaking/u3_l4.js
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 4: Speaking Test (口语)",
    mode: "speaking", // 激活口语评分模式
    timeLimit: 300, // 口语测试约 5 分钟

    // NOTE: Replace these with PNGs when you upload to GitHub (e.g. img/u3_window.png)
    images: {
        'Scene_Window': 'img/u3_window.png',
        'Flower_Blue': 'img/u3_blue_flower.png',
        'Flowers_Colorful': 'img/u3_colorful_flowers.png',
        'Action_Cut': 'img/u3_cut.png',
        'Letter_X': 'img/u3_xray.png'
    },

    questions: [
        { 
            qNum: 1, 
            type: 'speaking', 
            score: 5,
            text: '【词汇认知】Teacher: What is this? (指图提问)', 
            imageKey: 'Scene_Window', 
            guide: '参考回答: It is a window. / Window. (发音清晰即可)' 
        },
        { 
            qNum: 2, 
            type: 'speaking', 
            score: 5,
            text: '【颜色描述】Teacher: What color is the flower?', 
            imageKey: 'Flower_Blue', 
            guide: '参考回答: It is blue. / It\'s a blue flower.' 
        },
        { 
            qNum: 3, 
            type: 'speaking', 
            score: 5,
            text: '【复数表达】Teacher: Look! What are they?', 
            imageKey: 'Flowers_Colorful', 
            guide: '参考回答: They are colorful flowers. / They are flowers.' 
        },
        { 
            qNum: 4, 
            type: 'speaking', 
            score: 5,
            text: '【指令动作】Teacher: Can you show me "Cut the flower"? (请学生做动作并复述)', 
            imageKey: 'Action_Cut', 
            guide: '参考动作: 手做剪刀状。参考回答: Cut, cut, cut. / Cut the flower.' 
        },
        { 
            qNum: 5, 
            type: 'speaking', 
            score: 5,
            text: '【字母发音】Teacher: What letter is this? And what is the word?', 
            imageKey: 'Letter_X', 
            guide: '参考回答: X. X-ray. (注意 X 的发音 /eks/)' 
        }
    ]
});
