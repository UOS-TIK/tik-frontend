import { useEffect, useState } from "react";
import { ResumeWrapper, ResumeTitle, ResumeIntroduction } from "./style";

const ResumeContainer = (props) => {
  const { resume, setSelectedResumeId, selectedResumeId } = props;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (resume.id === selectedResumeId) {
      setSelected(true);
    } else setSelected(false);
  }, [selectedResumeId]);

  const clickResume = () => {
    if (!selected) setSelectedResumeId(resume.id);
  };

  return (
    <ResumeWrapper selected={selected} onClick={clickResume}>
      <ResumeTitle>{resume.name}</ResumeTitle>
      <ResumeIntroduction>{resume.introduction}</ResumeIntroduction>
    </ResumeWrapper>
  );
};

export default ResumeContainer;
