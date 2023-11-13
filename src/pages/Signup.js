import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../components/Button/Button";
import LoginInput from "../components/LoginInput/LoginInput";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    uid: "",
    password: "",
    checkPassword: "",
  });

  const passwordRegEx =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%^&*])[a-zA-Z0-9!@#\$%^&*]{8,20}$/;
  const navigate = useNavigate();

  const passwordCheck = (signupInfo) => {
    return passwordRegEx.test(signupInfo);
  };
  const checkEmptySignUpInfoValue = Object.values(signupInfo).some(
    (data) => data === ""
  );

  const handleChangeSignUpInfoInput = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickSignupButton = async () => {
    const data = {
      uid: signupInfo.uid,
      password: signupInfo.password,
      username: signupInfo.username,
    };
    try {
      const res = await axios.post("/user/signUp", data);
      console.log(res);
      if (res.status === 200) {
        alert("회원가입 성공");
        navigate("/login");
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
            TIK에 가입하시고 <br />
            기술면접을 대비해보세요!
          </ContentTitle>
          <InputWrapper>
            <LoginInput
              label="이름"
              name="username"
              value={signupInfo.username}
              onChange={handleChangeSignUpInfoInput}
            />
            <LoginInput
              label="아이디"
              name="uid"
              value={signupInfo.uid}
              onChange={handleChangeSignUpInfoInput}
            />
            <LoginInput
              label="비밀번호"
              type="password"
              name="password"
              explanation="(영문, 숫자, 특수문자를 포함한 8~20자리)"
              value={signupInfo.password}
              onChange={handleChangeSignUpInfoInput}
            />
            <LoginInput
              label="비밀번호 확인"
              type="password"
              name="checkPassword"
              value={signupInfo.checkPassword}
              onChange={handleChangeSignUpInfoInput}
            />
          </InputWrapper>
          <ButtonWrapper
            feature={ButtonFeature.NONE}
            color={ButtonColor.BLUE}
            handler={() => {
              console.log(signupInfo);
              if (checkEmptySignUpInfoValue) {
                alert("모든 항목을 채워주세요.");
                return;
              }
              if (!passwordCheck(signupInfo.password)) {
                alert(
                  "비밀번호를 형식에 맞춰 입력해주세요.\n(영문, 숫자, 특수문자를 포함한 8~20자리)"
                );
                return;
              }
              if (signupInfo.password !== signupInfo.checkPassword) {
                alert("비밀번호가 서로 다릅니다.");
                return;
              }
              handleClickSignupButton();
            }}
          >
            회원가입하기
          </ButtonWrapper>
          <SignUpPrompt>
            <div>이미 계정이 있으신가요?</div>
            <Link to="/login" style={{ color: "#1C1C1CB3" }}>
              로그인
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

export default Signup;

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
