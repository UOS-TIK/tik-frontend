import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../components/Button/Button";
import LoginInput from "../components/LoginInput/LoginInput";

const Login = () => {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClickLoginButton = async () => {
    try {
      const res = await axios.post("/user/signIn", { uid, password });
      console.log(res);
      if (res.status === 200) {
        console.log("로그인 성공");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      alert("error 발생");
    }
  };

  return (
    <MainContainer>
      <LeftContainer>
        <ContentWrapper>
          <ContentTitle>
            Teck-Interview King에서 <br />
            기술면접을 대비해보세요!
          </ContentTitle>
          <InputWrapper>
            <LoginInput
              label="아이디"
              name="uid"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
            />
            <LoginInput
              label="비밀번호"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <ButtonWrapper
            feature={ButtonFeature.NONE}
            color={ButtonColor.BLUE}
            handler={() => {
              if (!(uid && password)) {
                alert("모든 항목을 채워주세요.");
                return;
              }
              handleClickLoginButton();
            }}
          >
            로그인하기
          </ButtonWrapper>
          <SignUpPrompt>
            <div>Teck Interview King이 처음이신가요?</div>
            <Link to="/signup" style={{ color: "#1C1C1CB3" }}>
              회원가입
            </Link>
          </SignUpPrompt>
        </ContentWrapper>
        <LogoWrapper>
          <img src="images/ic_logo.svg" alt="logo" />
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
  background-color: #ffffff;
  flex-basis: 40%;
  max-width: 40%;
  height: 100vh;
  position: relative;
`;

const ContentWrapper = styled.div`
  margin: 116px 80px;
`;

const ContentTitle = styled.div`
  color: #3d4371;
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
  color: #1c1c1cb3;
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
  background: linear-gradient(rgba(61, 67, 113, 0.7), rgba(61, 67, 113, 0.7)),
    url(/images/login_img.svg);
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
  color: #ffffffd9;
`;

const MainTitle = styled.div`
  font-size: 48px;
  color: #8d99f3d9;
`;
