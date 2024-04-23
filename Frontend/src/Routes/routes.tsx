import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarsList, CarsCreate, CarsUpdate, CarsDetail } from '../Pages/Cars';

// import Home from "../Pages/Home";
import Login from "../Pages/Login";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CarsList />} />
                    <Route path="/create" element={<CarsCreate />} />
                    <Route path="/update/:id" element={<CarsUpdate />} />
                    <Route path="/detail/:id" element={<CarsDetail />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default Router;