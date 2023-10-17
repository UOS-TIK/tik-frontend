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
            <BannerTitle>Part 1. 어떤 면접인지 입력해 주세요</BannerTitle>
            <Description>이력서 작성 페이지를 통해 미리 작성할 수 있으며, 선택한 이력서를 바탕으로 질문이 생성됩니다.</Description>
          </ContentText>
        </ContentWrapper>
        <BannerImage src="images/ic_resume.svg" alt="resume_icon" />
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
  background: #3D4371;
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
  padding: 6px 16px;
  border: 1px solid #FFFFFF;
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
  width: 210px;
`;
