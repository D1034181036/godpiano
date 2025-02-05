# 統神鋼琴

[https://d1034181036.github.io/godpiano](https://d1034181036.github.io/godpiano)

## 參考資料
- [靈感來源](https://www.youtube.com/watch?v=kAwXdO7XnHU)
- [素材來源](https://memes.tw/sound?q=%E7%B5%B1%E7%A5%9E)

## Today I learned
1. 使用 [mp3DirectCut](https://mpesch3.de/) 擷取音訊。
2. 使用 [FFmpeg](https://www.ffmpeg.org/) 的 LUFS 正規化調整聲音大小。
```
ffmpeg -i input.wav -af "loudnorm=I=-14:LRA=7:TP=-1" output.wav
```

### 參數解釋
`I=-14`：提升整體音量（預設是 -23 LUFS，-14 LUFS 更適合網路媒體）。
`LRA=7`：保持適當的動態範圍（可調整小一點，如 5，讓音量更穩定）。
`TP=-1`：最大瞬時峰值，確保不超過 -1dB 避免破音。
