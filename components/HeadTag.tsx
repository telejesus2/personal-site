import Head from 'next/head';

type Props = {
  title: string
}

export default function HeadTag(props: Props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="The personal website of Jesús Bujalance, PhD in Machine Learning" />
      <meta name="theme-color" content="#485fc7" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
