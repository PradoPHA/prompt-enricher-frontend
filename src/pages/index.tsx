import Head from "next/head";
import { OBPX } from "@/components/OBPX";
import { Header } from "@/components/Header";
import Layout from "@/components/Layout";

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>OntoB PromptX</title>
        <meta
          name="description"
          content="Expanda seus prompts com técnicas avançadas de PLN e ontologias."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/unifei.ico" />
      </Head>
      <Header />
      <OBPX />
    </Layout>
  );
}
