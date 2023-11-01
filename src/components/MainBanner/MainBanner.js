import { BannerImage, BannerTitle, ContentText, ContentWrapper, Description, MainBannerContainer, StyledBadge } from "./style";


const MainBanner = ({ badgeText, badgeType, title, description, imageUrl, bgColor }) => {
  return (
    <MainBannerContainer bgColor={bgColor}>
      <ContentWrapper>
        <StyledBadge badgeType={badgeType}>
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
