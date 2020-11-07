// prop-types
import PropTypes from 'prop-types';

// local components
import SEO from '../components/seo';
import Layout from '../components/layout';
import Header from '../components/header';
import ModeChange from '../components/mode_change';

// TODO: change this
export default function Home({ changeMode }) {
  return (
    <Layout>
      <ModeChange changeMode={changeMode} />
      <SEO />
      <Header />
    </Layout>
  );
}

Home.propTypes = {
  changeMode: PropTypes.func.isRequired,
};
