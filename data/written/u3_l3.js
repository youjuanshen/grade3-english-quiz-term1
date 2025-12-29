/**
 * Unit 3 Lesson 3: Show me red, please.
 * File: data/written/u3_l3.js
 * 知识点：颜色 (red, blue, green, yellow, black, white), 句型 Show me... / Here it is.
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 3: Show me red, please.",
    timeLimit: 540, // 9 minutes
// ==========================================
// 🔊 音频播放引擎 (Text-to-Speech Engine)
// ==========================================

    // ⛔️ IMPORTANT: No top-level 'images' object. System auto-adds 'img/' prefix.
const synth = window.speechSynthesis;

    questions: [
        // ===========================
        // Part A: Listening (Target: 25 pts)
        // ===========================
        { 
            qNum: 1, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的颜色。<br><span style="font-size:14px;color:#666">(Listen and choose the color)</span>', 
            audioText: 'Show me red, please.', 
            // RULE: Use 'image:filename' (NO extension)
            options: ['image:u3_red', 'image:u3_blue', 'image:u3_green', 'image:u3_yellow'], 
            correct: 'image:u3_red' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>', 
            audioText: 'Show me a ruler.', 
            options: ['image:u3_ruler', 'image:u3_pen', 'image:u3_pencil', 'image:u3_book'], 
            correct: 'image:u3_ruler' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose the meaning)</span>', 
            audioText: 'Here it is.', 
            options: ['A. 它在这里。', 'B. 给我看看。', 'C. 谢谢你。', 'D. 它是红色的。'], 
            correct: 'A. 它在这里。' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，判断图片正误。<br><span style="font-size:14px;color:#666">(Listen and judge: Is the picture correct?)</span>', 
            audioText: 'Show me blue, please.', 
            // RULE: Use 'filename.png' (WITH extension) for imageUri
            imageUri: 'u3_red.png', 
            options: ['✔ Right', '❌ Wrong'], 
            correct: '❌ Wrong' 
        },
        { 
            qNum: 5, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出包含的颜色单词。<br><span style="font-size:14px;color:#666">(Listen and choose the color word you hear)</span>', 
            audioText: 'My schoolbag is green.', 
            options: ['A. red', 'B. blue', 'C. green', 'D. yellow'], 
            correct: 'C. green' 
        },
        
        // ===========================
        // Part B: Reading (Target: 25 pts)
        // ===========================
        { 
            qNum: 6, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，选出正确的单词。<br><span style="font-size:14px;color:#666">(Look and choose the word)</span>', 
            imageUri: 'u3_yellow.png', 
            options: ['A. red', 'B. yellow', 'C. blue', 'D. green'], 
            correct: 'B. yellow' 
        },
        { 
            qNum: 7, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '读句子，选出正确的图片。<br><span style="font-size:14px;color:#666">(Read and choose the picture)</span>', 
            text: 'Show me a red pen.', 
            options: ['image:u3_pen_red', 'image:u3_ruler', 'image:u3_book', 'image:u3_pencil'], 
            correct: 'image:u3_pen_red' 
        },
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选出不同类的一项。<br><span style="font-size:14px;color:#666">(Find the odd one out)</span>', 
            options: ['A. red', 'B. blue', 'C. green', 'D. ruler'], 
            correct: 'D. ruler' 
        },
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '根据上句选下句。<br><span style="font-size:14px;color:#666">(Choose the response)</span>', 
            text: 'A: Show me red, please.<br>B: _______', 
            options: ['A. I’m fine.', 'B. Here it is.', 'C. Nice to meet you.', 'D. Good morning.'], 
            correct: 'B. Here it is.' 
        },
        { 
            qNum: 10, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图补全句子。<br><span style="font-size:14px;color:#666">(Complete the sentence)</span>', 
            imageUri: 'u3_blue.png', 
            text: 'It is _______.', 
            options: ['A. blue', 'B. red', 'C. black', 'D. white'], 
            correct: 'A. blue' 
        },
// 播放音频的核心函数
function playAudio(text) {
    if (!text) return;

        // ===========================
        // Part C: Writing (Target: 25 pts)
        // ===========================
        { 
            qNum: 11, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the words)</span>', 
            words: ['Show', 'me', 'red', '.', 'please'], 
            correct: 'Show me red , please .' 
        },
        { 
            qNum: 12, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the words)</span>', 
            words: ['it', 'Here', 'is', '.'], 
            correct: 'Here it is .' 
        },
        { 
            qNum: 13, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the words)</span>', 
            words: ['book', 'is', 'blue', '.', 'My'], 
            correct: 'My book is blue .' 
        },
        { 
            qNum: 14, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the words)</span>', 
            words: ['a', 'yellow', 'cat', 'is', 'It', '.'], 
            correct: 'It is a yellow cat .' 
        },
        { 
            qNum: 15, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the words)</span>', 
            words: ['me', 'green', 'Show', '.'], 
            correct: 'Show me green .' 
        }
    ]
    // 1. 停止当前正在播放的声音（防止重叠）
    if (synth.speaking) {
        synth.cancel();
    }

    // 2. 创建语音请求
    const utterance = new SpeechSynthesisUtterance(text);
    
    // 3. 设置语言 (美式英语)
    utterance.lang = 'en-US'; 
    
    // 4. 调整语速 (0.8 ~ 0.9 适合三年级学生)
    utterance.rate = 0.8; 
    
    // 5. 调整音调
    utterance.pitch = 1;

    // 6. 针对 iOS 的特殊处理 (iOS 有时需要延时触发)
    setTimeout(() => {
        synth.speak(utterance);
    }, 10);
}

// ==========================================
// 🖱️ 绑定点击事件 (重要！)
// ==========================================
// 即使代码写了，也需要用户点击喇叭图标来触发
// 假设您的 HTML 里有一个喇叭按钮 id="audioBtn"
document.addEventListener('click', function(e) {
    // 检查被点击的是不是喇叭图标 (假设类名为 .audio-icon 或 id 为 playAudio)
    if (e.target.matches('.audio-icon, #playAudio')) {
        // 获取当前题目中的 audioText
        // 注意：这里需要根据您的实际代码逻辑获取当前题目的 text
        // 例如: playAudio(currentQuestion.audioText); 
        console.log("尝试播放音频..."); 
    }
});
