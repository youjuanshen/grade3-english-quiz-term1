/**
 * Unit 4 Lesson 4: I love my family (笔试测试)
 * 教材来源: 闽教版三年级上册
 * 核心词汇: family, father, mother, grandpa, grandma, sister, brother, love
 * 核心句型: I love my family. / This is my... / Who is he/she?
 * File: data/written/u4_l4.js
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 4: I love my family (Written Test)",
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
            text: '听录音，选出正确的家庭成员。<br><span style="font-size:14px;color:#666">(Listen and choose: Grandpa)</span>', 
            audioText: 'Grandpa.', 
            options: ['image:u4_dad', 'image:u4_grandpa', 'image:u4_mum', 'image:u4_sister'], 
            correct: 'image:u4_grandpa' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose: I love my family)</span>', 
            audioText: 'I love my family.', 
            options: ['image:u4_family_photo', 'image:u4_dad', 'image:u4_heart', 'image:u4_grandpa'], 
            correct: 'image:u4_family_photo' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，判断图片是否正确。<br><span style="font-size:14px;color:#666">(Listen: This is my mother)</span>', 
            audioText: 'This is my mother.', 
            options: ['image:u4_mum', 'image:u4_sister', 'image:u4_dad', 'image:u4_grandpa'], 
            correct: 'image:u4_mum' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出对应的单词。<br><span style="font-size:14px;color:#666">(Listen and choose: Sister)</span>', 
            audioText: 'Sister.', 
            options: ['A. sister', 'B. brother', 'C. mother', 'D. father'], 
            correct: 'A. sister' 
        },
        { 
            qNum: 5, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听问句，选出正确的答句。<br><span style="font-size:14px;color:#666">(Listen: Who is he?)</span>', 
            audioText: 'Who is he?', 
            options: ['A. She is my mother.', 'B. He is my father.', 'C. He is my brother.', 'D. She is my sister.'], 
            correct: 'B. He is my father.' 
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
            imageUri: 'u4_dad.png',
            options: ['A. father', 'B. mother', 'C. sister', 'D. brother'], 
            correct: 'A. father' 
        },
        { 
            qNum: 7, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，补全句子：I ______ my family.<br><span style="font-size:14px;color:#666">(Fill in the blank)</span>', 
            imageUri: 'u4_heart.png',
            options: ['A. am', 'B. love', 'C. is', 'D. are'], 
            correct: 'B. love' 
        },
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '读一读，选出不同类的一项。<br><span style="font-size:14px;color:#666">(Find the odd one out)</span>', 
            options: ['A. grandpa', 'B. grandma', 'C. banana', 'D. father'], 
            correct: 'C. banana' 
        },
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图回答问题：<strong>Who is she?</strong><br><span style="font-size:14px;color:#666">(Look and answer)</span>', 
            imageUri: 'u4_mum.png',
            options: ['A. He is my father.', 'B. She is my mother.', 'C. She is my sister.', 'D. She is my grandma.'], 
            correct: 'B. She is my mother.' 
        },
        { 
            qNum: 10, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '英汉匹配：<strong>This is my family photo.</strong><br><span style="font-size:14px;color:#666">(Match English with Chinese)</span>', 
            options: ['A. 这是我的全家福。', 'B. 我爱我的家庭。', 'C. 他是我的爸爸。', 'D. 她是我的妈妈。'], 
            correct: 'A. 这是我的全家福。' 
        },

        // ===========================
        // Part C: Writing (写作/组句 - 25分)
        // ===========================
        { 
            qNum: 11, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '拖动单词，表达爱意。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            // 🔀 已打乱: love, I, family, my, .
            words: ['love', 'I', 'family', 'my', '.'], 
            correct: 'I love my family .' 
        },
        { 
            qNum: 12, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '拖动单词，介绍爸爸。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            // 🔀 已打乱: is, This, father, my, .
            words: ['is', 'This', 'father', 'my', '.'], 
            correct: 'This is my father .' 
        },
        { 
            qNum: 13, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '拖动单词，组成问句。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            // 🔀 已打乱: is, Who, she, ?
            words: ['is', 'Who', 'she', '?'], 
            correct: 'Who is she ?' 
        },
        { 
            qNum: 14, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '拖动单词，回答"她是谁"。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            // 🔀 已打乱: is, She, sister, my, .
            words: ['is', 'She', 'sister', 'my', '.'], 
            correct: 'She is my sister .' 
        },
        { 
            qNum: 15, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选词填空：He is my ______ (爷爷)。<br><span style="font-size:14px;color:#666">(Fill in the blank)</span>', 
            options: ['A. grandma', 'B. grandpa', 'C. father', 'D. brother'], 
            correct: 'B. grandpa' 
        }
    ]
});
