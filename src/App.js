import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./Layout";
import { Dashboard } from "./Pages";
import { Transactions } from "./Pages";
import { Accounts } from "./Pages";
import { Satting } from "./Pages";
import { Investments } from "./Pages";
import { Services } from "./Pages";
import { Loans } from "./Pages";
import { CreditCards } from "./Pages";
import { Login } from "./Pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/Dashborad" element={<Dashboard />} />
                <Route path="/Transactions" element={<Transactions />} />
                <Route path="/Accounts" element={<Accounts />} />
                <Route path="/Investments" element={<Investments />} />
                <Route path="/Satting" element={<Satting />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Loans" element={<Loans />} />
                <Route path="/CreditCards" element={<CreditCards />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
