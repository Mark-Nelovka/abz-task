import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="container">
        <Cards />
        <Form />
      </main>
    </>
  );
}

export default App;
