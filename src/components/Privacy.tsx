import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section, SectionHeader, SectionTitle, SectionSubtitle } from './shared';

const Wrap = styled.div`
  background: ${({ theme }) => theme.gradients.brandSoft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 56px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 24px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Point = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const Check = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success}22;
  color: ${({ theme }) => theme.colors.success};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
`;

const PointTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 4px;
`;

const PointDesc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.6;
`;

type PointType = { title: string; desc: string };

export function Privacy() {
  const { t } = useTranslation();
  const points = t('privacy.points', { returnObjects: true }) as PointType[];

  return (
    <Section>
      <Container>
        <Wrap>
          <SectionHeader>
            <SectionTitle>{t('privacy.title')}</SectionTitle>
            <SectionSubtitle>{t('privacy.subtitle')}</SectionSubtitle>
          </SectionHeader>

          <Grid>
            {points.map((p, i) => (
              <Point key={i}>
                <Check>✓</Check>
                <div>
                  <PointTitle>{p.title}</PointTitle>
                  <PointDesc>{p.desc}</PointDesc>
                </div>
              </Point>
            ))}
          </Grid>
        </Wrap>
      </Container>
    </Section>
  );
}
