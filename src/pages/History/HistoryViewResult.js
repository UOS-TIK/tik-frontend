import Content from "./Content";
import { LabelStyle, ItemContainer, MainLabelStyle } from "./style";

const HistoryViewResult = ({ history }) => {
  const { minutes, seconds } = getTimeDifference(
    history.beginTime,
    history.endTime
  );

  function getTimeDifference(beginTime, endTime) {
    const start = new Date(beginTime);
    const end = new Date(endTime);

    const difference = Math.abs(end - start) / 1000;

    const minutes = Math.floor(difference / 60);
    const seconds = Math.floor(difference % 60);

    return { minutes, seconds };
  }

  return (
    <Content label="결과">
      <ItemContainer>
        <LabelStyle>
          ✅ 소요 시간:{" "}
          <MainLabelStyle>
            {minutes}분 {seconds}초
          </MainLabelStyle>
        </LabelStyle>
      </ItemContainer>
      <ItemContainer>
        <LabelStyle>
          ✅ 평가 점수: <MainLabelStyle>{history.score}/100</MainLabelStyle>
        </LabelStyle>
      </ItemContainer>
      <ItemContainer>
        <LabelStyle>
          ✅ 한 줄 평: <MainLabelStyle>"{history.comment}"</MainLabelStyle>
        </LabelStyle>
      </ItemContainer>
    </Content>
  );
};

export default HistoryViewResult;
