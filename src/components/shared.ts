import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 20px;
  }
`;

export const Section = styled.section`
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px 0;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 720px;
  margin: 0 auto 56px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(28px, 4vw, 44px);
  margin-bottom: 16px;
  letter-spacing: -0.02em;
`;

export const SectionSubtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
`;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;
