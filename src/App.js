import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Dashboard from './page/Dashboard';
import Users from './page/Users';
import Transactions from './page/Transactions';
import Notifications from './page/Notifications';
import FitnessPlans from './page/FitnessPlans';
import MealPlans from './page/MealPlans';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/fitness-plans" element={<FitnessPlans />} />
          <Route path="/meal-plans" element={<MealPlans />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
