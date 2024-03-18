import Head from 'next/head';
import { getGlobalData } from '../utils/global-data';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="keywords" content={'centralizando site, centralizando, centralizando.site, centralizando site de notícias, centralizando site oficial, centralizando brasil'} />
      <link rel="icon" href={'https://i.imgur.com/X5lpQrM.jpeg'} type="image/x-icon" />
    </Head>
  );
}
