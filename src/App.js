// import Header from "./Components/Header";
// import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
// import FormQ from "./Components/Form";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState(false);
  const [seeForm, setSeeForm] = useState(false);
  const [image, setImage] = useState(null);
  const [heroForm, setHeroForm] = useState({});

  const changeHeroDescription = (e) => {
    setHeroForm((prevState) => {
      if (e.target.id === "image") {
        return { ...prevState, [e.target.id]: e.target.files };
      } else {
        return { ...prevState, [e.target.id]: e.target.value };
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/create", {
        headers: {
          "Content-Type": "image/jpeg",
        },
      })
      .then((res) => {
        console.log(JSON.parse(res.data.data));
        // setImage(res.data.images);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const createHero = (e) => {
    e.preventDefault();
    // console.log(heroForm.image[0]);
    const formData = new FormData();
    if (Object.values(heroForm.image).length > 1) {
      Object.values(heroForm.image).forEach((el) =>
        formData.append("hero", el)
      );
      formData.append("description", JSON.stringify(heroForm)); // Добавляем описание картинки
      axios
        .post("http://localhost:8080/create/list", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    } else {
      formData.append("hero", heroForm.image[0]);
      formData.append("description", JSON.stringify(heroForm)); // Добавляем описание картинки
      axios
        .post("http://localhost:8080/create/item", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      {items ? <Cards /> : "Вы ещё не добавили ни одного супергероя"}
      <button type="button" onClick={() => setSeeForm(true)}>
        Create
      </button>
      {seeForm && (
        <form onSubmit={createHero}>
          <input
            type="text"
            id="nickname"
            name="hero-nickname"
            onChange={changeHeroDescription}
          />
          <input
            type="text"
            id="real_name"
            name="hero-real_name"
            onChange={changeHeroDescription}
          />
          <textarea
            type="text"
            id="description"
            name="hero-description:"
            onChange={changeHeroDescription}
          />
          <input
            type="text"
            id="superpowers"
            name="superpowers"
            onChange={changeHeroDescription}
          />
          <input
            type="text"
            id="catch_phrase"
            name="hero-phrase:"
            onChange={changeHeroDescription}
          />
          <input
            type="file"
            id="image"
            multiple
            name="hero-image"
            accept="image/png, image/jpeg"
            onChange={changeHeroDescription}
          />
          <button type="submit" onClick={createHero}>
            Create
          </button>
        </form>
      )}

      <div>
        {image &&
          image.map((image, index) => (
            <img
              key={index}
              src={`data:image/jpeg;base64,${image.data}`}
              alt={image.filename}
              width="500"
              height="500"
            />
          ))}
      </div>

      {/* <Header />
      <Hero />
      <main className="container">
        <Cards />
        <FormQ />
      </main> */}
    </>
  );
}

export default App;
