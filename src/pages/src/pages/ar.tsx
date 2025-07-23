import Home from '@/components/Home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ArabicHome() {
  return <Home />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations('ar', ['home', 'footer'])),
    },
  };
}



add Arabic page ar.tsx