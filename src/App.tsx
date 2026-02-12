import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductPage } from './pages/ProductPage';
import { CartProvider } from './context/CartContext';
import Grid from "@mui/material/Grid";
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <Grid container spacing={8} direction="column">
            <Grid>
              <Header />
            </Grid>
            <Grid>
              <Routes>
                <Route path="/" element={<ProductPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
              </Routes>
            </Grid>
          </Grid>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App
