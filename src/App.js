import React from 'react'
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import PrivateElement from "./Routes/PrivateRoute";
import AuthRoute from "./Routes/AuthRoute";
import "./styles.css";
import NotFound from './Pages/NotFound';
import Admin from './Pages/Admin';
import UserList from './Pages/UserList';
import OrganizationList from './Pages/OrganizationList';
import UserDetail from './Pages/UserDetail';
import OrganizationDetail from './Pages/OrganizationDetail';
import NotAuthorized from './Pages/NotAuthorized';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PrivateElement>
            <Dashboard />
          </PrivateElement>
        } />
        <Route path="/signin" element={
          <AuthRoute>
            <SignIn />
          </AuthRoute>
        } />
        <Route path="/signup" element={
          <AuthRoute>
            <SignUp />
          </AuthRoute>
        } />
        <Route path="/dashboard" element={
          <PrivateElement>
            <Dashboard />
          </PrivateElement>
        } />
        <Route path="/admin" element={
          <PrivateElement>
            <Admin />
          </PrivateElement>
        } />
        <Route path="/user-list" element={
          <PrivateElement>
            <UserList />
          </PrivateElement>
        } />
        <Route path="/organization-list" element={
          <PrivateElement>
            <OrganizationList />
          </PrivateElement>
        } />
        <Route path="/user-detail" element={
          <PrivateElement>
            <UserDetail />
          </PrivateElement>
        } />
        <Route path="/organization-detail" element={
          <PrivateElement>
            <OrganizationDetail />
          </PrivateElement>
        } />
        <Route
          path="*"
          element={
            <NotFound />
          }
        />
        <Route
          path="/not-authorized"
          element={
            <NotAuthorized />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}