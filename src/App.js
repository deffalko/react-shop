import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";

import { ContextProvaider } from "./context";

function App() {
  return (
    <div className="app">
      <Header />
      <ContextProvaider>
        <Shop />
      </ContextProvaider>
      <Footer />
    </div>
  );
}

export default App;
