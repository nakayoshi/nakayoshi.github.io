import { TextMessage } from "../domain/message"
import StoryTeller from "./storyTeller"

const storyTeller = StoryTeller.fromPrepared()

describe("storyTellerのテスト", () => {
  test("tell()うごく？", async () => {
    expect((await storyTeller.tell(0)).message.text).toBe(
      "nakayoshi.danceがログインしました"
    )
    expect((await storyTeller.tell(3)).message.type).toBe(TextMessage)
  })
  test("tell()異常系", async () => {
    await expect(storyTeller.tell(999)).rejects.toThrow()
  })
})
