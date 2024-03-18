import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="keywords" content={ 'centralizando site, centralizando, centralizando.site, centralizando site de notícias, centralizando site oficial, centralizando brasil' } />
    </Head>
  );
}
