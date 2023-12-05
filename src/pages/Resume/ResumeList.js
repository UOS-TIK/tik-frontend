import { useEffect, useState } from "react";
import { ListWrapper } from "./style";
import ResumeListContainer from "./ResumeListContainer";

const ResumeList = ({ resumeList, selectedResumeId, setSelectedResumeId, setAddMode }) => {

  useEffect(() => {
    const firstResume = resumeList[0];
    if (firstResume) {
      setSelectedResumeId(firstResume.id);
    }
  }, [resumeList]);

  return (
    <ListWrapper>
      {resumeList.map((resume) => (
        <ResumeListContainer
          key={resume.id}
          resume={resume}
          selectedResumeId={selectedResumeId}
          setSelectedResumeId={setSelectedResumeId}
          setAddMode={setAddMode}
        />
      ))}
    </ListWrapper>
  );
};

export default ResumeList;
