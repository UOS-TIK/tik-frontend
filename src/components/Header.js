import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  const handleInterviewClick = () => {
    navigate('/generate-interview');
  };
  
  return (
    <HeaderContainer>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <Link to="/">
          <img src="images/ic_logo.svg" alt="logo_icon"/>
        </Link>
        <MenuContainer>
          <MenuItem onClick={handleInterviewClick}>면접 생성</MenuItem>
          <MenuItem>이력 조회</MenuItem>
        </MenuContainer>
      </div>
      <LogoutButton>로그아웃</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  color: white;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  color: #606060;
  font-size: 16px;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 60px;
  margin-left: 60px;
`;

const MenuItem = styled.div`
  cursor: pointer;
`;

const LogoutButton = styled.div`
  cursor: pointer;
`;