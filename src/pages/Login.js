import styled from "styled-components";
import Button, { Color, Feature } from "../components/Button/Button";
import LoginInput from "../components/LoginInput/LoginInput";

const Login = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <ContentWrapper>
          <ContentTitle>TIK에 가입하시고 <br />기술면접을 대비해보세요!</ContentTitle>
            <InputWrapper>
              <LoginInput label="아이디" />
              <LoginInput label="비밀번호" type="password"/>
            </InputWrapper> 
            <ButtonWrapper feature={Feature.NONE} color={Color.BLUE}>로그인하기</ButtonWrapper>
            <SignUpPrompt>
              <div>Teck Interview King이 처음이신가요?</div>
              <div>회원가입</div>
            </SignUpPrompt>
        </ContentWrapper>
        <LogoWrapper>
          <img src="images/ic_logo.svg" alt="logo"/>
        </LogoWrapper>
      </LeftContainer>
      <RightContainer>
        <RightContentWrapper>
          <Subtitle>기술 면접 준비는</Subtitle>
          <MainTitle>Tech-Interview King</MainTitle>
        </RightContentWrapper>
      </RightContainer>
    </MainContainer>
  );
};

export default Login;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  background-color: #FFFFFF;
  flex-basis: 40%;
  max-width: 40%;
  height: 100vh;
  position: relative;
`;

const ContentWrapper = styled.div`
  margin: 116px 80px;
`;

const ContentTitle = styled.div`
  color: #3D4371;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
`;

const ButtonWrapper = styled(Button)`
  margin-top: 12px;
`;

const SignUpPrompt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #1C1C1CB3;
  font-size: 14px;
  margin-top: 12px;
`;

const LogoWrapper = styled.div`
  position: absolute;
  bottom: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    height: auto;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-grow: 1.2;
  height: 100vh;
  background: linear-gradient(rgba(61, 67, 113, 0.7), rgba(61, 67, 113, 0.7)), url(/images/login_img.svg);
  background-size: cover;
`;

const RightContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 136px;
  margin-left: 60px;
`;

const Subtitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #FFFFFFD9;
`;

const MainTitle = styled.div`
  font-size: 48px;
  color: #8D99F3D9;
`;