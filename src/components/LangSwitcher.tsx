import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.bgElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
    background: ${({ theme }) => theme.colors.bgCard};
  }
`;

export function LangSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage || 'en';
  const next = current.startsWith('es') ? 'en' : 'es';

  return (
    <Btn
      onClick={() => i18n.changeLanguage(next)}
      aria-label={t('lang.switchTo')}
      title={t('lang.switchTo')}
    >
      🌐 {next.toUpperCase()}
    </Btn>
  );
}
