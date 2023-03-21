export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "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",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
- 该网站仅作为演示，不提供长期服务,请勿滥用。 
 - [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
