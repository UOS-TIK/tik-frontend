import styled from "styled-components";


export const MainBannerContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  background-color: ${props => props.bgColor};
  width: 100%;
  height: 300px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`;

export const StyledBadge = styled.div`
  width: fit-content;
  padding: 6px 16px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 700;
  color: #ffffffcc;
  background-color: ${props => props.bgColor || 'transparent'};
  border: ${props => props.border ? '1px solid #ffffff' : 'none'};
`;


export const ContentText = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BannerTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
`;

export const Description = styled.div`
  font-size: 17px;
`;

export const BannerImage = styled.img`
  width: 210px;
`;
