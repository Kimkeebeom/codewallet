import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: 'https://backend06.codebootcamp.co.kr/graphql',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
