import { OgpInfo } from "app/story/domain/message"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  border-radius: 8px;
`

const OgpImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
`

const OgpImage = styled.img`
  border-radius: 8px 8px 0px 0px;
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const OgpText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  & :only-child {
    padding-left: 5px;
  }

  & > h4 {
    text-decoration: none;
    font-size: 14px;
    font-weight: normal;
  }
  & > span {
    font-size: 12px;
  }

  & > a {
    color: #7f93c4;
    font-size: 12px;
  }
`

type Props = {
  ogp: OgpInfo
}

export const ChatOgpMessage: React.FC<Props> = ({ ogp }) => {
  return (
    <Wrapper>
      <OgpImageContainer>
        <OgpImage src={ogp.imagePath} alt={ogp.title} />
      </OgpImageContainer>
      <OgpText>
        <h4>{ogp.title}</h4>
        <span>{ogp.description}</span>
        <a>{ogp.url}</a>
      </OgpText>
    </Wrapper>
  )
}
