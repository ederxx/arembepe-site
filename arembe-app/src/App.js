import Header from "./views/section-header/header.js";
import Main from "./views/section-main/main.js";

function App() {
  return (
    <div className="App" class="container d-flex flex-column mt-2">
      <section class="d-flex justify-content-center">
        <Header />
      </section>
      <section class="d-flex justify-content-center">
        <Main />
      </section>
    </div>
  );
}

export default App;
