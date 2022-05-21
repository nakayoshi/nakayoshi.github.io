import { Actable, EndTyping, SendMessage, StartTyping } from "../domain/action"
import { MessageType, MetaMessage, OgpSize } from "../domain/message"
import { User } from "../domain/user"
import story from "../story.json"

export type TellResponse = {
  result: Actable
  nextIndex?: number
}

class StoryTeller {
  private story: Actable[]

  constructor() {
    this.story = []
  }

  know(action: Actable) {
    this.story.push(action)
  }

  async tell(index: number): Promise<TellResponse> {
    // await new Promise((resolve) => setTimeout(resolve, 800))
    if (!this.checkIndex(index)) {
      throw new Error("no index")
    }
    const action = this.story[index]
    const result = await action.act()

    if (!this.hasNext(index)) {
      return { result: result, nextIndex: undefined }
    }
    return { result: result, nextIndex: index + 1 }
  }

  checkIndex(index: number) {
    return this.story.length > index
  }

  hasNext(index: number) {
    return this.story.length - 1 > index
  }

  static fromPreparedJson() {
    const storyTeller = new StoryTeller()
    for (const action of story) {
      if (action.type === "SendMessage") {
        const message = action.message
        const user = message?.user as User
        const type = (message?.type as MessageType) ?? MetaMessage
        const ogp = message?.ogp
          ? { ...message.ogp, ...{ size: message.ogp.size as OgpSize } }
          : undefined
        storyTeller.know(
          new SendMessage({
            text: message?.text,
            userType: user,
            type: type,
            links: message?.links,
            ogp: ogp,
          })
        )
      } else if (action.type === "StartTyping") {
        const user = action.user as User
        storyTeller.know(new StartTyping(user))
      } else if (action.type === "EndTyping") {
        const user = action.user as User
        const delayed = action.delayed ?? 0
        storyTeller.know(new EndTyping(user, delayed))
      } else {
        throw new Error("invalid action")
      }
    }

    return storyTeller
  }
}

export default StoryTeller
