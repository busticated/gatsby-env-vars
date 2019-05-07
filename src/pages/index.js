import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ENV_VARS = ['MY_CLIENT_CONFIGS', 'GATSBY_MY_CLIENT_CONFIGS'];

function getExportedSettings(){
  const env = process ? (process.env || {}) : {};
  let index = -1;
  let json;

  while (++index < ENV_VARS.length){
    const key = ENV_VARS[index];

    if (env[key]){
      json = env[key];
      break;
    }
  }

  if (!json){
    console.log('FOUND:', process.env.MY_CLIENT_CONFIGS);
    throw new Error('unable to load client config settings');
  }
  return JSON.parse(json);
}

const IndexPage = () => {
  const cfg = getExportedSettings();

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Here are the public env vars: {JSON.stringify(cfg, null, 2)}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage
