/**
 * Unit 4 Lesson 1: This is my father (笔试测试)
 * 教材来源: 闽教版三年级上册
 * 说明: 这是根据提供的题目内容生成的笔试版本，包含听力、阅读与写作部分。
 * File: data/written/u4_l1.js
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 1: This is my father (Written Test)",
    timeLimit: 540, // 9分钟
    mode: "written",

    // ⛔️ 铁律：此处不写 images: {} 映射
    // 系统会自动在图片路径前加 img/

    questions: [
        // ===========================
        // Part A: Listening (听力 - 25分)
        // ===========================
        { 
            qNum: 1, 
            part: "A", 
            type: "select", 
            score: 5,
            text: "听录音，选出正确的图片。<br><span style=\"font-size:14px;color:#666\">(Listen and choose: Father)</span>", 
            audioText: "Father.", 
            // 选项格式：image:文件名 (无后缀)
            options: ["image:u4_mother", "image:u4_father", "image:u4_brother", "image:u4_sister"], 
            correct: "image:u4_father" 
        },
        { 
            qNum: 2, 
            part: "A", 
            type: "select", 
            score: 5,
            text: "听录音，选出听到的人物。<br><span style=\"font-size:14px;color:#666\">(Who is this?)</span>", 
            audioText: "This is my sister.", 
            options: ["image:u4_brother", "image:u4_father", "image:u4_sister", "image:u4_mother"], 
            correct: "image:u4_sister" 
        },
        { 
            qNum: 3, 
            part: "A", 
            type: "select", 
            score: 5,
            text: "听录音，选出正确的物品。<br><span style=\"font-size:14px;color:#666\">(Listen and choose)</span>", 
            audioText: "Here is your cake.", 
            options: ["image:u4_cake", "image:u4_zoo", "image:u4_family", "image:u4_father"], 
            correct: "image:u4_cake" 
        },
        { 
            qNum: 4, 
            part: "A", 
            type: "select", 
            score: 5,
            text: "听录音，选出正确的地点。<br><span style=\"font-size:14px;color:#666\">(Where is it?)</span>", 
            audioText: "Zoo.", 
            options: ["image:u4_zoo", "image:u4_cake", "image:u4_family", "image:u4_father"], 
            correct: "image:u4_zoo" 
        },
        { 
            qNum: 5, 
            part: "A", 
            type: "select", 
            score: 5,
            text: "听录音，选出正确的中文意思。<br><span style=\"font-size:14px;color:#666\">(Chinese Meaning)</span>", 
            audioText: "This is my father.", 
            options: ["A. 这是我的爸爸。", "B. 这是我的妈妈。", "C. 很高兴见到你。", "D. 我很好。"], 
            correct: "A. 这是我的爸爸。" 
        },

        // ===========================
        // Part B: Reading (阅读 - 25分)
        // ===========================
        { 
            qNum: 6, 
            part: "B", 
            type: "select", 
            score: 5,
            text: "看图，选出正确的单词。<br><span style=\"font-size:14px;color:#666\">(Look and choose)</span>", 
            imageUri: "u4_family.png", 
            options: ["A. father", "B. family", "C. friend", "D. mother"], 
            correct: "B. family" 
        },
        { 
            qNum: 7, 
            part: "B", 
            type: "select", 
            score: 5,
            text: "选词填空。<br><span style=\"font-size:14px;color:#666\">(Fill in the blank)</span><br><strong style=\"font-size:16px;color:#333\">This is my ______.</strong>", 
            imageUri: "u4_brother.png",
            options: ["A. brother", "B. sister", "C. mother", "D. father"], 
            correct: "A. brother" 
        },
        { 
            qNum: 8, 
            part: "B", 
            type: "select", 
            score: 5,
            text: "选出不同类的一个。<br><span style=\"font-size:14px;color:#666\">(Odd one out)</span>", 
            options: ["A. father", "B. mother", "C. cake", "D. sister"], 
            correct: "C. cake" 
        },
        { 
            qNum: 9, 
            part: "B", 
            type: "select", 
            score: 5,
            text: "根据上句选下句。<br><span style=\"font-size:14px;color:#666\">(Read and respond)</span><br><strong style=\"font-size:16px;color:#333\">Here is your cake.</strong>", 
            options: ["A. Thank you.", "B. Nice to meet you.", "C. I am fine.", "D. You're welcome."], 
            correct: "A. Thank you." 
        },
        { 
            qNum: 10, 
            part: "B", 
            type: "select", 
            score: 5,
            text: "看图，句子对吗？<br><span style=\"font-size:14px;color:#666\">(True or False)</span><br><strong style=\"font-size:16px;color:#333\">Sentence: This is my father.</strong>", 
            imageUri: "u4_mother.png",
            options: ["A. Yes (对)", "B. No (错)"], 
            correct: "B. No (错)" 
        },

        // ===========================
        // Part C: Writing (写作/组句 - 25分)
        // ===========================
        { 
            qNum: 11, 
            part: "C", 
            type: "drag-sort", 
            score: 5,
            text: "拖动单词，连词成句。<br><span style=\"font-size:14px;color:#666\">(Reorder)</span>", 
            // 🔀 已打乱: father, is, my, ., This
            words: ["father", "is", "my", ".", "This"], 
            correct: "This is my father ." 
        },
        { 
            qNum: 12, 
            part: "C", 
            type: "drag-sort", 
            score: 5,
            text: "连词成句。<br><span style=\"font-size:14px;color:#666\">(Reorder)</span>", 
            // 🔀 已打乱: mother, ., This, is, my
            words: ["mother", ".", "This", "is", "my"], 
            correct: "This is my mother ." 
        },
        { 
            qNum: 13, 
            part: "C", 
            type: "drag-sort", 
            score: 5,
            text: "连词成句。<br><span style=\"font-size:14px;color:#666\">(Reorder)</span>", 
            // 🔀 已打乱: your, ., Here, cake, is
            words: ["your", ".", "Here", "cake", "is"], 
            correct: "Here is your cake ." 
        },
        { 
            qNum: 14, 
            part: "C", 
            type: "select", 
            score: 5,
            text: "选出拼写正确的单词。<br><span style=\"font-size:14px;color:#666\">(Spelling Check: 妈妈)</span>", 
            imageUri: "u4_mother.png",
            options: ["A. mother", "B. mathor", "C. mather", "D. mothor"], 
            correct: "A. mother" 
        },
        { 
            qNum: 15, 
            part: "C", 
            type: "select", 
            score: 5,
            text: "选出拼写正确的单词。<br><span style=\"font-size:14px;color:#666\">(Spelling Check: 动物园)</span>", 
            imageUri: "u4_zoo.png",
            options: ["A. zo", "B. zoo", "C. zuu", "D. zooo"], 
            correct: "B. zoo" 
        }
    ]
});
