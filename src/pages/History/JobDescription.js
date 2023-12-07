import { useEffect, useState } from "react";
import api from "../../api/api";
import Input, { InputColor } from "../../components/Input/Input";
import Textarea, { TextareaColor } from "../../components/Textarea/Textarea";

const JobDescription = ({ jobDescription }) => {
  return <Textarea color={InputColor.WHITE} value={jobDescription} readOnly />;
};

export default JobDescription;
