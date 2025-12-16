<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>U3 L3 测验数据审校 (Show me red, please.)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f0fdf4; color: #1f2937; padding: 20px; }
        .header-badge { background-color: #166534; color: white; padding: 5px 10px; border-radius: 4px; font-size: 0.8rem; vertical-align: middle; margin-left: 10px; }
        .section-header { border-bottom: 3px solid #16a34a; padding-bottom: 5px; margin-bottom: 20px; font-size: 1.5rem; font-weight: 700; color: #14532d; margin-top: 40px; }
        .question-card { background-color: #ffffff; border: 1px solid #bbf7d0; border-left: 6px solid #22c55e; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .q-meta { font-size: 0.875rem; font-weight: 600; color: #65a30d; margin-bottom: 12px; display: flex; justify-content: space-between; }
        .q-text { font-size: 1.1rem; margin-bottom: 15px; border-bottom: 1px dashed #e5e7eb; padding-bottom: 10px; color: #111827; }
        .q-answer { background-color: #f0fdf4; color: #15803d; padding: 10px; border-radius: 6px; font-weight: 700; font-size: 1rem; margin-top: 15px; border: 1px solid #86efac; display: flex; align-items: start; }
        .q-detail { font-size: 0.9rem; color: #374151; margin-bottom: 6px; background: #f9fafb; padding: 8px; border-radius: 4px; }
        .change-log { background: #fffbeb; border: 1px solid #fcd34d; padding: 15px; border-radius: 8px; margin-bottom: 30px; font-size: 0.9rem; color: #92400e; }
    </style>
</head>
<body>

<div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-extrabold text-center mb-4 text-gray-900">
        Unit 3 Lesson 3: Show me red, please.
        <span class="header-badge">审校模式</span>
    </h1>

    <div class="change-log">
        <strong>🛠️ 本次修正记录 (Correction Log):</strong>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>修正标题:</strong> 恢复为 Lesson 3 "Show me red, please."。</li>
            <li><strong>修正数据:</strong> 替换回 L3 的核心词汇 (文具+颜色) 和句型 (Show me...)。</li>
            <li><strong>题型确认:</strong> Part C 保持为“连词成句” (Drag-sort)，Part A/B 保持 Iron Rules 格式。</li>
        </ul>
    </div>

    <div id="quizContainer"></div>
</div>

<script>
    // ✅ 修正为 Unit 3 Lesson 3 的数据
    const QUIZ_DATA = [
        // ===========================
        // Part A: Listening (Target: 25 pts)
        // ===========================
        {
            qNum: 1,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出与内容描述相符的图片。<br><span style="font-size:14px;color:#666">(Listen and choose the correct picture)</span>',
            audioText: 'Show me a ruler, please. It is green.',
            // RULE: In 'options', use 'image:filename' (NO extension)
            options: ['image:u3_ruler_green', 'image:u3_pencil_red', 'image:u3_book_yellow', 'image:u3_eraser_white'],
            correct: 'image:u3_ruler_green'
        },
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出句子描述的正确意思。<br><span style="font-size:14px;color:#666">(Listen and choose the correct meaning)</span>',
            audioText: 'My pens and pencils are black.',
            options: ['A. 我的钢笔是黑色和铅笔。', 'B. 我的钢笔和铅笔是黑色的。', 'C. 我的书包是黑色的。', 'D. 给我看黑色。'],
            correct: 'B. 我的钢笔和铅笔是黑色的。'
        },
        {
            qNum: 3,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出你听到的颜色单词。<br><span style="font-size:14px;color:#666">(Listen and choose the color you hear)</span>',
            audioText: 'Show me your blue book, please.',
            options: ['A. red', 'B. green', 'C. black', 'D. blue'],
            correct: 'D. blue'
        },
        {
            qNum: 4,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，判断图片是否与音频内容相符。<br><span style="font-size:14px;color:#666">(Listen and judge the picture)</span>',
            audioText: 'This is an eraser. It’s white.',
            // RULE: In 'imageUri', use 'filename.png' (WITH extension)
            imageUri: 'u3_eraser_white.png',
            options: ['✔ (相符)', '❌ (不符)'],
            correct: '✔ (相符)'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，为问句选择正确的应答语。<br><span style="font-size:14px;color:#666">(Listen and choose the correct response)</span>',
            audioText: 'Show me red, please.',
            options: ['A. OK. Here it is.', 'B. I’m fine.', 'C. It is a pen.', 'D. Goodbye.'],
            correct: 'A. OK. Here it is.'
        },

        // ===========================
        // Part B: Reading (Target: 25 pts)
        // ===========================
        {
            qNum: 6,
            part: 'B',
            type: 'drag-match',
            score: 5,
            text: '将左侧的英文单词拖动到右侧对应的图片上。<br><span style="font-size:14px;color:#666">(Drag the English word to the matching picture)</span>',
            matches: [
                { text: 'ruler', imageUri: 'u3_ruler_blue.png' },
                { text: 'pencil box', imageUri: 'u3_pencilbox_red.png' },
                { text: 'book', imageUri: 'u3_book_yellow.png' },
                { text: 'pen', imageUri: 'u3_pen_black.png' }
            ],
            // Correct format: array of [text, imageUri] arrays
            correct: [
                ['ruler', 'u3_ruler_blue.png'],
                ['pencil box', 'u3_pencilbox_red.png'],
                ['book', 'u3_book_yellow.png'],
                ['pen', 'u3_pen_black.png']
            ]
        },
        {
            qNum: 7,
            part: 'B',
            type: 'select',
            score: 5,
            text: '看图片，选出正确的问句。<br><span style="font-size:14px;color:#666">(Look at the picture and choose the correct question)</span>',
            imageUri: 'u3_schoolbag_red.png',
            options: ['A. It’s red.', 'B. Who is he?', 'C. What color is it?', 'D. I’m fine.'],
            correct: 'C. What color is it?'
        },
        {
            qNum: 8,
            part: 'B',
            type: 'select',
            score: 5,
            text: '阅读对话，选择正确的应答。<br><span style="font-size:14px;color:#666">(Read the dialogue and choose the correct response)</span>',
            text: 'A: Show me blue, please.<br>B: ___',
            options: ['A. OK. Thank you.', 'B. Nice to meet you.', 'C. It’s blue now.', 'D. I’m fine.'],
            correct: 'A. OK. Thank you.'
        },
        {
            qNum: 9,
            part: 'B',
            type: 'select',
            score: 5,
            text: '根据图片提示，选出正确的句子。<br><span style="font-size:14px;color:#666">(Choose the correct sentence for the picture)</span>',
            imageUri: 'u3_pens_black.png',
            options: ['A. My pen is black.', 'B. My pens are black.', 'C. This is a black pen.', 'D. It’s a pen.'],
            correct: 'B. My pens are black.'
        },
        {
            qNum: 10,
            part: 'B',
            type: 'select',
            score: 5,
            text: '选择与单词 **umbrella** 对应的图片。<br><span style="font-size:14px;color:#666">(Choose the picture for the word: umbrella)</span>',
            options: ['image:u3_umbrella', 'image:u3_violin', 'image:u3_pen', 'image:u3_star'],
            correct: 'image:u3_umbrella'
        },

        // ===========================
        // Part C: Writing (Target: 25 pts)
        // ===========================
        {
            qNum: 11,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句：请拖拽组成完整句子。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>',
            words: ['me', 'red', ',', 'please', 'Show', '.'],
            correct: 'Show me red , please .'
        },
        {
            qNum: 12,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句：请拖拽组成完整句子。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>',
            words: ['my', 'book', 'is', 'blue', '.'],
            correct: 'My book is blue .'
        },
        {
            qNum: 13,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句：请拖拽组成完整句子。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>',
            words: ['schoolbag', 'My', 'is', 'red', '.'],
            correct: 'My schoolbag is red .'
        },
        {
            qNum: 14,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句：请拖拽组成完整句子。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>',
            words: ['pens', 'are', 'My', 'black', '.'],
            correct: 'My pens are black .'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句：请拖拽组成完整句子。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>',
            words: ['is', 'This', 'pencil', 'my', '.'],
            correct: 'This is my pencil .'
        }
    ];

    const partNames = {
        'A': '🎧 Part A: Listening (听力)',
        'B': '📖 Part B: Reading (阅读)',
        'C': '✍️ Part C: Writing (写作)'
    };

    const container = document.getElementById('quizContainer');
    let currentPart = '';

    QUIZ_DATA.forEach(q => {
        if (q.part !== currentPart) {
            currentPart = q.part;
            const header = document.createElement('h2');
            header.className = 'section-header';
            header.textContent = partNames[currentPart];
            container.appendChild(header);
        }

        const card = document.createElement('div');
        card.className = 'question-card';

        const meta = document.createElement('div');
        meta.className = 'q-meta';
        meta.innerHTML = `<span>Q${q.qNum}</span> <span>${q.type}</span> <span>${q.score} pts</span>`;
        card.appendChild(meta);

        const text = document.createElement('div');
        text.className = 'q-text';
        text.innerHTML = `<strong>题目：</strong> ${q.text}`;
        card.appendChild(text);

        if (q.audioText) {
            const audio = document.createElement('div');
            audio.className = 'q-detail';
            audio.innerHTML = `<strong>🔈 音频脚本:</strong> "${q.audioText}"`;
            card.appendChild(audio);
        }

        if (q.imageUri) {
            const image = document.createElement('div');
            image.className = 'q-detail';
            image.innerHTML = `<strong>🖼️ 图片:</strong> img/${q.imageUri}`;
            card.appendChild(image);
        }

        if (q.options) {
            const options = document.createElement('div');
            options.className = 'q-detail';
            options.innerHTML = `<strong>🔡 选项:</strong> ${JSON.stringify(q.options)}`;
            card.appendChild(options);
        }

        if (q.words) {
            const words = document.createElement('div');
            words.className = 'q-detail';
            words.innerHTML = `<strong>🔠 单词卡:</strong> ${JSON.stringify(q.words)}`;
            card.appendChild(words);
        }

        if (q.matches) {
            const matches = document.createElement('div');
            matches.className = 'q-detail';
            const matchDetails = q.matches.map(m => `[${m.text} ➔ ${m.imageUri}]`).join('; ');
            matches.innerHTML = `<strong>🔗 匹配对:</strong> ${matchDetails}`;
            card.appendChild(matches);
        }

        const answer = document.createElement('div');
        answer.className = 'q-answer';
        let correctDisplay = q.correct;
        if (Array.isArray(q.correct)) {
            // 美化数组显示
            correctDisplay = JSON.stringify(q.correct).replace(/,/g, ', ');
        }
        answer.innerHTML = `<span style="margin-right:8px">✅</span> <div><strong>参考答案:</strong><br><code>${correctDisplay}</code></div>`;
        card.appendChild(answer);

        container.appendChild(card);
    });
</script>
</body>
</html>
