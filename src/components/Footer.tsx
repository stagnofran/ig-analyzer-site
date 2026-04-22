import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container } from './shared';
import { CHROME_STORE_URL, GITHUB_URL } from '../constants';

const Wrap = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 48px 0 32px;
  margin-top: 40px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

const Brand = styled.div`
  font-size: 18px;
  font-weight: 800;
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

const Links = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover { color: ${({ theme }) => theme.colors.text}; }
`;

const Rights = styled.p`
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 13px;
`;

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Wrap>
      <Container>
        <Inner>
          <Brand>IG Tracker</Brand>
          <Tagline>{t('footer.tagline')}</Tagline>
          <Links>
            <Link href={CHROME_STORE_URL} target="_blank" rel="noopener">
              {t('footer.links.store')}
            </Link>
            <Link href={GITHUB_URL} target="_blank" rel="noopener">
              {t('footer.links.github')}
            </Link>
            <Link href="#faq">{t('footer.links.privacy')}</Link>
          </Links>
          <Rights>© {year} IG Tracker. {t('footer.rights')}</Rights>
        </Inner>
      </Container>
    </Wrap>
  );
}
