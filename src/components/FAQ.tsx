import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section, SectionHeader, SectionTitle } from './shared';

const List = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Item = styled.div<{ $open: boolean }>`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid
    ${({ theme, $open }) => ($open ? theme.colors.borderStrong : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  transition: border-color 0.2s ease;
`;

const QButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Caret = styled.span<{ $open: boolean }>`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textMuted};
  transform: rotate(${({ $open }) => ($open ? 45 : 0)}deg);
  transition: transform 0.2s ease;
`;

const Answer = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '400px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: 0 24px;
`;

const AnswerInner = styled.p`
  padding: 0 0 20px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 15px;
  line-height: 1.7;
`;

type FaqItem = { q: string; a: string };

export function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);
  const items = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <Section id="faq">
      <Container>
        <SectionHeader>
          <SectionTitle>{t('faq.title')}</SectionTitle>
        </SectionHeader>

        <List>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Item key={i} $open={isOpen}>
                <QButton onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <Caret $open={isOpen}>+</Caret>
                </QButton>
                <Answer $open={isOpen}>
                  <AnswerInner>{item.a}</AnswerInner>
                </Answer>
              </Item>
            );
          })}
        </List>
      </Container>
    </Section>
  );
}
