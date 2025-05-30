import Head from "next/head";
import { OBPX } from "@/components/OBPX";
import { Header } from "@/components/Header";
import Layout from "@/components/Layout";

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>OBPX - Ontology Based Prompt Expander</title>
        <meta
          name="description"
          content="Expand your prompts with advanced NLP and ontology techniques."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#4caf50" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="OBPX - Ontology Based Prompt Expander" />
        <meta property="og:description" content="Expand your prompts with advanced NLP and ontology techniques." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OBPX - Ontology Based Prompt Expander" />
        <meta name="twitter:description" content="Expand your prompts with advanced NLP and ontology techniques." />
        <meta name="twitter:image" content="/logo.png" />
        
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <OBPX />
    </Layout>
  );
}
