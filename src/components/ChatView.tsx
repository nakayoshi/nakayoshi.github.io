import { useInfiniteQuery } from "react-query"
import { takeMessage } from "fetcher/storyTeller"
import styled from "styled-components"
import ChatMessage, { MessageBaloon, MessageWrapper } from "./ChatMessage"
import Typing from "./Typing"
import { EndTyping, SendMessage, StartTyping } from "app/story/domain/action"
import { Others } from "app/story/domain/user"

const Wrapper = styled.ul`
  background-color: #292841;
  width: 100%;
  padding: 10px 0;
  overflow-y: scroll;
`

const ChatView = () => {
  // const [isOthersTyping, setIsOthersTyping] = useState(false)

  // const endTyping = useCallback(() => {
  //   setIsOthersTyping(false)
  // }, [])

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "chats",
    ({ pageParam = 0 }) => takeMessage(pageParam),
    {
      getNextPageParam: (lastData) => lastData.nextIndex || undefined,
    }
  )

  return (
    <Wrapper>
      {data?.pages.map((response, i) => {
        console.log(response)
        if (response.result instanceof SendMessage) {
          return (
            <ChatMessage
              key={i}
              message={response.result.message}
              onMounted={() => fetchNextPage()}
              isLast={!hasNextPage}
            />
          )
        } else if (response.result instanceof StartTyping) {
          if (response.result.user === Others && data?.pages.length === i + 1) {
            return (
              <MessageWrapper key={i} userType={Others}>
                <MessageBaloon>
                  <Typing isTyping={true} />
                </MessageBaloon>
              </MessageWrapper>
            )
          }
        } else if (response.result instanceof EndTyping) {
          // endTyping()
          return
        }
      })}
    </Wrapper>
  )
}

export default ChatView
