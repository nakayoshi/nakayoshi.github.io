import {
  makeMetaMessage,
  makeTextMessage,
  Message,
  Others,
  Self,
} from "app/story/domain/message"

type TellResponse = {
  message?: Message
  nextIndex?: number
}

class StoryTeller {
  private story: Message[]

  constructor() {
    this.story = []
  }

  know(message: Message) {
    this.story.push(message)
  }

  async tell(index: number): Promise<TellResponse> {
    await new Promise((resolve) => setTimeout(resolve, 800))
    if (!this.checkIndex(index)) {
      return { message: undefined, nextIndex: undefined }
    }
    const message = this.story[index]

    if (!this.hasNext(index)) {
      return { message: message, nextIndex: undefined }
    }
    return { message: message, nextIndex: index + 1 }
  }

  checkIndex(index: number) {
    return this.story.length > index
  }

  hasNext(index: number) {
    return this.story.length - 1 > index
  }

  static fromPrepared() {
    const storyTeller = new StoryTeller()

    storyTeller.know(makeMetaMessage("nakayoshi.danceがログインしました"))
    storyTeller.know(makeMetaMessage("訪問者がログインしました"))
    storyTeller.know(
      makeTextMessage({ text: "nakayoshi.danceへようこそ", userType: Others })
    )
    storyTeller.know(
      makeTextMessage({
        text: "え、だれ？",
        userType: Self,
      })
    )
    storyTeller.know(
      makeTextMessage({
        text: "私たちは私たちのことを団体であるとは考えていません",
        userType: Others,
      })
    )
    storyTeller.know(
      makeTextMessage({
        text: "あくまで個人間のネットワークなのです",
        userType: Others,
      })
    )
    storyTeller.know(
      makeTextMessage({
        text: "それを団体っていうんじゃないの？",
        userType: Self,
      })
    )
    storyTeller.know(
      makeTextMessage({ text: "うるさい　ばか", userType: Others })
    )
    storyTeller.know(
      makeTextMessage({
        text: "もし興味があればDiscordのリンクを差し上げますが？",
        userType: Others,
      })
    )
    storyTeller.know(
      makeTextMessage({
        text: "もし興味があればDiscordのリンクを差し上げますが？",
        userType: Others,
      })
    )
    return storyTeller
  }
}

export default StoryTeller
