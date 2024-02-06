import { renderFavicons } from '@/utils';
import { Html, Head, Main, NextScript } from 'next/document';
import { repositoryName } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="./favicon/favicon.ico" />
        {renderFavicons()}
      </Head>
      <body>
        <Main />
        <PrismicPreview repositoryName={repositoryName} />
        <NextScript />
      </body>
    </Html>
  );
}
