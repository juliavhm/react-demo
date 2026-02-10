import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductPage } from './pages/ProductPage';
import { WirelessHeadphonesPage } from './pages/WirelessHeadphonesPage';
import { CartProvider } from './context/CartContext';
import Grid from "@mui/material/Grid";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Grid container spacing={8} direction="column">
          <Grid>
            <Header />
          </Grid>
          <Grid>
            <Routes>
              <Route path="/" element={<ProductPage />} />
              <Route path="/wireless-headphones" element={<WirelessHeadphonesPage />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
