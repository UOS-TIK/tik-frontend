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
            <Description>
              이력서 작성 페이지를 통해 미리 작성할 수 있으며, 선택한 이력서를
              바탕으로 질문이 생성됩니다.
            </Description>
          </ContentText>
        </ContentWrapper>
        <BannerImage src="images/ic_resume.svg" alt="resume_icon" />
      </MainBanner>
      <div style={{ display: "flex", flexDirection: "column", margin: "50px 148px" }}>
        <InterviewSettingTitle>
          면접 환경 설정
          <RightArrow src="images/ic_right_arrow.svg" alt="right_arrow_icon" />
        </InterviewSettingTitle>
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#F9FAFB", padding: "16px", border: "1px solid #0000001A", borderRadius: "20px",  maxWidth: "680px", color: "#1C1C1CB2", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", position: "relative", gap: "4px" }}>
            <div>1. 회사 이름을 입력해주세요.</div>
            <input/>
            <div style={{ display: "flex", position: "absolute", whiteSpace: "nowrap",left: "732px", gap: "6px" }}>
              <img src="/images/ic_additional_info.svg" alt="additional_info_icon" style={{width: "18px"}} />
              회사 이름은 면접 이름으로 저장됩니다.
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div>2. 직군을 선택해주세요.</div>
            <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "4px" }}
              >
                <input type={"checkbox"}></input>
                <div>프론트엔드</div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "4px" }}
              >
                <input type={"checkbox"}></input>
                <div>서버/백엔드</div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "4px" }}
              >
                <input type={"checkbox"}></input>
                <div>웹 풀스택</div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "4px" }}
              >
                <input type={"checkbox"}></input>
                <div>안드로이드</div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "4px" }}
              >
                <input type={"checkbox"}></input>
                <div>iOS</div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "4px" }}
              >
                <input type={"checkbox"}></input>
                <div>DBA</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div>3. 모집 공고문을 입력해주세요. (공백 포함 500자 이내)</div>
            <input style={{height: "80px"}}></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div>4. 제출할 이력서를 선택해주세요.</div>
            <input style={{height: "80px"}}></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div>5. 면접 질문의 개수를 선택해주세요.</div>
            <input style={{height: "80px"}}></input>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default GenerateInterview;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const MainBanner = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  background: #3d4371;
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
  border: 1px solid #ffffff;
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

const InterviewSettingTitle = styled.div`
  color: #1C1C1C;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const RightArrow = styled.img`
  width: 17px;
  margin-left: 4px;
`;
