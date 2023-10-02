import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

interface PeopleItem {
  id: number;
  name: string;
  hobby: string;
}
const Index = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );

  const [people, setPeople] = useState<PeopleItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("people").select("*");
      if (!error) {
        setPeople(data as any);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Supabase Data</h1>
      <ul>
        {people.map((item) => (
          <li key={item.id}>
            {item.name}-{item.hobby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
