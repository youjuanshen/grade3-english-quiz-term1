/**
 * Unit 4 Lesson 2: Who is he? (笔试测试)
 * 教材来源: 闽教版三年级上册
 * 核心词汇: grandpa, grandma, who, he, she, present, birthday, candle, wish
 * 核心句型: Who is he/she? He/She is my... / Happy birthday!
 * File: data/written/u4_l2.js
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 2: Who is he? (Written Test)",
    timeLimit: 540, // 9分钟
    mode: 'written',

    questions: [
        // ===========================
        // Part A: Listening (听力 - 25分)
        // ===========================
        { 
            qNum: 1, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose: Grandpa)</span>', 
            audioText: 'Grandpa.', 
            options: ['image:u4_grandma', 'image:u4_grandpa', 'image:u4_father', 'image:u4_brother'], 
            correct: 'image:u4_grandpa' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的物品。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>', 
            audioText: 'Present.', 
            options: ['image:u4_present', 'image:u4_cake', 'image:u4_candle', 'image:u4_family'], 
            correct: 'image:u4_present' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的动作。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>', 
            audioText: 'Make a wish.', 
            options: ['image:u4_make_wish', 'image:u4_blow_candles', 'image:u4_present', 'image:u4_cake'], 
            correct: 'image:u4_make_wish' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出你听到的句子。<br><span style="font-size:14px;color:#666">(Listen and choose sentence)</span>', 
            audioText: 'Who is he?', 
            options: ['A. Who is she?', 'B. Who is he?', 'C. How old are you?', 'D. What\'s your name?'], 
            correct: 'B. Who is he?' 
        },
        { 
            qNum: 5, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的答语。<br><span style="font-size:14px;color:#666">(Listen and respond)</span>', 
            audioText: 'Happy birthday!', 
            options: ['A. Thank you.', 'B. OK.', 'C. Good morning.', 'D. Happy birthday.'], 
            correct: 'A. Thank you.' 
        },

        // ===========================
        // Part B: Reading (阅读 - 25分)
        // ===========================
        { 
            qNum: 6, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，选出正确的单词。<br><span style="font-size:14px;color:#666">(Look and choose)</span>', 
            imageUri: 'u4_grandma.png', 
            options: ['A. grandpa', 'B. grandma', 'C. mother', 'D. father'], 
            correct: 'B. grandma' 
        },
        { 
            qNum: 7, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选词填空。<br><span style="font-size:14px;color:#666">(Fill in the blank)</span><br><strong>Prompt:</strong> Who is ______?',
            imageUri: 'u4_grandpa.png',
            options: ['A. he', 'B. she', 'C. it', 'D. they'], 
            correct: 'A. he' 
        },
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5,
            // 把原来的 prompt 内容合并到 text 中，确保前端能显示该句子
            text: '看图，句子对吗？<br><span style="font-size:14px;color:#666">(True or False)</span><br><strong>Sentence:</strong> Blow out the candles.',
            imageUri: 'u4_candle.png',
            options: ['A. Yes (对)', 'B. No (错)'], 
            correct: 'A. Yes (对)' 
        },
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选出不同类的一个。<br><span style="font-size:14px;color:#666">(Odd one out)</span>', 
            options: ['A. grandpa', 'B. grandma', 'C. birthday', 'D. father'], 
            correct: 'C. birthday' 
        },
        { 
            qNum: 10, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '读句子，选图片。<br><span style="font-size:14px;color:#666">(Read and choose)</span><br><strong>Sentence:</strong> She is my grandma.',
            options: ['image:u4_grandma', 'image:u4_grandpa', 'image:u4_sister', 'image:u4_mother'], 
            correct: 'image:u4_grandma' 
        },

        // ===========================
        // Part C: Writing (写作/组句 - 25分)
        // ===========================
        { 
            qNum: 11, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '拖动单词，连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            // 🔀 已打乱: Who, is, he, ?
            words: ['he', 'is', 'Who', '?'], 
            correct: 'Who is he?' 
        },

        { 
            qNum: 12, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            words: ['my', 'He', 'grandpa', 'is', '.'], 
            correct: 'He is my grandpa .' 
        },
        { 
            qNum: 13, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            words: ['She', 'grandma', 'is', 'my', '.'], 
            correct: 'She is my grandma .' 
        },
        { 
            qNum: 14, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出拼写正确的单词。<br><span style="font-size:14px;color:#666">(Spelling Check: 礼物)</span>', 
            imageUri: 'u4_present.png',
            options: ['A. presant', 'B. present', 'C. persent', 'D. presnt'], 
            correct: 'B. present' 
        },
        { 
            qNum: 15, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出拼写正确的单词。<br><span style="font-size:14px;color:#666">(Spelling Check: 生日)</span>', 
            imageUri: 'u4_cake.png', 
            options: ['A. birthday', 'B. birhtday', 'C. berthday', 'D. birthay'], 
            correct: 'A. birthday' 
        }
    ]
});
