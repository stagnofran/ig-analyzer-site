import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section, SectionHeader, SectionTitle, SectionSubtitle } from './shared';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 28px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
    transform: translateY(-2px);
  }
`;

const Icon = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 16px;
  background: ${({ $color }) => $color}22;
  color: ${({ $color }) => $color};
  border: 1px solid ${({ $color }) => $color}44;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardDesc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 15px;
  line-height: 1.6;
`;

const Badges = styled.div`
  margin-top: 56px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: ${({ theme }) => theme.colors.bgElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const items = [
  { key: 'nonFollowers', icon: '👤', color: '#ff8a3d' },
  { key: 'notFollowingBack', icon: '✗', color: '#ef4444' },
  { key: 'mutuals', icon: '👥', color: '#962fbf' },
  { key: 'snapshots', icon: '📸', color: '#22c55e' },
  { key: 'search', icon: '🔍', color: '#3b82f6' },
  { key: 'fast', icon: '⚡', color: '#facc15' },
] as const;

const badges = [
  { key: 'secure', icon: '🛡️' },
  { key: 'noPassword', icon: '🔒' },
  { key: 'lightweight', icon: '⚡' },
  { key: 'easy', icon: '✨' },
  { key: 'updates', icon: '🔄' },
  { key: 'privacy', icon: '🔐' },
] as const;

export function Features() {
  const { t } = useTranslation();
  return (
    <Section id="features">
      <Container>
        <SectionHeader>
          <SectionTitle>{t('features.title')}</SectionTitle>
          <SectionSubtitle>{t('features.subtitle')}</SectionSubtitle>
        </SectionHeader>

        <Grid>
          {items.map(({ key, icon, color }) => (
            <Card key={key}>
              <Icon $color={color}>{icon}</Icon>
              <CardTitle>{t(`features.items.${key}.title`)}</CardTitle>
              <CardDesc>{t(`features.items.${key}.desc`)}</CardDesc>
            </Card>
          ))}
        </Grid>

        <Badges>
          {badges.map(({ key, icon }) => (
            <Badge key={key}>
              <span>{icon}</span>
              {t(`features.badges.${key}`)}
            </Badge>
          ))}
        </Badges>
      </Container>
    </Section>
  );
}
