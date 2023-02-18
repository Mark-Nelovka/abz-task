import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
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
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2.5} columnSpacing={2.5}>
          {workers &&
            workers.map((worker) => {
              // console.log(worker);
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Cardq {...worker} />
                </Grid>
              );
            })}
        </Grid>
      </Box>

      <div className="cards__button-container">
        <Buttons text={"Show more"} />
      </div>
    </section>
  );
};

function Cardq({ id, photo, name, position, email, phone }) {
  return (
    <Card key={id} className="cards__list-item">
      <div className="card-photo-container">
        <img src={photo} alt="face worker's" />
      </div>
      <p>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </Card>
  );
}
