// Copyright (c) 2022 sh1ma
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import StoryTeller from "app/story/usecase/storyTeller"

const storyTeller = StoryTeller.fromPrepared()

export const takePassage = async (index: number) => {
  const result = await storyTeller.tell(index)
  return result
}
