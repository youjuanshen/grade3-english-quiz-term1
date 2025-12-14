/**
 * Unit 2 Lesson 4: What's Your Phone Number? (口语测试)
 * 对应教材: 闽教版三年级上册 Page 25
 * File: data/speaking/u2_l4.js
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 4: What's Your Phone Number? (口语)",
    mode: "speaking", // ⚠️ 关键标识：激活口语评分模式

    // 1. 图片资源定义
    images: {
        'Scene_Ask_Phone': 'img/u2_phone_ask.png',
        'Scene_Read_Number': 'img/u2_number_card.png',
        'Scene_Look_Dog': 'img/u2_pet_dog.png',
        'Scene_My_Pet': 'img/u2_my_pet.png',
        'Letters_OP': 'img/u2_letters_op.png'
    },

    // 2. 题目列表 (满分 25 分)
    questions: [
        // Q1: 询问电话号码 (What's your phone number?)
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '📞 情景：你想给新朋友打电话，但不知道号码。\n请用英语问一问他：“你的电话号码是多少？”', 
            imageKey: 'Scene_Ask_Phone', 
            guide: '✅ 参考回答：\nWhat’s your phone number?' 
        },

        // Q2: 回答电话号码 (It's...)
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '🔢 情景：朋友问你的号码。请看图上的数字（8172-6953）。\n请回答号码（提示：数字要一个个读）。', 
            imageKey: 'Scene_Read_Number', 
            guide: '✅ 参考回答：\nIt’s 8-1-7-2-6-9-5-3.' 
        },

        // Q3: 引起注意 (Look, a dog!)
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '🐶 情景：你在路边突然看到一只可爱的小狗！\n请让朋友看，并说：“看，一只狗！”', 
            imageKey: 'Scene_Look_Dog', 
            guide: '✅ 参考回答：\nLook, a dog!' 
        },

        // Q4: 介绍宠物 (Fido is my pet.)
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '🏠 情景：你向朋友介绍这只狗（它叫 Fido）。\n请告诉朋友：“是的。Fido 是我的宠物。”', 
            imageKey: 'Scene_My_Pet', 
            guide: '✅ 参考回答：\nYes. Fido is my pet.' 
        },

        // Q5: 字母与单词认读 (Phonics)
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '🔤 请大声读出卡片上的字母和单词。', 
            imageKey: 'Letters_OP', 
            guide: '✅ 参考回答：\nO o, orange\nP p, pig' 
        }
    ]
});
