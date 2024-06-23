import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component/>}
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;