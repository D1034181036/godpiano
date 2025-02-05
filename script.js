const notes = {
    '01': new Audio('sounds/01.mp3'),
    '02': new Audio('sounds/02.mp3'),
    '03': new Audio('sounds/03.mp3'),
    '04': new Audio('sounds/04.mp3'),
    '05': new Audio('sounds/05.mp3'),
    '06': new Audio('sounds/06.mp3'),
    '07': new Audio('sounds/07.mp3'),
};

// 處理滑鼠事件
document.querySelectorAll('.white-key, .black-key').forEach(key => {
    key.addEventListener('mousedown', () => playNote(key));
    key.addEventListener('mouseup', () => stopNote(key));
    key.addEventListener('mouseleave', () => stopNote(key));

    // 處理手機點擊事件
    key.addEventListener('touchstart', (e) => {
        e.preventDefault(); // 防止手機長按彈出選單
        playNote(key);
    });
    key.addEventListener('touchend', () => stopNote(key));
});

// 處理鍵盤 keydown 事件
document.addEventListener('keydown', e => {
    if (e.repeat) return;
    const keys = document.querySelectorAll(`.white-key[data-key="${e.keyCode}"], .black-key[data-key="${e.keyCode}"]`);
    keys.forEach(key => playNote(key));
});

// 處理鍵盤 keyup 事件
document.addEventListener('keyup', e => {
    if (e.repeat) return;
    const keys = document.querySelectorAll(`.white-key[data-key="${e.keyCode}"], .black-key[data-key="${e.keyCode}"]`);
    keys.forEach(key => stopNote(key));
});

// 播放聲音檔 & 新增 active 樣式
function playNote(key) {
    const note = key.dataset.note;
    key.classList.add('active');
    notes[note].currentTime = 0;
    notes[note].play();
}

// 移除 active 樣式
function stopNote(key) {
    key.classList.remove('active');
}