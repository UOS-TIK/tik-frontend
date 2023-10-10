import styled from "styled-components";

const InterviewHistoryItem = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#FFFFFF",
        border: "1px solid #0000001A",
        borderRadius: "20px",
        maxWidth: "340px",
        padding: "24px",
        gap: "8px",
      }}
    >
      <DocumentIcon src="images/ic_document.svg" alt="document_icon" />
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ marginTop: "8px", fontSize: "18px", fontWeight: "700" }}>
          네이버 (1)
        </div>
        <div>
          <div style={{display: "flex", flexDirection: "row", gap: "4px",color: "#3D437166"}}>
            <img src="images/ic_clock.svg" alt="clock_icon"/>
            <div>12분 34초</div>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "4px", color: "#3D437166"}}>
            <img src="images/ic_score.svg" alt="score_icon"/>
            <div>50 / 100</div>
          </div>
        </div>
        <div style={{color: "#3D4371B2", fontWeight: "700"}}>
          “아는 것은 많았지만 말은 많이 더듬어서 전체적으로 이상했던 면접“
        </div>
        <div style={{display: "flex", gap: "8px"}}>
          <div style={{backgroundColor: "#F9FAFB", padding: "4px 8px", border: "1px solid #0000001A", borderRadius: "10px", color: "#3D437199", fontWeight: "700"}}>Java</div>
          <div style={{backgroundColor: "#F9FAFB", padding: "4px 8px", border: "1px solid #0000001A", borderRadius: "10px", color: "#3D437199", fontWeight: "700"}}>JavaScript</div>
        </div>
        <div style={{ marginTop: "4px", color: "#3D437180", textAlign: "right", fontSize: "14px"}}>2023/10/04(수) 17:45</div>
      </div>
    </div>
  );
};

const DocumentIcon = styled.img`
  width: 48px;
  align-self: flex-start;
`;


export default InterviewHistoryItem;
