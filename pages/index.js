// next
import Head from 'next/head';

// @material-ui core
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// TODO: change this
export default function Home({ changeMode }) {
  return (
    <>
      <Head>
        <title>anju geming</title>
      </Head>
      <Typography variant="h1">Yo wasap</Typography>
      <Button variant="contained" onClick={changeMode}>
        change theme
      </Button>
    </>
  );
}
