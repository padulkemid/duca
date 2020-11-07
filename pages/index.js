// @material-ui core
import Button from '@material-ui/core/Button';

// local components
import SEO from '../components/seo';
import Layout from '../components/layout';
import Header from '../components/header';

// TODO: change this
export default function Home({ changeMode }) {
  return (
    <Layout>
      <SEO />
      <Header />
      <Button variant="contained" onClick={changeMode}>
        change mode
      </Button>
    </Layout>
  );
}
