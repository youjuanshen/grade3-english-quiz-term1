/**
 * Unit 3 Lesson 1: It’s green. (口语测试)
 * 对应教材: 闽教版三年级上册 Page 36
 * File: data/speaking/u3_l1.js
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 1: It’s green. (口语)",
    mode: "speaking", // ⚠️ 关键标识：激活口语评分模式

    // 1. 图片资源定义
    images: {
        'Scene_RedLight': 'img/u3_traffic_red.png',
        'Scene_Stop': 'img/u3_action_stop.png',
        'Scene_GreenLight': 'img/u3_traffic_green.png',
        'Scene_Go': 'img/u3_kids_crossing.png',
        'Letters_QR': 'img/u3_letters_qr.png'
    },

    // 2. 题目列表 (满分 25 分)
    questions: [
        // Q1: 识别红灯 (The light is red.)
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '🔴 情景：你们正要过马路，抬头看到了红灯。\n请告诉朋友：“红灯亮了。”', 
            imageKey: 'Scene_RedLight', 
            guide: '✅ 参考回答：\nThe light is red.' 
        },

        // Q2: 发出指令 (Stop!)
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '✋ 情景：红灯亮时，朋友还在往前走。\n请大声制止他：“停下！”', 
            imageKey: 'Scene_Stop', 
            guide: '✅ 参考回答：\nStop!' 
        },

        // Q3: 识别绿灯 (It's green now.)
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '🟢 情景：过了一会儿，信号灯变颜色了。\n请告诉朋友：“现在是绿灯了。”', 
            imageKey: 'Scene_GreenLight', 
            guide: '✅ 参考回答：\nIt’s green now. / It’s green.' 
        },

        // Q4: 提出建议 (Let's go.)
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '🚶‍♂️ 情景：绿灯亮了，安全了。\n请对朋友说：“让我们走吧。”', 
            imageKey: 'Scene_Go', 
            guide: '✅ 参考回答：\nLet’s go.' 
        },

        // Q5: 字母与单词认读 (Phonics)
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '🔤 请大声读出卡片上的字母和单词。', 
            imageKey: 'Letters_QR', 
            guide: '✅ 参考回答：\nQ q, question\nR r, rabbit' 
        }
    ]
});
