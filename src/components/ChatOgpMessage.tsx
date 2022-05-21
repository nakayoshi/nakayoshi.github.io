import { Large, OgpInfo } from "app/story/domain/message"
import Link from "next/link"
import styled from "styled-components"

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;

  & {
    box-shadow: 2px 2px 4px #000;
  }
`

const OgpImageContainer = styled.div`
  width: 100%;
  height: 140px;
`

const OgpImage = styled.img`
  border-radius: 8px 8px 0px 0px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const OgpText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  & > h4 {
    text-decoration: none;
    font-size: 14px;
    font-weight: normal;
    padding-bottom: 5px;
    text-align: left;
    color: #000;
  }
  & > span {
    font-size: 12px;
    text-align: left;
    color: #000;
  }

  & > :last-child {
    color: rgba(0, 0, 0, 0.4);
  }
`

const SmallWrapper = styled.div`
  display: flex;
  height: 110px;
  width: 100%;
  & {
    box-shadow: 2px 2px 4px #000;
  }
`

const SmallOgpText = styled.div`
  width: 70%;
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
    padding-bottom: 10px;
  }
  & > span {
    font-size: 12px;
  }

  & > :last-child {
    color: rgba(0, 0, 0, 0.4);
  }
`

const SmallImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    height: 80px;
    width: 80px;
    padding: 10px;
  }

  img {
    border-radius: 8px;
  }
`

type Props = {
  ogp: OgpInfo
}

export const ChatOgpMessage: React.FC<Props> = ({ ogp }) => {
  if (ogp.size === Large) {
    return (
      <Link href={ogp.url}>
        <Wrapper>
          <OgpImageContainer>
            <OgpImage src={ogp.imagePath} alt={ogp.title} />
          </OgpImageContainer>
          <OgpText>
            <h4>{ogp.title}</h4>
            <span>{ogp.description}</span>
            <span>{ogp.url}</span>
          </OgpText>
        </Wrapper>
      </Link>
    )
  } else {
    return (
      <Link href={ogp.url}>
        <SmallWrapper>
          <SmallOgpText>
            <h4>{ogp.title}</h4>
            <span>{ogp.description}</span>
            <a>{ogp.url}</a>
          </SmallOgpText>
          <SmallImageContainer>
            <div>
              <OgpImage src={ogp.imagePath} alt={ogp.title} />
            </div>
          </SmallImageContainer>
        </SmallWrapper>
      </Link>
    )
  }
}
