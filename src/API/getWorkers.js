import axios from "axios";

async function getWorkers() {
  try {
    const { data } = await axios.get(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users"
    );
    return data.users;
  } catch (error) {
    return error;
  }
}

export default getWorkers;
