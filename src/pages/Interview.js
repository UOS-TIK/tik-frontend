
import { useLocation } from 'react-router-dom';

const Interview = () => {
  const location = useLocation();
  const interviewId = location.state.interviewId;

  return (
    <div>인터뷰 아이디: {interviewId}</div>
  );
};

export default Interview;