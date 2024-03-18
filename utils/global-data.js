export const getGlobalData = () => {
  const name = 'Centralizando';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Centralizando: A sua fonte centralizada de Notícias';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
    const tags = 'centralizando site, centralizando, centralizando.site, centralizando site de notícias, centralizando site oficial, centralizando brasil'
    const favicon = 'https://i.imgur.com/X5lpQrM.jpeg'
  return {
    name,
    blogTitle,
    footerText,
    tags,
    favicon,
  };
};
