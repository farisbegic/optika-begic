import Head from "next/head";
const MetaData = (props) => (
    <Head>
        <title>
            {props.title} | {`Optika Begić`}
        </title>
        <meta name="description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta
            name="og:title"
            property="og:title"
            content={props.title + " | Optika Begić"}
        />
        <meta
            name="og:description"
            property="og:description"
            content={props.description}
        />
        <meta property="og:url" content={"https://optika-begic.vercel.app/" + props.path} />
        <meta property="og:image" content={props.image} />
        <meta property="og:image:width" content="1179" />
        <meta property="og:image:height" content="603" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link
            rel="canonical"
            href={
                props.canonical ? props.canonical : "https://optika-begic.vercel.app/" + props.path
            }
        />
    </Head>
);

export default MetaData;