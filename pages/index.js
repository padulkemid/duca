// prop-types
import PropTypes from 'prop-types';

// local components
import Layout from '../components/layout';
import SEO from '../components/seo';
import ModeChange from '../components/mode_change';
import Header from '../components/header';
import Middle from '../components/middle';
import Bottom from '../components/bottom';
import Footer from '../components/footer';

// TODO: change this
export default function Home({ changeMode }) {
  return (
    <Layout>
      <SEO />
      <ModeChange changeMode={changeMode} />
      <Header />
      <Middle />
      <Bottom />
      <Footer />
    </Layout>
  );
}

Home.propTypes = {
  changeMode: PropTypes.func.isRequired,
};
