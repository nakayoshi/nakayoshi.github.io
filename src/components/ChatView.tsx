import { useInfiniteQuery } from "react-query"
import { takeMessage } from "fetcher/storyTeller"
import styled from "styled-components"
import ChatMessage from "./ChatMessage"

const Wrapper = styled.ul`
  background-color: #292841;
  width: 100%;
  padding: 10px 0;
  overflow-y: scroll;
`

const ChatView = () => {
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
        return (
          <ChatMessage
            key={i}
            message={response.message}
            onMounted={() => fetchNextPage({ cancelRefetch: false })}
            isLast={!hasNextPage}
          />
        )
      })}
    </Wrapper>
  )
}

export default ChatView
