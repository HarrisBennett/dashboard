import Home from './page/home/home';
import { Routes, Route } from 'react-router-dom';
import Login from './page/login/login';
import New from './page/new/New';
import Single from './page/single/single';
import List from './page/list/list';
import { productsInputs, userInputs } from './formSource';
import './style/dark.scss';
import { useContext, useState } from 'react';
import { DarkModeContext } from './context/darkModeContext';
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title={'Add new User'} />}
            />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route
              path="new"
              element={
                <New inputs={productsInputs} title={'Add New Product'} />
              }
            />
            <Route path=":productId" element={<Single />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
