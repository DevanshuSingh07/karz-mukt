import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import content from '../content.json'
import { initGA, logPageView } from "../analytics";
import {useEffect} from 'react'

const SEO = () => {
  const location = useLocation();
  useEffect(() => {
    initGA();
    logPageView(location.pathname);
  }, [location]);

console.log(content)
  

  return (
    <Helmet>
      <title>{content.titles[location.pathname] || "Default Title"}</title>
      <meta name="description" content={content.meta[location.pathname] || "debt settlement company"} />
      <meta name="keywords" content={content.keywords[location.pathname] || "debt settelement, debt solutions, loan settlement,"} />
    </Helmet>
  );
};

export default SEO;
