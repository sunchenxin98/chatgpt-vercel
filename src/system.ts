export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "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",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
API Key 由我自己免费提供，注意不要滥用。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
