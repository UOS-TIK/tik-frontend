import styled from "styled-components";
import Header from "../components/Header";

const GenerateInterview = () => {
  return (
    <MainContainer>
      <Header />
      <MainBanner>
        <ContentWrapper>
          <StyledBadge>모의면접 생성</StyledBadge>
          <ContentText>
            <BannerTitle>Part 1. </BannerTitle>
            <Description>면접관과 목소리로 대화하며 면접 실전 감각을 기를 수 있습니다.</Description>
          </ContentText>
        </ContentWrapper>
        <BannerImage src="images/banner_img.svg" alt="banner_img" />
      </MainBanner>
    </MainContainer>
  );
};

export default GenerateInterview;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F9FAFB;
  height: 100vh;
`;

const MainBanner = styled.div`
  display: flex;
  justify-content: space-around;
  background: #8d99f3;
  width: 100%;
  height: 300px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`;

const StyledBadge = styled.div`
  width: fit-content;
  color: #ffffffcc;
  background-color: #3d4371;
  padding: 6px 8px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 700;
`;

const ContentText = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BannerTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
`;

const Description = styled.div`
  font-size: 17px;
`;

const BannerImage = styled.img`
  width: 265px;
`;
