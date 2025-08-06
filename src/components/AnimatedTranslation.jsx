import { useTranslation } from 'react-i18next';
import TranslateText from './TranslateText';

export default function AnimatedTranslation({ tkey }) {
  const { t } = useTranslation();

  return <TranslateText text={t(tkey) || ''} />;
}
