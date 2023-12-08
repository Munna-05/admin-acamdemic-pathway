import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { Toaster } from "react-hot-toast";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Enquiries from "./Pages/Enquiries";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 2000,
            style: {
              // background: "#363636",
              // color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 2000,
              // theme: {
              //   primary: "green",
              //   secondary: "black",
              // },
            },
          }}
        />
        <BrowserRouter>
          
            <Layout>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Users" element={<Dashboard />} />
                <Route path="/Courses" element={<Dashboard />} />
                <Route path="/Blogs" element={<Dashboard />} />
                <Route path="/Services" element={<Dashboard />} />
                <Route path="/Posts" element={<Dashboard />} />
                <Route path="/Jobs" element={<Dashboard />} />
                <Route path="/Countries" element={<Dashboard />} />
                <Route path="/Enquiries" element={<Enquiries />} />
              </Routes>
            </Layout>
          
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
