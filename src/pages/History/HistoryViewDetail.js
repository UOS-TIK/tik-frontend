import { useEffect, useState } from "react";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../../components/Button/Button";
import Modal, { ModalSize } from "../../components/Modal/Modal";
import BackScreen from "../../components/BackScreen/BackScreen";
import Content from "./Content";
import JobDescription from "./JobDescription";
import ResumeView from "../Resume/ResumeView";
import {
  HistoryTextStyle,
  LabelStyle,
  ItemContainer,
  MainLabelStyle,
  ModalScroll,
} from "./style";

const HistoryViewDetail = ({ history }) => {
  const [jobModalOn, setJobModalOn] = useState(false);
  const [resumeModalOn, setResumeModalOn] = useState(false);

  return (
    <Content label="면접 상세 정보">
      {jobModalOn && (
        <>
          <Modal
            size={ModalSize.SMALL}
            title="입력한 모집 공고문"
            closeFunc={setJobModalOn}
          >
            <JobDescription
              setModalOn={setJobModalOn}
              jobDescription={history.jobDescription}
            />
          </Modal>
          <BackScreen
            ModalOn={jobModalOn}
            onClick={() => setJobModalOn(false)}
          />
        </>
      )}
      {resumeModalOn && (
        <>
          <Modal
            size={ModalSize.BIG}
            title="선택한 이력서"
            closeFunc={setResumeModalOn}
          >
            <ModalScroll>
              <ResumeView
                setModalOn={setResumeModalOn}
                selectedResumeId={history.resume}
              />
            </ModalScroll>
          </Modal>
          <BackScreen
            ModalOn={resumeModalOn}
            onClick={() => setResumeModalOn(false)}
          />
        </>
      )}
      <ItemContainer>
        <LabelStyle>
          ✅ 회사 이름: <MainLabelStyle>{history.interviewName}</MainLabelStyle>
        </LabelStyle>
      </ItemContainer>
      <ItemContainer>
        <LabelStyle>
          ✅ 직군: <MainLabelStyle>{history.occupation}</MainLabelStyle>
        </LabelStyle>
      </ItemContainer>
      <ItemContainer>
        <LabelStyle>
          ✅ 입력한 모집 공고문:{" "}
          <Button
            feature={ButtonFeature.FLEXIBLE}
            handler={() => setJobModalOn(true)}
          >
            공고문 보기
          </Button>
        </LabelStyle>
      </ItemContainer>
      <ItemContainer>
        <LabelStyle>
          ✅ 입력한 이력서:{" "}
          <Button
            feature={ButtonFeature.FLEXIBLE}
            handler={() => setResumeModalOn(true)}
          >
            이력서 보기
          </Button>
        </LabelStyle>
      </ItemContainer>
      <ItemContainer>
        <LabelStyle>
          ✅ 이력서 기반 질문 개수:{" "}
          <MainLabelStyle>{history.resumeQuestion}</MainLabelStyle> 개 / CS 기반
          질문 개수: <MainLabelStyle>{history.csQuestion}</MainLabelStyle> 개 /
          모집 공고 기반 질문 개수:{" "}
          <MainLabelStyle>{history.jdQuestion}</MainLabelStyle> 개
        </LabelStyle>
      </ItemContainer>
    </Content>
  );
};

export default HistoryViewDetail;
