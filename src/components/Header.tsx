import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container } from './shared';
import { LangSwitcher } from './LangSwitcher';
import { CHROME_STORE_URL } from '../constants';

const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  gap: 16px;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: -0.01em;
`;

const BrandIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({ theme }) => theme.gradients.brand};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 800;
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover { color: ${({ theme }) => theme.colors.text}; }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InstallBtn = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.gradients.brand};
  color: white;
  font-size: 14px;
  font-weight: 700;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export function Header() {
  const { t } = useTranslation();
  return (
    <HeaderWrap>
      <Container>
        <Inner>
          <Brand href="#top">
            <BrandIcon>IG</BrandIcon>
            IG Tracker
          </Brand>
          <Nav>
            <NavLink href="#features">{t('nav.features')}</NavLink>
            <NavLink href="#how">{t('nav.how')}</NavLink>
            <NavLink href="#faq">{t('nav.faq')}</NavLink>
          </Nav>
          <Actions>
            <LangSwitcher />
            <InstallBtn href={CHROME_STORE_URL} target="_blank" rel="noopener">
              {t('nav.install')}
            </InstallBtn>
          </Actions>
        </Inner>
      </Container>
    </HeaderWrap>
  );
}
