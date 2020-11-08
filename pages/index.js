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

export default function Home({ changeMode, city }) {
  return (
    <Layout>
      <SEO />
      <ModeChange changeMode={changeMode} />
      <Header city={city} />
      <Middle />
      <Bottom />
      <Footer />
    </Layout>
  );
}

Home.defaultProps = {
  city: '',
};

Home.propTypes = {
  changeMode: PropTypes.func.isRequired,
  city: PropTypes.string,
};

export async function getServerSideProps(ctx) {
  const { city } = ctx.query;

  return {
    props: {
      ...(city && {
        city,
      }),
    },
  };
}
