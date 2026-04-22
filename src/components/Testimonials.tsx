import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section, SectionHeader, SectionTitle, SectionSubtitle } from './shared';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.figure`
  margin: 0;
  padding: 28px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Stars = styled.div`
  color: #facc15;
  font-size: 16px;
  letter-spacing: 2px;
`;

const Quote = styled.blockquote`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};

  &::before { content: '“'; }
  &::after { content: '”'; }
`;

const Footer = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
`;

const Avatar = styled.div<{ $idx: number }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme, $idx }) => {
    const palette = [
      theme.gradients.brand,
      'linear-gradient(135deg, #4f5bd5, #962fbf)',
      'linear-gradient(135deg, #22c55e, #3b82f6)',
      'linear-gradient(135deg, #fa7e1e, #facc15)',
    ];
    return palette[$idx % palette.length];
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 15px;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 15px;
`;

type Item = { name: string; quote: string };

export function Testimonials() {
  const { t } = useTranslation();
  const items = t('testimonials.items', { returnObjects: true }) as Item[];

  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionTitle>{t('testimonials.title')}</SectionTitle>
          <SectionSubtitle>{t('testimonials.subtitle')}</SectionSubtitle>
        </SectionHeader>

        <Grid>
          {items.map((item, i) => (
            <Card key={i}>
              <Stars>★★★★★</Stars>
              <Quote>{item.quote}</Quote>
              <Footer>
                <Avatar $idx={i}>{item.name.charAt(0)}</Avatar>
                <Name>{item.name}</Name>
              </Footer>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
