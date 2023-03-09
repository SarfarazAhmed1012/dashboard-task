import DashboardApp from "./components/DashboardApp";
import Sidebar from "./components/Sidebar";
import "./scss/styles.scss";
function App() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <DashboardApp />
      </div>
    </>
  );
}

export default App;
