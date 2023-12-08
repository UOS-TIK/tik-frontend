import Textarea, { TextareaColor } from "../../components/Textarea/Textarea";

const JobDescription = ({ jobDescription }) => {
  return (
    <Textarea color={TextareaColor.WHITE} value={jobDescription} readOnly />
  );
};

export default JobDescription;
