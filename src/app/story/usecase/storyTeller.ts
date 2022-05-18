import {
  makeMetaMessage,
  makeOgpMessage,
  makeTextMessage,
  Message,
  OgpLarge,
  Others,
  Self,
} from "app/story/domain/message"

type TellResponse = {
  message: Message
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
      throw new Error("no index")
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
      makeTextMessage({
        text: "nakayoshi.danceへようこそ",
        userType: Others,
      })
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
      makeTextMessage({
        text: "うるさい　ばか",
        userType: Others,
      })
    )
    storyTeller.know(
      makeTextMessage({
        text: "もし興味があればDiscordのリンクを差し上げますが？",
        userType: Others,
      })
    )
    storyTeller.know(
      makeTextMessage({
        text: "えぇ...？別にいらないかな。",
        userType: Self,
      })
    )
    storyTeller.know(
      makeTextMessage({
        text: "https://github.com/nakayoshi/",
        userType: Others,
        links: [
          {
            linkText: "https://github.com/nakayoshi/",
            url: new URL("https://github.com/nakayoshi/"),
          },
        ],
      })
    )
    storyTeller.know(
      makeOgpMessage(Others, {
        type: OgpLarge,
        title: "なかよし",
        description: "Discordサーバー「なかよし」. なか...",
        imagePath: "/nakayoshi.jpg",
        url: "https://github.com/nakayoshi/",
      })
    )
    storyTeller.know(
      makeTextMessage({
        text: "GitHubやんけ",
        userType: Self,
      })
    )
    storyTeller.know(
      makeTextMessage({
        text: "私たちについてもっと知りたいのなら\n/about\nまた話したい時には\n/contact\nにアクセスしてください。では。",
        userType: Others,
      })
    )
    storyTeller.know(
      makeOgpMessage(Others, {
        type: OgpLarge,
        title: "About",
        description: "私たちのことを知る",
        imagePath: "/nakayoshi.jpg",
        url: "/about",
      })
    )
    storyTeller.know(
      makeOgpMessage(Others, {
        type: OgpLarge,
        title: "Contact",
        description: "話したい？",
        imagePath: "/nakayoshi.jpg",
        url: "/contact",
      })
    )
    storyTeller.know(makeMetaMessage("nakayoshi.danceがログアウトしました"))
    storyTeller.know(
      makeTextMessage({
        text: "いなくなっちゃった・・・",
        userType: Self,
      })
    )
    return storyTeller
  }
}

export default StoryTeller
