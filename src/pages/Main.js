import styled from "styled-components";
import Header from "../components/Header";

const Main = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <Header />
      <MainBanner>
        <div style={{display: "flex", flexDirection: "column", gap: "16px", marginTop: "40px"}}>
          <div style={{width: "fit-content", color: "#FFFFFFCC", backgroundColor: "#3D4371", padding: "6px 8px", borderRadius: "7px", fontSize: "15px", fontWeight: "700"}}>실제 면접과 유사</div>
          <div style={{color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px"}}>
            <div style={{fontSize: "25px", fontWeight: "800"}}>AI 면접관의 목소리를 들어보세요!</div>
            <div style={{fontSize: "17px"}}>면접관과 목소리로 대화하며 면접 실전 감각을 기를 수 있습니다.</div>
          </div>
        </div>
        <img src="images/banner_img.svg" alt="banner_img"/>
      </MainBanner>
    </div>
  );
};

export default Main;

const MainBanner = styled.div`
  display: flex;
  justify-content: space-around;
  background: #8D99F3;
  width: 100%;
  height: 300px;
`;