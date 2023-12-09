import { useEffect, useState } from "react";
import { ResumeWrapper, ResumeTitle, ResumeIntroduction } from "./style";

const ResumeListContainer = ({
  resume,
  setSelectedResumeId,
  selectedResumeId,
  setAddMode,
}) => {
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
      <ResumeIntroduction>
        {resume.introduction.length > 35
          ? `${resume.introduction.slice(0, 35)}...`
          : resume.introduction}
      </ResumeIntroduction>
    </ResumeWrapper>
  );
};

export default ResumeListContainer;
