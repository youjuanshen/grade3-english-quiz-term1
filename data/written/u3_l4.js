<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unit 3 Lesson 4 智能预览器</title>
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
        .audio-text { color: #8e44ad; font-style: italic; background: #f9f0ff; padding: 2px 6px; border-radius: 4px; }
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
        /* Image Placeholder for preview */
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
        .mode-student .audio-text, 
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
        <!-- Pre-filled with the generated code -->
        <textarea id="codeInput" spellcheck="false" placeholder="在此处粘贴生成的 JS 代码...">/**
 * Unit 3 Lesson 4: Colors & Flowers
 * File: data/written/u3_l4.js
 * Target: Grade 3 Minjiao Edition
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 4: Colors & Flowers",
    timeLimit: 540, // 9 minutes

    // ⛔️ DO NOT ADD 'images: {}' MAPPING HERE!

    questions: [
        // ===========================
        // Part A: Listening (Target: 25 pts)
        // ===========================
        { 
            qNum: 1, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的花朵。<br><span style="font-size:14px;color:#666">(Listen and choose the flower)</span>', 
            audioText: 'It’s a red flower.', 
            // RULE: In 'options', use 'image:filename' (NO extension)
            options: ['image:u3_flower_red', 'image:u3_flower_blue', 'image:u3_flower_yellow', 'image:u3_flower_green'], 
            correct: 'image:u3_flower_red' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的颜色。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>', 
            audioText: 'I like the blue flower.', 
            options: ['image:u3_flower_orange', 'image:u3_flower_blue', 'image:u3_flower_red', 'image:u3_flower_yellow'], 
            correct: 'image:u3_flower_blue' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>', 
            audioText: 'It is yellow.', 
            options: ['image:u3_flower_green', 'image:u3_flower_red', 'image:u3_flower_yellow', 'image:u3_flower_blue'], 
            correct: 'image:u3_flower_yellow' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，判断颜色是否正确。<br><span style="font-size:14px;color:#666">(Listen and judge)</span>', 
            // RULE: In 'imageUri', use 'filename.png' (WITH extension)
            imageUri: 'u3_flower_green.png',
            audioText: 'It is a green flower.', 
            options: ['True (对)', 'False (错)'], 
            correct: 'True (对)' 
        },
        { 
            qNum: 5, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出听到的单词。<br><span style="font-size:14px;color:#666">(Listen and choose the word)</span>', 
            audioText: 'Orange.', 
            imageUri: 'u3_flower_orange.png',
            options: ['A. red', 'B. orange', 'C. green', 'D. blue'], 
            correct: 'B. orange' 
        },
        
        // ===========================
        // Part B: Reading (Target: 25 pts)
        // ===========================
        { 
            qNum: 6, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，选出正确的短语。<br><span style="font-size:14px;color:#666">(Look and choose)</span>', 
            imageUri: 'u3_flower_red.png', 
            options: ['A. a yellow flower', 'B. a red flower', 'C. a blue flower', 'D. a green flower'], 
            correct: 'B. a red flower' 
        },
        { 
            qNum: 7, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，选出对应的颜色单词。<br><span style="font-size:14px;color:#666">(Look and choose the color)</span>', 
            imageUri: 'u3_flower_blue.png', 
            options: ['A. blue', 'B. black', 'C. banana', 'D. boy'], 
            correct: 'A. blue' 
        },
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '读句子，选出正确的图片。<br><span style="font-size:14px;color:#666">(Read and choose)</span>', 
            // Note: Question text implies reading, no audio needed
            text: '<b>It is an orange flower.</b>', 
            options: ['image:u3_flower_red', 'image:u3_flower_orange', 'image:u3_flower_blue', 'image:u3_flower_green'], 
            correct: 'image:u3_flower_orange' 
        },
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，判断句子对错。<br><span style="font-size:14px;color:#666">(True or False)</span>', 
            imageUri: 'u3_flower_yellow.png', 
            text: 'The flower is red.', 
            options: ['True (对)', 'False (错)'], 
            correct: 'False (错)' 
        },
        { 
            qNum: 10, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选出不同类的一项。<br><span style="font-size:14px;color:#666">(Find the odd one out)</span>', 
            options: ['A. red', 'B. blue', 'C. flower', 'D. green'], 
            correct: 'C. flower' 
        },
        
        // ===========================
        // Part C: Writing (Target: 25 pts)
        // ===========================
        { 
            qNum: 11, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>', 
            imageUri: 'u3_flower_red.png',
            words: ['red', 'flower', '.', 'It’s', 'a'], // Scrambled
            correct: 'It’s a red flower .' 
        },
        { 
            qNum: 12, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            imageUri: 'u3_flower_green.png',
            words: ['green', 'It', '.', 'is'], // Scrambled
            correct: 'It is green .' 
        },
        { 
            qNum: 13, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '排列字母，拼写颜色单词。<br><span style="font-size:14px;color:#666">(Spell the word)</span>', 
            imageUri: 'u3_flower_blue.png',
            words: ['u', 'e', 'b', 'l'], // Scrambled
            correct: 'b l u e' 
        },
        { 
            qNum: 14, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            words: ['color', 'it', '?', 'is', 'What'], // Scrambled
            correct: 'What color is it ?' 
        },
        { 
            qNum: 15, 
            part: 'C', 
            type: 'fill', 
            score: 5,
            text: '看图，补全单词。<br><span style="font-size:14px;color:#666">(Complete the word: y_ll_w)</span>', 
            imageUri: 'u3_flower_yellow.png',
            text: 'It is a y __ __ __ __ w flower.',
            correct: 'yellow' 
        }
    ]
});</textarea>
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
        // Initialize logic
        let currentData = null;

        // Mock window environment
        const mockWindow = {
            LOAD_QUIZ: function(data) {
                currentData = data;
            }
        };

        function renderQuiz() {
            const rawCode = document.getElementById('codeInput').value;
            const container = document.getElementById('quizRenderArea');
            const info = document.getElementById('quizInfo');
            
            // Clear previous
            currentData = null;
            container.innerHTML = '';
            info.textContent = '处理中...';

            try {
                // 1. SMART CLEANUP: Remove markdown code fences if pasted
                let cleanCode = rawCode
                    .replace(/```javascript/gi, '') // Remove start fence
                    .replace(/```js/gi, '')         // Remove shorthand fence
                    .replace(/```/g, '');           // Remove end fence
                
                // 2. Execute Code safely
                const safeRunner = new Function('window', cleanCode);
                safeRunner(mockWindow);
                
                if (!currentData) throw new Error("代码格式正确，但未找到数据。\n请确保代码中包含: window.LOAD_QUIZ({ ... })");

            } catch (e) {
                container.innerHTML = `<div class="error-box"><strong>❌ 代码解析错误:</strong><br>${e.message}<br><br>建议：请只复制 window.LOAD_QUIZ 开始的部分，或者直接把 Markdown 符号删掉。</div>`;
                info.textContent = '加载失败';
                return;
            }

            // 3. Render Success
            info.innerHTML = `<strong>${currentData.title}</strong> (共 ${currentData.questions.length} 题)`;
            
            currentData.questions.forEach((q) => {
                const card = document.createElement('div');
                card.className = `q-card part-${q.part}`;

                // --- Helper: Generate Image HTML (with fallback placeholder) ---
                const getImgHtml = (val) => {
                    if (!val) return '';
                    let src = val;
                    // Normalize "image:filename" -> "img/filename.png"
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

                // --- 4. Audio Script (Review Only) ---
                if (q.audioText) {
                    html += `<div class="review-only" style="margin-bottom:10px">
                        <span class="field-label">听力文稿:</span>
                        <span class="audio-text">🔊 "${q.audioText}"</span>
                    </div>`;
                }

                // --- 5. Options / Words Grid ---
                html += `<div class="options-grid">`;
                const list = q.options || q.words || [];
                list.forEach(item => {
                    let content = item;
                    // Check if option is image-based
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
                container.appendChild(card);
            });
        }

        function setMode(mode) {
            const container = document.getElementById('quizRenderArea');
            document.getElementById('btnReview').className = mode === 'review' ? 'toggle-btn active' : 'toggle-btn';
            document.getElementById('btnStudent').className = mode === 'student' ? 'toggle-btn active' : 'toggle-btn';
            
            container.className = mode === 'review' ? 'mode-review' : 'mode-student';
        }

        // Auto-run on load
        window.onload = function() {
            renderQuiz();
        }
    </script>
</body>
</html>
