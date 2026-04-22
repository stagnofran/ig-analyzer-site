import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, GradientText } from './shared';
import { CHROME_STORE_URL } from '../constants';

const Wrap = styled.section`
  padding: 80px 0 64px;
  position: relative;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.gradients.brandSoft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 24px;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.success};
  }
`;

const Title = styled.h1`
  font-size: clamp(40px, 7vw, 72px);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: clamp(18px, 2vw, 22px);
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 8px;
  font-weight: 500;
`;

const Tagline = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 540px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAs = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const PrimaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.gradients.brand};
  color: white;
  font-size: 16px;
  font-weight: 700;
  box-shadow: ${({ theme }) => theme.shadows.glow};
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 60px rgba(214, 41, 118, 0.5);
  }
`;

const SecondaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 600;
  transition: background 0.15s ease;

  &:hover { background: ${({ theme }) => theme.colors.bgCard}; }
`;

const Stats = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatVal = styled.span`
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textDim};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Visual = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Desktop = styled.div`
  position: relative;
  width: 100%;
  max-width: 560px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 14px 14px 14px;
  box-shadow: ${({ theme }) => theme.shadows.md}, ${({ theme }) => theme.shadows.glow};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.gradients.brandSoft};
    opacity: 0.35;
    z-index: 0;
    pointer-events: none;
  }

  /* Browser-like dots */
  &::after {
    content: '';
    position: absolute;
    top: 18px;
    left: 22px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ff5f57;
    box-shadow:
      14px 0 0 #febc2e,
      28px 0 0 #28c840;
    z-index: 2;
  }
`;

const DesktopInner = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 8px;
  background: #000;
  overflow: hidden;
  margin-top: 16px;
`;

const DesktopImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Phone = styled.div`
  display: none;
  position: relative;
  width: 100%;
  max-width: 280px;
  aspect-ratio: 9 / 19.5;
  border-radius: 36px;
  background: #111;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  padding: 8px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), ${({ theme }) => theme.shadows.glow};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const PhoneInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 22px;
  background: #000;
  overflow: hidden;
`;

const PhoneImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
`;

export function Hero() {
  const { t } = useTranslation();
  return (
    <Wrap id="top">
      <Container>
        <Grid>
          <div>
            <Badge>{t('hero.badge')}</Badge>
            <Title>
              <GradientText>IG</GradientText> Tracker
            </Title>
            <Subtitle>{t('hero.subtitle')}</Subtitle>
            <Tagline>{t('hero.tagline')}</Tagline>
            <Description>{t('hero.description')}</Description>
            <CTAs>
              <PrimaryCTA href={CHROME_STORE_URL} target="_blank" rel="noopener">
                {t('hero.ctaPrimary')}
              </PrimaryCTA>
              <SecondaryCTA href="#how">{t('hero.ctaSecondary')}</SecondaryCTA>
            </CTAs>
            <Stats>
              <Stat>
                <StatVal>100%</StatVal>
                <StatLabel>{t('hero.stats.private')}</StatLabel>
              </Stat>
              <Stat>
                <StatVal>~60s</StatVal>
                <StatLabel>5K followers</StatLabel>
              </Stat>
              <Stat>
                <StatVal>20</StatVal>
                <StatLabel>Snapshots</StatLabel>
              </Stat>
            </Stats>
          </div>
          <Visual>
            <Desktop>
              <DesktopInner>
                <DesktopImg
                  src={`${import.meta.env.BASE_URL}screenshots/principal-difuminado.png`}
                  alt="IG Tracker desktop dashboard"
                />
              </DesktopInner>
            </Desktop>
            <Phone>
              <PhoneInner>
                <PhoneImg
                  src={`${import.meta.env.BASE_URL}screenshots/principal-vertical-difuminado.png`}
                  alt="IG Tracker mobile view"
                />
              </PhoneInner>
            </Phone>
          </Visual>
        </Grid>
      </Container>
    </Wrap>
  );
}
