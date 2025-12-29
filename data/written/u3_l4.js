/**
 * Unit 3 Lesson 4: They are colorful flowers
 * 教材来源: 闽教版三年级上册 
 * 核心词汇: flower, colorful, cut, draw, make, window, X-ray
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 4: They are colorful flowers",
    timeLimit: 540, // 9分钟

    // ⛔️ 铁律：此处不写 images: {} 映射
    // 系统会自动在图片路径前加 img/

    questions: [
        // ===========================
        // Part A: Listening (听力 - 25分)
        // ===========================
        { 
            qNum: 1, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose: Flower)</span>', 
            audioText: 'Flower.', 
            // 选项格式：image:文件名 (无后缀)
            options: ['image:u3_flower', 'image:u3_window', 'image:u3_xray', 'image:u3_cut'], 
            correct: 'image:u3_flower' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的动作。<br><span style="font-size:14px;color:#666">(Listen and choose action)</span>', 
            audioText: 'Cut the flower.', 
            options: ['image:u3_draw', 'image:u3_cut', 'image:u3_flower', 'image:u3_window'], 
            correct: 'image:u3_cut' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的颜色。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>', 
            audioText: 'It is a blue flower.', 
            options: ['image:u3_blue_flower', 'image:u3_red_flower', 'image:u3_colorful_flowers'], 
            correct: 'image:u3_blue_flower' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出听到的单词。<br><span style="font-size:14px;color:#666">(Listen and choose word)</span>', 
            audioText: 'Window.', 
            options: ['image:u3_xray', 'image:u3_window', 'image:u3_draw'], 
            correct: 'image:u3_window' 
        },
        { 
            qNum: 5, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，判断是单数还是复数？<br><span style="font-size:14px;color:#666">(One or Many?)</span>', 
            audioText: 'They are colorful flowers.', 
            // 考察 "They are" 复数概念 [cite: 39, 40]
            options: ['image:u3_colorful_flowers', 'image:u3_flower'], 
            correct: 'image:u3_colorful_flowers' 
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
            // 图片路径：文件名.后缀
            imageUri: 'u3_draw.png', 
            options: ['A. cut', 'B. draw', 'C. make'], 
            correct: 'B. draw' 
        },
        { 
            qNum: 7, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '读句子，选图片。<br><span style="font-size:14px;color:#666">(Read and choose)</span>', 
            text: 'Sentence: It is a red flower.', 
            options: ['image:u3_blue_flower', 'image:u3_red_flower'], 
            correct: 'image:u3_red_flower' 
        },
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选出正确的首字母。<br><span style="font-size:14px;color:#666">(First Letter)</span>', 
            imageUri: 'u3_xray.png',
            text: '___ - ray',
            options: ['A. X', 'B. W', 'C. Y'], 
            correct: 'A. X' 
        },
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选词填空。<br><span style="font-size:14px;color:#666">(Fill in the blank)</span>', 
            text: 'They ______ colorful flowers.',
            options: ['A. am', 'B. is', 'C. are'], 
            correct: 'C. are' 
        },
        { 
            qNum: 10, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，选出正确的指令。<br><span style="font-size:14px;color:#666">(Instruction)</span>', 
            imageUri: 'u3_cut.png',
            options: ['A. Cut the flower.', 'B. Draw a flower.', 'C. Smell the flower.'], 
            correct: 'A. Cut the flower.' 
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
            words: ['It', 'is', 'a', 'flower', '.'], 
            correct: 'It is a flower .' 
        },
        { 
            qNum: 12, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            words: ['Cut', 'the', 'flower', '.'], 
            correct: 'Cut the flower .' 
        },
        { 
            qNum: 13, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句 (注意复数)。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            words: ['They', 'are', 'flowers', '.'], 
            correct: 'They are flowers .' 
        },
        { 
            qNum: 14, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出拼写正确的单词。<br><span style="font-size:14px;color:#666">(Spelling Check: 窗户)</span>', 
            imageUri: 'u3_window.png',
            options: ['A. window', 'B. wndow', 'C. winbow'], 
            correct: 'A. window' 
        },
        { 
            qNum: 15, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出拼写正确的单词。<br><span style="font-size:14px;color:#666">(Spelling Check: 多彩的)</span>', 
            imageUri: 'u3_colorful_flowers.png',
            options: ['A. color', 'B. colorful', 'C. colerful'], 
            correct: 'B. colorful' 
        }
    ]
});
