import Head from 'next/head';
import { getGlobalData } from '../utils/global-data';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="keywords" content={globalData.tags} />
      <link rel="icon" href={globalData.favicon} type="image/x-icon" />
    </Head>
  );
}
