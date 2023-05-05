import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <><Html lang="fr">
      <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Description de la page pour les résultats de recherche. Doit contenir des mots-clés pertinents pour le sujet de la page." />
      <title>Agence La Capsule -</title>
      <link rel="canonical" href="https://www.example.com/page" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="Mots-clés pertinents pour le sujet de la page" />
      <meta property="og:title" content="Titre de la page - Mots-clés pertinents pour le sujet de la page" />
      <meta property="og:description" content="Description de la page pour les résultats de recherche. Doit contenir des mots-clés pertinents pour le sujet de la page." />
      <meta property="og:image" content="https://www.example.com/image.jpg" />
      <meta property="og:url" content="https://www.example.com/page" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="Titre de la page - Mots-clés pertinents pour le sujet de la page" />
      <meta name="twitter:description" content="Description de la page pour les résultats de recherche. Doit contenir des mots-clés pertinents pour le sujet de la page." />
      <meta name="twitter:image" content="https://www.example.com/image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head><body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </>
  )
}
