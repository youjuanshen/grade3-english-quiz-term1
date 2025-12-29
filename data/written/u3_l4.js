<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Quiz Previewer (Pro)</title>
    <style>
        :root {
            --primary: #2c3e50;
            --accent: #3498db;
            --correct: #27ae60;
            --bg: #f4f6f9;
            --panel-bg: #ffffff;
        }
        body {
            font-family: 'Segoe UI', "Microsoft YaHei", sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            height: 100vh;
            background-color: var(--bg);
            overflow: hidden;
        }

        /* Left Panel: Editor */
        .editor-panel {
            width: 35%;
            background: #1e1e1e;
            color: #ddd;
            display: flex;
            flex-direction: column;
            border-right: 1px solid #444;
        }
        .panel-header {
            padding: 10px 15px;
            background: #252526;
            color: #ccc;
            font-size: 14px;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #333;
        }
        textarea {
            flex: 1;
            background: #1e1e1e;
            color: #d4d4d4;
            border: none;
            padding: 15px;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 13px;
            resize: none;
            outline: none;
            line-height: 1.5;
            white-space: pre;
        }
        /* Right Panel: Preview */
        .preview-panel {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            background-color: #f0f2f5;
        }
        .preview-controls {
            margin-bottom: 20px;
            background: white;
            padding: 10px 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            display: flex;
            align-items: center;
            gap: 15px;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        .toggle-btn {
            background: #f0f0f0;
            color: #333;
            padding: 6px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.9rem;
            border: 1px solid #ddd;
            transition: all 0.2s;
        }
        .toggle-btn.active {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }
        .run-btn {
            background: #27ae60;
            color: white;
            border: none;
            padding: 5px 15px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
        }
        .run-btn:hover { background: #219150; }

        /* Quiz Content Styles */
        #quizRenderArea {
            max-width: 900px;
            margin: 0 auto;
            width: 100%;
            padding-bottom: 50px;
        }

        /* Card Styles */
        .q-card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            border-left: 5px solid #ddd;
            transition: all 0.3s ease;
            position: relative;
        }
        .q-card.part-A { border-left-color: #3498db; } /* Listening */
        .q-card.part-B { border-left-color: #2ecc71; } /* Reading */
        .q-card.part-C { border-left-color: #f1c40f; } /* Writing */

        .q-meta {
            font-size: 0.85rem;
            color: #7f8c8d;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px dashed #eee;
            padding-bottom: 5px;
        }
        .q-text {
            font-size: 1.2rem;
            color: #2c3e50;
            margin-bottom: 15px;
            line-height: 1.4;
        }
        
        /* Specific Fields */
        .field-label {
            font-weight: bold;
            font-size: 0.8rem;
            color: #95a5a6;
            margin-right: 8px;
        }
        .audio-text { 
            color: #8e44ad; 
            font-style: italic; 
            background: #f9f0ff; 
            padding: 2px 6px; 
            border-radius: 4px; 
            cursor: pointer;
            display: inline-block;
        }
        .audio-text:hover { background: #e8daff; text-decoration: underline; }
        .audio-icon { cursor: pointer; margin-right: 5px; }

        .correct-ans { color: var(--correct); font-weight: bold; background: #e8f8f5; padding: 2px 6px; border-radius: 4px; }
        
        /* Options Grid */
        .options-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 10px;
            margin-top: 15px;
        }
        .opt-box {
            border: 1px solid #eee;
            padding: 10px;
            border-radius: 4px;
            text-align: center;
            background: #fafafa;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            min-height: 40px;
        }
        .opt-box img {
            max-width: 100px;
            max-height: 100px;
            display: block;
            margin: 0 auto 5px;
            object-fit: contain;
        }
        .img-placeholder-box {
            width: 80px;
            height: 80px;
            background: #eee;
            border: 2px dashed #ccc;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: #999;
            font-size: 10px;
            margin: 0 auto;
        }
        .img-icon { font-size: 24px; margin-bottom: 2px; }

        /* Student Mode Overrides */
        .mode-student .q-meta span:not(:first-child),
        .mode-student .audio-text-content, 
        .mode-student .correct-ans,
        .mode-student .field-label.review-only,
        .mode-student .review-only {
            display: none !important;
        }
        .mode-student .q-text { font-size: 1.4rem; font-weight: 500; }
        .mode-student .opt-box { cursor: pointer; transition: 0.2s; border: 2px solid #eee; }
        .mode-student .opt-box:hover { background: #eef2f7; border-color: #3498db; transform: translateY(-2px); }

        /* Error Message */
        .error-box {
            background: #fee;
            border: 1px solid #f99;
            color: #c00;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
            white-space: pre-wrap;
            font-family: monospace;
        }
    </style>
</head>
<body>

    <!-- LEFT: Code Editor -->
    <div class="editor-panel">
        <div class="panel-header">
            <span>JS 代码编辑器 (粘贴到此处)</span>
            <button class="run-btn" onclick="renderQuiz()">▶ 刷新预览</button>
        </div>
        <textarea id="codeInput" spellcheck="false" placeholder="在此处粘贴生成的 JS 代码..."></textarea>
    </div>

    <!-- RIGHT: Preview Area -->
    <div class="preview-panel">
        <div class="preview-controls">
            <strong>视图模式:</strong>
            <button class="toggle-btn active" onclick="setMode('review')" id="btnReview">👨‍🏫 教师审校</button>
            <button class="toggle-btn" onclick="setMode('student')" id="btnStudent">🎒 学生实战</button>
            <span style="flex:1"></span>
            <span id="quizInfo" style="color:#666; font-size:0.9rem">等待加载...</span>
        </div>

        <div id="quizRenderArea" class="mode-review"></div>
    </div>

    <script>
        // Global variables for data
        let currentData = null;

        // 1. Define global hook for user script
        // This MUST be on 'window' so the user's code can find it
        window.LOAD_QUIZ = function(data) {
            console.log("Quiz Data Received:", data);
            currentData = data;
        };

        // 2. Main Render Function
        function renderQuiz() {
            const rawCode = document.getElementById('codeInput').value;
            const container = document.getElementById('quizRenderArea');
            const info = document.getElementById('quizInfo');
            
            // Reset
            currentData = null;
            container.innerHTML = '';
            info.textContent = '处理中...';

            try {
                // A. Smart Cleanup: Remove markdown fences
                let cleanCode = rawCode
                    .replace(/```javascript/gi, '')
                    .replace(/```js/gi, '')
                    .replace(/```/g, '');

                // B. Execute Code in Global Scope
                // Using new Function(code)() allows access to real window/document
                // This enables window.speechSynthesis and document.addEventListener in user code
                const runUserScript = new Function(cleanCode);
                runUserScript();
                
                // C. Validate Data
                if (!currentData) throw new Error("代码运行成功，但未检测到 window.LOAD_QUIZ 调用。\n请检查代码格式。");

            } catch (e) {
                console.error(e);
                container.innerHTML = `<div class="error-box"><strong>❌ 代码运行错误:</strong>\n${e.name}: ${e.message}\n\n(请检查是否少复制了括号或逗号)</div>`;
                info.textContent = '加载失败';
                return;
            }

            // D. Render UI
            info.innerHTML = `<strong>${currentData.title}</strong> (共 ${currentData.questions.length} 题)`;
            
            currentData.questions.forEach((q) => {
                const card = document.createElement('div');
                card.className = `q-card part-${q.part}`;

                // --- Helper: Image Handler ---
                const getImgHtml = (val) => {
                    if (!val) return '';
                    let src = val;
                    // Handle "image:filename" legacy format
                    if (val.startsWith('image:')) {
                        src = 'img/' + val.split(':')[1] + '.png';
                    } else if (val.indexOf('.') === -1 && val.indexOf('/') === -1) {
                        src = 'img/' + val + '.png';
                    } else if (!val.includes('/')) {
                        src = 'img/' + val; 
                    }

                    return `
                        <div style="margin:5px 0">
                            <img src="${src}" style="display:block" 
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" 
                                 alt="${val}">
                            <div class="img-placeholder-box" style="display:none">
                                <span class="img-icon">🖼️</span>
                                <span>${val.replace('image:', '')}</span>
                            </div>
                        </div>
                    `;
                };

                // --- 1. Header ---
                let html = `
                    <div class="q-meta">
                        <span>
                            <strong style="font-size:1rem;margin-right:5px">#${q.qNum}</strong> 
                            <span style="color:#333;font-weight:bold">[Part ${q.part}]</span> 
                            <span style="background:#eee;padding:1px 6px;border-radius:4px;font-size:0.8em;margin-left:5px">${q.type}</span>
                        </span>
                        <span class="review-only" style="font-weight:bold;color:#2c3e50">${q.score || 5} 分</span>
                    </div>
                `;

                // --- 2. Main Question Image ---
                if (q.imageUri) {
                    html += `<div style="text-align:center; margin-bottom:10px">${getImgHtml(q.imageUri)}</div>`;
                }

                // --- 3. Text Body ---
                html += `<div class="q-text">${q.text}</div>`;

                // --- 4. Audio Script (Clickable!) ---
                if (q.audioText) {
                    // Try to use the user's playAudio function if it exists, otherwise fallback
                    const clickAttr = `onclick="if(typeof playAudio === 'function') { playAudio('${q.audioText.replace(/'/g, "\\'")}') } else { alert('Audio script loaded: ${q.audioText.replace(/'/g, "\\'")}') }"`;
                    
                    html += `<div class="review-only" style="margin-bottom:10px">
                        <span class="field-label">听力文稿 (点击播放):</span>
                        <span class="audio-text" ${clickAttr}>🔊 <span class="audio-text-content">"${q.audioText}"</span></span>
                    </div>`;
                    
                    // Add student mode audio button
                    html += `<div style="margin-bottom:10px; display:none" class="mode-student-audio">
                         <button style="padding:5px 10px; background:#8e44ad; color:white; border:none; border-radius:4px; cursor:pointer" ${clickAttr}>🔊 播放录音</button>
                    </div>`;
                }

                // --- 5. Options / Words Grid ---
                html += `<div class="options-grid">`;
                const list = q.options || q.words || [];
                list.forEach(item => {
                    let content = item;
                    if (typeof item === 'string' && item.startsWith('image:')) {
                        content = getImgHtml(item);
                    }
                    html += `<div class="opt-box">${content}</div>`;
                });
                html += `</div>`;

                // --- 6. Correct Answer (Review Only) ---
                html += `
                    <div style="margin-top:15px; padding-top:10px; border-top:1px dashed #ddd;" class="review-only">
                        <span class="field-label" style="color:#27ae60">正确答案:</span>
                        <span class="correct-ans">${q.correct}</span>
                    </div>
                `;

                card.innerHTML = html;
                
                // Hack for student mode audio button visibility
                if (q.audioText) {
                    // We inject a style rule locally if needed, or handle via class
                    // Handled via .mode-student-audio check below
                }
                
                container.appendChild(card);
            });
        }

        function setMode(mode) {
            const container = document.getElementById('quizRenderArea');
            document.getElementById('btnReview').className = mode === 'review' ? 'toggle-btn active' : 'toggle-btn';
            document.getElementById('btnStudent').className = mode === 'student' ? 'toggle-btn active' : 'toggle-btn';
            
            container.className = mode === 'review' ? 'mode-review' : 'mode-student';
            
            // Toggle Audio Buttons for student mode
            const audioBtns = document.querySelectorAll('.mode-student-audio');
            audioBtns.forEach(btn => {
                btn.style.display = mode === 'student' ? 'block' : 'none';
            });
        }

        // Auto-run if content exists
        window.onload = function() {
            if (document.getElementById('codeInput').value.trim()) {
                renderQuiz();
            }
        }
    </script>
</body>
</html>
