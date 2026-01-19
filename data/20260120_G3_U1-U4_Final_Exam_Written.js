/**
 * Unit 1-4 End of Term Assessment (Cambridge Pre-A1 Style)
 * File: script.js
 * Structure: 
 * - Part A: Listening (20 Qs, 33 pts)
 * - Part B: Reading (20 Qs, 29 pts) 
 * - Part C: Writing (5 Qs, 5 pts)
 * Total: 67 Points
 */
window.LOAD_QUIZ({
    title: "📝 期末笔试 (Listening 33 + R&W 34 = 67)",
    timeLimit: 2100, // 35 Minutes
    
    // ⛔️ IRON RULE: NO 'images: {}' object here!
    
    questions: [
        // =========================
        // Part A: Listening (33 Points)
        // =========================
        {
            qNum: 1, part: 'A', type: 'select', score: 2,
            text: '【U1L1 | Cambridge:听辨字母】听录音，选出正确单词。',
            audioText: 'apple',
            options: ['A. apple', 'B. banana', 'C. boy', 'D. girl'],
            correct: 'A. apple'
        },
        {
            qNum: 2, part: 'A', type: 'select', score: 2,
            text: '【U1L1 | Cambridge:听辨字母】听录音，选出正确单词。',
            audioText: 'banana',
            options: ['A. apple', 'B. banana', 'C. cat', 'D. dog'],
            correct: 'B. banana'
        },
        {
            qNum: 3, part: 'A', type: 'select', score: 2,
            text: '【U1L2 | Cambridge:听辨字母】听录音，选出正确单词。',
            audioText: 'cat',
            options: ['A. cake', 'B. cat', 'C. dog', 'D. desk'],
            correct: 'B. cat'
        },
        {
            qNum: 4, part: 'A', type: 'select', score: 2,
            text: '【U1L2 | Cambridge:听辨字母】听录音，选出正确单词。',
            audioText: 'dog',
            options: ['A. duck', 'B. dog', 'C. desk', 'D. door'],
            correct: 'B. dog'
        },
        {
            qNum: 5, part: 'A', type: 'select', score: 2,
            text: '【U1L3 | Cambridge:听辨字母】听录音，选出正确单词。',
            audioText: 'egg',
            options: ['A. egg', 'B. fish', 'C. face', 'D. fan'],
            correct: 'A. egg'
        },
        {
            qNum: 6, part: 'A', type: 'select', score: 2,
            text: '【U1L1 | Cambridge:理解简单应答】听录音，选出正确应答。',
            audioText: 'Nice to meet you.',
            options: ['A. Nice to meet you, too.', 'B. Good morning.', 'C. My name is Tom.', 'D. I am five.'],
            correct: 'A. Nice to meet you, too.'
        },
        {
            qNum: 7, part: 'A', type: 'select', score: 2,
            text: '【U1L2 | Cambridge:理解关于自己的问题】听录音，选出正确句子。',
            audioText: "What’s your name?", // Smart quote used
            options: ['A. What’s your name?', 'B. How old are you?', 'C. How are you?', 'D. What color is it?'],
            correct: 'A. What’s your name?'
        },
        {
            qNum: 8, part: 'A', type: 'select', score: 2,
            text: '【U1L2 | Cambridge:理解关于自己的问题】听录音，选出正确句子。',
            audioText: 'My name is Tom.',
            options: ['A. My name is Tom.', 'B. I’m fine.', 'C. I’m five.', 'D. It’s red.'], // Smart quotes used
            correct: 'A. My name is Tom.'
        },
        {
            qNum: 9, part: 'A', type: 'select', score: 2,
            text: '【U1L3 | Cambridge:理解简单问候】听录音，选出正确应答。',
            audioText: 'How are you?',
            options: ['A. I’m fine. Thank you.', 'B. I’m seven.', 'C. My name is Amy.', 'D. It’s green.'],
            correct: 'A. I’m fine. Thank you.'
        },
        {
            qNum: 10, part: 'A', type: 'select', score: 2,
            text: '【U1L1 | Cambridge:理解简短对话】听录音，选出正确句子。',
            audioText: "Hello, I’m Miss Gao. — Hello, Miss Gao.",
            options: ['A. Hello, Miss Gao.', 'B. How old are you?', 'C. What color is it?', 'D. Good night.'],
            correct: 'A. Hello, Miss Gao.'
        },
        {
            qNum: 11, part: 'A', type: 'select', score: 2,
            text: '【U2L1 | Cambridge:听辨数字】听录音，选出正确数字。',
            audioText: 'five',
            options: ['A. four', 'B. five', 'C. six', 'D. seven'],
            correct: 'B. five'
        },
        {
            qNum: 12, part: 'A', type: 'select', score: 2,
            text: '【U2L1 | Cambridge:听辨数字】听录音，选出正确数字。',
            audioText: 'nine',
            options: ['A. six', 'B. seven', 'C. nine', 'D. ten'],
            correct: 'C. nine'
        },
        {
            qNum: 13, part: 'A', type: 'select', score: 2,
            text: '【U2L2 | Cambridge:理解数量问答】听录音，选出正确回答。',
            audioText: 'How many ducks? Seven ducks.',
            options: ['A. Five ducks.', 'B. Six ducks.', 'C. Seven ducks.', 'D. Eight ducks.'],
            correct: 'C. Seven ducks.'
        },
        {
            qNum: 14, part: 'A', type: 'select', score: 1,
            text: '【U2L3 | Cambridge:理解关于年龄的问题】听录音，选出正确回答。',
            audioText: 'How old are you? I’m eight years old.',
            options: ['A. I’m five years old.', 'B. I’m six years old.', 'C. I’m eight years old.', 'D. I’m ten years old.'],
            correct: 'C. I’m eight years old.'
        },
        {
            qNum: 15, part: 'A', type: 'select', score: 1,
            text: '【U2L4 | Cambridge:听辨数字信息】听录音，选出正确号码。',
            audioText: "It’s 8 1 7 2 6 9.",
            options: ['A. 8-1-7-2-6-9', 'B. 8-1-6-2-7-9', 'C. 8-2-7-1-6-9', 'D. 8-1-7-2-9-6'],
            correct: 'A. 8-1-7-2-6-9'
        },
        {
            qNum: 16, part: 'A', type: 'select', score: 1,
            text: '【U3L2 | Cambridge:理解颜色描述】听录音，选出正确颜色。',
            audioText: 'red',
            options: ['A. red', 'B. blue', 'C. yellow', 'D. green'],
            correct: 'A. red'
        },
        {
            qNum: 17, part: 'A', type: 'select', score: 1,
            text: '【U3L3 | Cambridge:理解简单指令】听录音，选出正确指令。',
            audioText: 'Show me red, please.',
            options: ['A. Show me red, please.', 'B. Show me blue, please.', 'C. Show me green, please.', 'D. Show me yellow, please.'],
            correct: 'A. Show me red, please.'
        },
        {
            qNum: 18, part: 'A', type: 'select', score: 1,
            text: '【U3L1 | Cambridge:理解位置描述】听录音，选出正确句子。',
            audioText: 'The pencil is on the book.',
            options: ['A. The pencil is on the book.', 'B. The pencil is red.', 'C. The pencil is a ruler.', 'D. The book is a pencil.'],
            correct: 'A. The pencil is on the book.'
        },
        {
            qNum: 19, part: 'A', type: 'select', score: 1,
            text: '【U4L2 | Cambridge:理解人物描述】听录音，选出正确答案。',
            audioText: 'Who is he? He is my grandpa.',
            options: ['A. grandpa', 'B. grandma', 'C. uncle', 'D. aunt'],
            correct: 'A. grandpa'
        },
        {
            qNum: 20, part: 'A', type: 'select', score: 1,
            text: '【U4L3 | Cambridge:理解职业描述】听录音，选出正确职业。',
            audioText: 'My father is a farmer.',
            options: ['A. doctor', 'B. farmer', 'C. teacher', 'D. cook'],
            correct: 'B. farmer'
        },

        // ==================================
        // Part B: Reading (29 Points)
        // ==================================
        {
            qNum: 21, part: 'B', type: 'select', score: 2,
            text: '【U3L3 | Cambridge:理解简单句子】句子对吗？This is a red schoolbag.',
            options: ['A. Yes (对)', 'B. No (错)'],
            correct: 'A. Yes (对)'
        },
        {
            qNum: 22, part: 'B', type: 'select', score: 2,
            text: '【U2L2 | Cambridge:理解简单句子】句子对吗？There are six ducks. (图片5只鸭子)',
            options: ['A. Yes (对)', 'B. No (错)'],
            correct: 'B. No (错)'
        },
        {
            qNum: 23, part: 'B', type: 'select', score: 2,
            text: '【U3L3 | Cambridge:理解简短图片故事】看图并判断：Sally has a red schoolbag. The schoolbag is red. (图片：红色书包)',
            options: ['A. Yes (对)', 'B. No (错)'],
            correct: 'A. Yes (对)'
        },
        {
            qNum: 24, part: 'B', type: 'select', score: 2,
            text: '【U4L1 | Cambridge:理解简单句子】句子对吗？This is my mother.',
            options: ['A. Yes (对)', 'B. No (错)'],
            correct: 'A. Yes (对)'
        },
        {
            qNum: 25, part: 'B', type: 'select', score: 1,
            text: '【U3L2 | Cambridge:理解简单句子】句子对吗？It is blue. (图片黄色星星)',
            options: ['A. Yes (对)', 'B. No (错)'],
            correct: 'B. No (错)'
        },
        {
            qNum: 26, part: 'B', type: 'select', score: 2,
            text: '【U1L2 | Cambridge:命名熟悉事物】选出正确单词：猫',
            options: ['A. dog', 'B. cat', 'C. duck', 'D. fish'],
            correct: 'B. cat'
        },
        {
            qNum: 27, part: 'B', type: 'select', score: 1,
            text: '【U2L1 | Cambridge:词汇认读】数字“8”的英文是？',
            options: ['A. seven', 'B. eight', 'C. nine', 'D. ten'],
            correct: 'B. eight'
        },
        {
            qNum: 28, part: 'B', type: 'select', score: 1,
            text: '【U3L3 | Cambridge:词汇认读】选出正确单词：pencil box',
            options: ['A. pencil', 'B. pencil box', 'C. ruler', 'D. book'],
            correct: 'B. pencil box'
        },
        {
            qNum: 29, part: 'B', type: 'select', score: 1,
            text: '【U4L3 | Cambridge:词汇认读】选出正确单词：doctor',
            options: ['A. doctor', 'B. teacher', 'C. farmer', 'D. nurse'],
            correct: 'A. doctor'
        },
        {
            qNum: 30, part: 'B', type: 'select', score: 1,
            text: '【U1L1 | Cambridge:词汇认读】选出正确单词：boy',
            options: ['A. boy', 'B. girl', 'C. mom', 'D. dad'],
            correct: 'A. boy'
        },
        {
            qNum: 31, part: 'B', type: 'select', score: 1,
            text: '【U2L2 | Cambridge:拼写辨认】k c u d → ?',
            options: ['A. duck', 'B. cake', 'C. desk', 'D. kid'],
            correct: 'A. duck'
        },
        {
            qNum: 32, part: 'B', type: 'select', score: 1,
            text: '【U3L2 | Cambridge:拼写辨认】y e l l o w → ?',
            options: ['A. yellow', 'B. yelow', 'C. yello', 'D. yellw'],
            correct: 'A. yellow'
        },
        {
            qNum: 33, part: 'B', type: 'select', score: 1,
            text: '【U1L3 | Cambridge:拼写辨认】f i s h → ?',
            options: ['A. fish', 'B. wish', 'C. dish', 'D. fash'],
            correct: 'A. fish'
        },
        {
            qNum: 34, part: 'B', type: 'select', score: 1,
            text: '【U1L2 | Cambridge:识别姓名拼写】选出正确的名字拼写。',
            options: ['A. Amy', 'B. Amm', 'C. Ammy', 'D. Aamy'],
            correct: 'A. Amy'
        },
        {
            qNum: 35, part: 'B', type: 'select', score: 1,
            text: '【U4L1 | Cambridge:拼写辨认】m o t h e r → ?',
            options: ['A. mother', 'B. mather', 'C. mothor', 'D. mathor'],
            correct: 'A. mother'
        },
        {
            qNum: 36, part: 'B', type: 'select', score: 1,
            text: '【U1L2 | Cambridge:理解简单问答】— What’s your name? — ________',
            options: ['A. I’m fine.', 'B. My name is Amy.', 'C. It’s red.', 'D. I’m seven.'],
            correct: 'B. My name is Amy.'
        },
        {
            qNum: 37, part: 'B', type: 'select', score: 1,
            text: '【U2L3 | Cambridge:理解简单问答】— How old are you? — ________',
            options: ['A. I’m five years old.', 'B. My name is Tom.', 'C. Good morning.', 'D. Nice to meet you.'],
            correct: 'A. I’m five years old.'
        },
        {
            qNum: 38, part: 'B', type: 'select', score: 1,
            text: '【U3L2 | Cambridge:理解简单问答】— What color is it? — ________',
            options: ['A. It’s blue.', 'B. It’s a cat.', 'C. I’m fine.', 'D. It’s five.'],
            correct: 'A. It’s blue.'
        },
        {
            qNum: 39, part: 'B', type: 'select', score: 1,
            text: '【U4L2 | Cambridge:理解简单问答】— Who is he? — ________',
            options: ['A. He is my grandpa.', 'B. She is my mother.', 'C. It is a cat.', 'D. I’m fine.'],
            correct: 'A. He is my grandpa.'
        },
        {
            qNum: 40, part: 'B', type: 'select', score: 1,
            text: '【U1L1 | Cambridge:理解简单问答】— Nice to meet you. — ________',
            options: ['A. Nice to meet you, too.', 'B. Good afternoon.', 'C. I’m eight.', 'D. Yes.'],
            correct: 'A. Nice to meet you, too.'
        },

        // ==================================
        // Part C: Writing (5 Points)
        // ==================================
        {
            qNum: 41, part: 'C', type: 'drag-sort', score: 1,
            text: '【U1L1 | Cambridge:抄写/组织句子】连词成句。',
            words: ['Nice', 'to', 'meet', 'you', '.'],
            correct: 'Nice to meet you .'
        },
        {
            qNum: 42, part: 'C', type: 'drag-sort', score: 1,
            text: '【U2L2 | Cambridge:书写简单问句】连词成句。',
            words: ['How', 'many', 'ducks', '?'],
            correct: 'How many ducks ?'
        },
        {
            qNum: 43, part: 'C', type: 'drag-sort', score: 1,
            text: '【U3L1 | Cambridge:书写简单句】连词成句。',
            words: ['It', 'is', 'green', '.'],
            correct: 'It is green .'
        },
        {
            qNum: 44, part: 'C', type: 'drag-sort', score: 1,
            text: '【U4L1 | Cambridge:书写家庭介绍句】连词成句。',
            words: ['This', 'is', 'my', 'father', '.'],
            correct: 'This is my father .'
        },
        {
            qNum: 45, part: 'C', type: 'drag-sort', score: 1,
            text: '【U1L2 | Cambridge:书写姓名】拖动字母，拼出名字。',
            words: ['A', 'm', 'y'],
            correct: 'A m y'
        }
    ]
});
