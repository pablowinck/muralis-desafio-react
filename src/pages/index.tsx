import Head from "next/head";
import HomeTemplate from "../concepts/home/components/template/HomeTemplate";

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio Muralis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/arvore.png" />
      </Head>
      <HomeTemplate />
    </>
  );
}
