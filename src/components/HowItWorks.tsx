import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section, SectionHeader, SectionTitle, SectionSubtitle } from './shared';

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Step = styled.div`
  position: relative;
  padding: 32px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  text-align: center;
`;

const Number = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.brand};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 800;
  margin: 0 auto 20px;
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 15px;
  line-height: 1.6;
`;

const steps = ['install', 'open', 'analyze'] as const;

export function HowItWorks() {
  const { t } = useTranslation();
  return (
    <Section id="how">
      <Container>
        <SectionHeader>
          <SectionTitle>{t('how.title')}</SectionTitle>
          <SectionSubtitle>{t('how.subtitle')}</SectionSubtitle>
        </SectionHeader>

        <Steps>
          {steps.map((key, i) => (
            <Step key={key}>
              <Number>{i + 1}</Number>
              <Title>{t(`how.steps.${key}.title`)}</Title>
              <Desc>{t(`how.steps.${key}.desc`)}</Desc>
            </Step>
          ))}
        </Steps>
      </Container>
    </Section>
  );
}
