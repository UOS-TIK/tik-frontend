import { BannerImage, BannerTitle, ContentText, ContentWrapper, Description, MainBannerContainer, StyledBadge } from "./style";


const MainBanner = ({ badgeText, badgeBgColor, badgeBorder, title, description, imageUrl, bgColor }) => {
  return (
    <MainBannerContainer bgColor={bgColor}>
      <ContentWrapper>
        <StyledBadge
          bgColor={badgeBgColor} 
          border={badgeBorder}
        >
          {badgeText}
        </StyledBadge>
        <ContentText>
          <BannerTitle>{title}</BannerTitle>
          <Description>{description}</Description>
        </ContentText>
      </ContentWrapper>
      <BannerImage src={imageUrl} alt="banner_icon" />
    </MainBannerContainer>
  );
};

export default MainBanner;
