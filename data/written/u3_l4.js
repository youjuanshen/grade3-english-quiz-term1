/**
 * Unit 1 Lesson 1: Meeting Friends
 * 严格适配：闽教版三年级上册 P2-P5
 * 词汇范围：apple, banana, boy, girl, hello, Miss, nice, meet
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 1: Meeting Friends",
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
            text: '听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>', 
            audioText: 'Apple', 
            // 选项格式：image:文件名 (无后缀)
            options: ['image:u1_banana', 'image:u1_apple', 'image:u1_boy', 'image:u1_girl'], 
            correct: 'image:u1_apple' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出听到的人物。<br><span style="font-size:14px;color:#666">(Who is this?)</span>', 
            audioText: 'I am Miss Gao.', 
            options: ['image:u1_boy', 'image:u1_miss_gao', 'image:u1_girl', 'image:u1_cat'], 
            correct: 'image:u1_miss_gao' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出你听到的单词。<br><span style="font-size:14px;color:#666">(Listen and choose the word)</span>', 
            audioText: 'Banana', 
            options: ['A. bag', 'B. banana', 'C. boy', 'D. baby'], 
            correct: 'B. banana' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Chinese Meaning)</span>', 
            audioText: 'Nice to meet you.', 
            options: ['A. 早上好', 'B. 很高兴见到
