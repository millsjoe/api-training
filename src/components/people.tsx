import axios from "axios";
import { useEffect, useState } from "react";

interface PeopleItem {
  id: number;
  name: string;
  hobby: string;
}
const People = () => {
  const [people, setPeople] = useState<PeopleItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = (await axios.get("/api/people")).data;
      setPeople(response.data);
    };
    fetchData();

    setInterval(() => {
      fetchData();
    }, 30000); // refresh every 30 secs instead of realtime websockets (lazy i know)
  }, []);

  if (people.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Name - Hobby</h1>
      <ul>
        {people.map((item) => (
          <li key={item.id}>
            {item.name} - {item.hobby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;
