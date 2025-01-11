import { Link, Meta, Title } from '@solidjs/meta';

const MetaTags = () => {
  return (
    <>
      <Title>UglifyJS Compiler</Title>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta property="robots" content="index,follow" />
      <Meta name="theme-color" content="#FFD436" />
      <Meta property="application-name" content="UglifyJS Compiler" />
      <Link rel="icon" href="/favicon.ico" />
      <Link rel="canonical" href="https://uglifyjs-compiler.vercel.app" />
      <Meta
        name="description"
        content="Compile any JS code into it's uglified transpiled code and execute it right from the browser. You can also execute the uglified code right from the browser."
      />
      <Meta property="og:title" content="UglifyJS Compiler" />
      <Meta
        property="og:description"
        content="Compile any JS code into it's uglified transpiled code and execute it right from the browser. You can also execute the uglified code right from the browser."
      />
      <Meta property="og:url" content="https://uglifyjs-compiler.vercel.app" />
      <Meta
        property="og:image"
        content="https://uglifyjs-compiler.vercel.app/favicon.ico"
      />
      <Meta property="og:site_name" content="UglifyJS Compiler" />
    </>
  );
};

export default MetaTags;
