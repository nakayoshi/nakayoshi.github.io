import { Message } from "./message"
import { User } from "./user"

export interface Actable {
  act(): Promise<this>
}

export class SendMessage implements Actable {
  message: Message

  constructor(message: Message) {
    this.message = message
  }

  async act() {
    return this
  }
}

export class StartTyping implements Actable {
  user: User
  constructor(user: User) {
    this.user = user
  }

  async act() {
    return this
  }
}

export class EndTyping implements Actable {
  user: User
  delayed: number
  constructor(user: User, delayed: number) {
    this.user = user
    this.delayed = delayed
  }

  private async sleep() {
    await new Promise((resolve) => setTimeout(resolve, this.delayed * 1000))
  }

  async act() {
    await this.sleep()
    return this
  }
}
