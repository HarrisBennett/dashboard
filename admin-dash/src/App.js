import Home from './page/home/home';
import { Routes, Route } from 'react-router-dom';
import Login from './page/login/login';
import New from './page/new/New';
import Single from './page/single/single';
import List from './page/list/list';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path="new" element={<New />} />
          <Route path=":userId" element={<Single />} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path="new" element={<New />} />
          <Route path=":productId" element={<Single />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
