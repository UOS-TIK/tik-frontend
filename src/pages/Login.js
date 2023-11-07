import styled from "styled-components";


const Login = () => {
  return (
    <MainContainer>
      <div style={{backgroundColor: "#FFFFFF", flexBasis: "40%", maxWidth: "40%", height: "100vh", position: "relative"}}>
        <div style={{margin: "180px 80px"}}>
          <div style={{color: "#3D4371", fontSize: "20px", fontWeight: "700"}}>TIK에 가입하시고 <br />기술면접을 대비해보세요!</div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <input />
              <input />
            </div> 
            <div>로그인하기</div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <div>Teck Interview King이 처음이신가요?</div>
              <div>회원가입</div>
            </div>
        </div>
        <div style={{position: "absolute", bottom: "32px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <img src="images/ic_logo.svg" alt="logo" style={{width: "50%", height: "auto"}}/>
        </div>
      </div>
      <div style={{
        display: "flex", 
        flexGrow: "1.2", 
        height: "100vh", 
        background: `linear-gradient(rgba(61, 67, 113, 0.7), rgba(61, 67, 113, 0.7)), url(/images/login_img.svg)`, 
        backgroundSize: "cover"
      }}>
        <div style={{display: "flex", flexDirection: "column", marginTop: "120px", marginLeft: "60px"}}>
          <div style={{fontSize: "30px", fontWeight: "700", color: "#FFFFFFD9"}}>기술 면접 준비는</div>
          <div style={{fontSize: "48px", color: "#8D99F3D9"}}>Tech-Interview King</div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Login;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
