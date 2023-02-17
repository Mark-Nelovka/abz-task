import { useEffect, useState } from "react";
import { getWorkers } from "../../API";
import { Buttons } from "../../General";

export const Cards = () => {
  const [workers, setWorkers] = useState(null);

  useEffect(() => {
    (async function () {
      const res = await getWorkers();
      setWorkers(res);
    })();
  }, []);

  return (
    <section>
      <p className="cards__section-title">Working with GET request</p>
      <ul className="">
        {workers &&
          workers.map((worker) => {
            // console.log(worker);
            return <Card {...worker} />;
          })}
      </ul>
      <div className="cards__button-container">
        <Buttons text={"Show more"} />
      </div>
    </section>
  );
};

function Card({ id, photo, name, position, email, phone }) {
  return (
    <li key={id} className="cards__list-item">
      <div className="card-photo-container">
        <img src={photo} alt="face worker's" />
      </div>
      <p>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </li>
  );
}
