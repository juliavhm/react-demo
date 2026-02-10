import { Header } from './components/Header';
import { ProductPage } from './pages/ProductPage';
import Grid from "@mui/material/Grid";

function App() {

  return (
    <Grid container spacing={8} direction="column">
      <Grid>
        <Header />
      </Grid>

      <Grid>
        <ProductPage />
      </Grid>
    </Grid>
  );
}

export default App
