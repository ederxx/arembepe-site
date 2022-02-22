import Header from "./views/section-header/header.js";
import Main from "./views/section-main/main.js";

function App() {
  return (
    <div className="App" class="container d-flex flex-column my-2 ">
      <section class="mw-100 h-50 d-flex justify-content-center my-2">
        <Header />
      </section>
      <section class="mw-100 h-50 d-flex justify-content-center ">
        <Main />
      </section>
    </div>
  );
}

export default App;
