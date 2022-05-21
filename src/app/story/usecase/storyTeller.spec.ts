import { SendMessage } from "../domain/action"
import { MetaMessage } from "../domain/message"
import StoryTeller from "./storyTeller"

const storyTeller = StoryTeller.fromPreparedJson()

describe("storyTellerのテスト", () => {
  test("tell()うごく？", async () => {
    const first = await storyTeller.tell(0)
    const message = (await first.result) as SendMessage
    expect(message.message.type).toBe(MetaMessage)
  })
  test("tell()異常系", async () => {
    await expect(storyTeller.tell(999)).rejects.toThrow()
  })
})
