import { Message, MetaMessage } from "../domain/message"
import StoryTeller, { SendMessage } from "./storyTeller"

const storyTeller = StoryTeller.fromPrepared()

describe("storyTellerのテスト", () => {
  test("tell()うごく？", async () => {
    const first = await storyTeller.tell(0)
    expect(first.action.type).toBe(SendMessage)
    const action = first.action as {
      type: typeof SendMessage
      message: Message
    }
    expect(action.message.type).toBe(MetaMessage)
  })
  test("tell()異常系", async () => {
    await expect(storyTeller.tell(999)).rejects.toThrow()
  })
})
