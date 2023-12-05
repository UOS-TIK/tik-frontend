import { useEffect, useState } from "react";
import { ResumeWrapper, ResumeTitle, ResumeIntroduction } from "./style";

const ResumeListContainer = (props) => {
  const { resume, setSelectedResumeId, selectedResumeId, setAddMode } = props;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (resume.id === selectedResumeId) {
      setSelected(true);
    } else setSelected(false);
  }, [selectedResumeId]);

  const clickResume = () => {
    if (!selected) setSelectedResumeId(resume.id);
    setAddMode(false);
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <ResumeWrapper selected={selected} onClick={clickResume}>
      <ResumeTitle>{resume.name}</ResumeTitle>
      <ResumeIntroduction>{resume.introduction}</ResumeIntroduction>
    </ResumeWrapper>
  );
};

export default ResumeListContainer;
