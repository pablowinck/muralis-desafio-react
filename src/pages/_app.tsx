import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../concepts/layout/components/template/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
