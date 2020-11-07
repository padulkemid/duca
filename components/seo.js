// next
import Head from 'next/head';

// TODO: for attribution
// Icons made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

export default function SEO() {
  const title = '🌤️  Dukun Cuaca';
  const webDesc = '🌤️  your average weather app';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={webDesc} />
      <meta property="image" content="/weather/cloudy-1.png" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={webDesc} />
      <meta property="og:image" content="/weather/cloudy-1.png" />
      <meta property="og:type" content="website" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content="@padulkemid" />
      <meta property="twitter:description" content={webDesc} />
      <meta property="twitter:image" content="/weather/cloudy-1.png" />
    </Head>
  );
}
