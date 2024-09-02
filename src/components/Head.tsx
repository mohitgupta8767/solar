import Head from 'next/head';

type HeadProps = {
  title: string;
  description: string;
  iconHref:string;
};

const CustomHead = ({ title, description, iconHref }: HeadProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href={iconHref} />
  </Head>
);

export default CustomHead;
 