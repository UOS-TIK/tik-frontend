import { useEffect, useState } from "react";
import { ListWrapper } from "./style";
import ResumeContainer from "./ResumeContainer";

const ResumeList = (props) => {
  const { resumeList, selectedResumeId, setSelectedResumeId, setAddMode } =
    props;

  useEffect(() => {
    const firstResume = resumeList[0];
    if (firstResume) {
      setSelectedResumeId(firstResume.id);
    }
  }, [resumeList]);

  return (
    <ListWrapper>
      {resumeList.map((resume) => (
        <ResumeContainer
          key={resume.id}
          resume={resume}
          selectedResumeId={selectedResumeId}
          setSelectedResumeId={setSelectedResumeId}
        />
      ))}
    </ListWrapper>
  );
};

export default ResumeList;
