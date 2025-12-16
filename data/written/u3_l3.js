// ==========================================
// 🔊 音频播放引擎 (Text-to-Speech Engine)
// ==========================================

const synth = window.speechSynthesis;

// 播放音频的核心函数
function playAudio(text) {
    if (!text) return;

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
