/**
 * Unit 3 Lesson 3: Show me red, please. (口语测试)
 * 对应教材: 闽教版三年级上册 Page 42
 * File: data/speaking/u3_l3.js
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 3: Show me red, please. (口语)",
    mode: "speaking", // ⚠️ 关键标识：激活口语评分模式

    // 1. 图片资源定义
    images: {
        'Scene_ShowRed': 'img/u3_show_red.png',
        'Scene_BlueRuler': 'img/u3_blue_ruler.png',
        'Scene_BlackPens': 'img/u3_black_pens.png',
        'Scene_WhiteEraser': 'img/u3_white_eraser.png',
        'Letters_UV': 'img/u3_letters_uv.png'
    },

    // 2. 题目列表 (满分 25 分)
    questions: [
        // Q1: 发出指令 (Show me...)
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '🎒 情景：你想看红色的文具。\n请礼貌地对同桌说：“请给我看看红色。”', 
            imageKey: 'Scene_ShowRed', 
            guide: '✅ 参考回答：\nShow me red, please.' 
        },

        // Q2: 描述单数物品 (My ... is ...)
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '📏 情景：老师让你展示蓝色。请举起你的尺子（如图）并介绍：\n“我的尺子是蓝色的。”', 
            imageKey: 'Scene_BlueRuler', 
            guide: '✅ 参考回答：\nMy ruler is blue.' 
        },

        // Q3: 描述复数物品 (My ... are ...) - 难点
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '🖊️ 情景：请展示你的钢笔和铅笔（如图），告诉大家它们是黑色的。\n(提示：因为有好多支笔，要用 are)', 
            imageKey: 'Scene_BlackPens', 
            guide: '✅ 参考回答：\nMy pens and pencils are black.' 
        },

        // Q4: 拓展物品描述 (White)
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '⬜ 情景：请拿出你的橡皮擦，告诉同桌它是白色的。', 
            imageKey: 'Scene_WhiteEraser', 
            guide: '✅ 参考回答：\nMy eraser is white.' 
        },

        // Q5: 字母与单词认读 (Phonics)
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '🔤 请大声读出卡片上的字母和单词。', 
            imageKey: 'Letters_UV', 
            guide: '✅ 参考回答：\nU u, umbrella\nV v, violin' 
        }
    ]
});
