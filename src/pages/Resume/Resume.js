import { useEffect, useState } from "react";
import api from "../../api/api";
import Header from "../../components/Header";
import MainBanner from "../../components/MainBanner/MainBanner";
import Button, { ButtonFeature } from "../../components/Button/Button";
import ImageText, {
  ImageTextColor,
} from "../../components/ImageText/ImageText";
import {
  MainContainer,
  ContentContainer,
  TitleWrapper,
  InterviewSettingTitle,
  RightArrow,
  WhiteBoxContainer,
} from "./style";
import BlackScreen from "../../components/BlackScren/BlackScren";
import Modal from "../../components/Modal/Modal";
import ResumeForm from "./ResumeForm";
import ResumeList from "./ResumeList";
import StackSearch from "./StackSearch";
import ResumeContainer from "./ResumeContainer";

const Resume = () => {
  //mode
  const [addMode, setAddMode] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  //variable
  const [resumeList, setResumeList] = useState([]);
  const [selectedResumeId, setSelectedResumeId] = useState(0);

  useEffect(() => {
    getResumeList();
  }, []);

  useEffect(() => {
    console.log("modalOn", modalOn);
    console.log("음");
  }, [modalOn]);

  const getResumeList = async () => {
    try {
      const res = await api.get("/resume");
      if (res.status === 200) {
        setResumeList(res.data.data);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) alert(e.response.data.data);
    }
  };

  function onClickAddButton() {
    setAddMode(true);
    setSelectedResumeId(0);
  }

  return (
    <MainContainer>
      {modalOn && (
        <>
          <Modal>
            <StackSearch setModalOn={setModalOn} />
          </Modal>
          <BlackScreen ModalOn={modalOn} onClick={() => setModalOn(false)} />
        </>
      )}
      <Header />
      <MainBanner
        badgeText="이력서 간편 입력"
        badgeType="filled"
        title="자신의 이력서를 정리해 보세요!"
        description="면접 생성 시 입력한 이력서를 기반으로 면접 질문이 생성됩니다."
        imageUrl="images/ic_resume.svg"
        bgColor="#8D99F3"
      />
      <ContentContainer>
        <div style={{ width: "400px", marginBottom: "20px" }}>
          <TitleWrapper>
            <InterviewSettingTitle>
              나의 이력서
              <RightArrow
                src="images/ic_right_arrow.svg"
                alt="right_arrow_icon"
              />
            </InterviewSettingTitle>
            <Button feature={ButtonFeature.FLEXIBLE} handler={onClickAddButton}>
              이력서 추가
            </Button>
          </TitleWrapper>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "80px" }}>
          <ResumeList
            resumeList={resumeList}
            selectedResumeId={selectedResumeId}
            setSelectedResumeId={setSelectedResumeId}
            setAddMode={setAddMode}
          />
          <WhiteBoxContainer>
            {resumeList.length === 0 && !addMode ? (
              <ImageText
                imageUrl="images/ic_resume.svg"
                color={ImageTextColor.BLUE}
              >
                조회할 이력서가 없습니다.
                <br />
                이력서를 추가해주세요.
              </ImageText>
            ) : selectedResumeId === 0 ? (
              <ResumeForm
                setResumeList={setResumeList}
                setModalOn={setModalOn}
              />
            ) : (
              <ResumeContainer selectedResumeId={selectedResumeId} />
            )}
          </WhiteBoxContainer>
        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default Resume;
