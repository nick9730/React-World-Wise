
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { CitiesProvider } from './contexts/CitiesContexts.jsx';
import { AuthProvider } from './contexts/FakeLoginContexts.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';



import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from './pages/Homepage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import  AppLayout from './pages/AppLayout.jsx';
import Login from './pages/Login.jsx';



import CityList from './components/CityList.jsx';
import CountriesList from './components/CountriesList.jsx';
import City from './components/City.jsx';
import Form from './components/Form.jsx';










function App() {


 

  return (
  <AuthProvider>

    <CitiesProvider>
     <BrowserRouter>
    

    <Routes>
    <Route index element={<Homepage>qq</Homepage>}/>
      <Route path="product" element={<Product  />} /> 
      <Route path="pricing" element={<Pricing></Pricing>}/>
      
      
      
      <Route path="/app" element={
        <ProtectedRoute>
        <AppLayout/>
      </ProtectedRoute>
        }>

        
      <Route index element={<Navigate replace to="cities"/>}/>
      <Route path='cities/:id'  element={<City/>}   /> 
      <Route path='cities' element={<CityList />}></Route>
      <Route path='countries' element={<CountriesList />}></Route>
      <Route path='form' element={<Form/>}></Route>
      </Route>
   <Route path='login' element={<Login/>}></Route>
   <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>

    </Routes>
         
    </BrowserRouter>
      </CitiesProvider>
      </AuthProvider>
  )
}


export default App