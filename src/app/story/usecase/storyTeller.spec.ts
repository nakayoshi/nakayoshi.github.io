import StoryTeller from "./storyTeller"

const storyTeller = StoryTeller.fromPrepared()

describe("storyTellerのテスト", () => {
  test("tell()", async () => {
    expect(await (await storyTeller.tell(0)).text).toBe(
      "nakayoshi.danceがログインしました"
    )
  })
})
