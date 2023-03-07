import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import { router } from "./router";


function App() {
  const route = useRoutes(router)
  return (
    <div className="App">
      <Header />
      {route}
    </div>
  );
}

export default App;
