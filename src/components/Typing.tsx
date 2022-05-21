import styled, { keyframes } from "styled-components"

const blink = keyframes`
  0% {
    opacity: 20%;
  }
  25% {
    opacity: 50%;
  }
  50% {
    opacity: 100%;
  }
  75% {
    opacity: 50%;
  }
  100% {
    opacity: 20%;
  }
`

const TypingCircle = styled.div<{ delay?: number }>`
  opacity: 20;
  animation: ${blink} 0.8s infinite;
  animation-delay: ${(props) => (props.delay ? props.delay : 0)}ms;
  height: 12px;
  width: 12px;
  margin: 0 2px;
  border-radius: 50%;
  background-color: #7d7d7d;
`

const Wrapper = styled.div`
  display: flex;
`

type Props = {
  isTyping: boolean
}

const Typing: React.FC<Props> = ({ isTyping }) => {
  if (isTyping) {
    return (
      <Wrapper>
        <TypingCircle />
        <TypingCircle delay={200} />
        <TypingCircle delay={400} />
      </Wrapper>
    )
  }
  return <div />
}

export default Typing
