/**
 * Unit 4 Lesson 3: Who are they? (笔试测试)
 * 教材来源: 闽教版三年级上册
 * 核心词汇: photo, doctor, farmer, cook, English teacher, cute, they
 * 核心句型: Who are they? They are... / My father is a...
 * File: data/written/u4_l3.js
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 3: Who are they? (Written Test)",
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
            text: '听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose: Doctor)</span>', 
            audioText: 'Doctor.', 
            options: ['image:u4_farmer', 'image:u4_doctor', 'image:u4_cook', 'image:u4_teacher'], 
            correct: 'image:u4_doctor' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose: Family Photo)</span>', 
            audioText: 'This is my family photo.', 
            options: ['image:u4_photo', 'image:u4_zoo', 'image:u4_cake', 'image:u4_family'], 
            correct: 'image:u4_photo' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出听到的人物。<br><span style="font-size:14px;color:#666">(Who is she?)</span>', 
            audioText: 'My grandma is a cook.', 
            options: ['image:u4_cook', 'image:u4_farmer', 'image:u4_doctor', 'image:u4_teacher'], 
            correct: 'image:u4_cook' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的问句。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>', 
            audioText: 'Who are they?', 
            options: ['A. Who is he?', 'B. Who are they?', 'C. Who is she?', 'D. Who are we?'], 
            correct: 'B. Who are they?' 
        },
        { 
            qNum: 5, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的形容词。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>', 
            audioText: 'They are so cute.', 
            options: ['A. cool', 'B. cute', 'C. cold', 'D. warm'], 
            correct: 'B. cute' 
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
            imageUri: 'u4_farmer.png', 
            options: ['A. father', 'B. farmer', 'C. friend', 'D. doctor'], 
            correct: 'B. farmer' 
        },
        { 
            qNum: 7, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选词填空。<br><span style="font-size:14px;color:#666">(Fill in the blank)</span>', 
            text: 'My mother is an ______ teacher.',
            options: ['A. English', 'B. Chinese', 'C. Math', 'D. Music'], 
            correct: 'A. English' 
        },
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，句子对吗？<br><span style="font-size:14px;color:#666">(True or False)</span>', 
            imageUri: 'u4_doctor.png',
            text: 'Sentence: He is a cook.',
            options: ['A. Yes (对)', 'B. No (错)'], 
            correct: 'B. No (错)' 
        },
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选出不同类的一个。<br><span style="font-size:14px;color:#666">(Odd one out)</span>', 
            options: ['A. doctor', 'B. farmer', 'C. photo', 'D. teacher'], 
            correct: 'C. photo' 
        },
        { 
            qNum: 10, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '根据问句选答句。<br><span style="font-size:14px;color:#666">(Read and choose)</span>', 
            text: 'Question: Who are they?',
            options: ['A. They are my sister and brother.', 'B. He is my father.', 'C. It is a dog.', 'D. They are my classmates.'], 
            correct: 'A. They are my sister and brother.' 
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
            // 🔀 已打乱: are, Who, they, ?
            words: ['are', 'Who', 'they', '?'], 
            correct: 'Who are they ?' 
        },
        { 
            qNum: 12, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            // 🔀 已打乱: family, my, This, photo, is, .
            words: ['family', 'my', 'This', 'photo', 'is', '.'], 
            correct: 'This is my family photo .' 
        },
        { 
            qNum: 13, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            // 🔀 已打乱: is, doctor, a, My, father, .
            words: ['is', 'doctor', 'a', 'My', 'father', '.'], 
            correct: 'My father is a doctor .' 
        },
        { 
            qNum: 14, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出拼写正确的单词。<br><span style="font-size:14px;color:#666">(Spelling Check: 医生)</span>', 
            imageUri: 'u4_doctor.png',
            options: ['A. doctor', 'B. docter', 'C. docor', 'D. doctoer'], 
            correct: 'A. doctor' 
        },
        { 
            qNum: 15, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出拼写正确的单词。<br><span style="font-size:14px;color:#666">(Spelling Check: 厨师)</span>', 
            imageUri: 'u4_cook.png', 
            options: ['A. cock', 'B. cook', 'C. coke', 'D. cooke'], 
            correct: 'B. cook' 
        }
    ]
});
