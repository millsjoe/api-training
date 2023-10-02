import { createClient } from "@supabase/supabase-js";

const supabase = () => {
  return createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_ANON_KEY as string
  );
};
export const getPeople = async () => {
  const { data, error } = await supabase().from("people").select("*");

  if (!error) {
    return data;
  }
};

export const createPerson = async (name: string, hobby: string) => {
  const { data: addedData, error } = await supabase()
    .from("people")
    .upsert([{ name, hobby }]);

  if (error) {
    console.error(error);
    return error;
  }
  return addedData;
};

export const updatePerson = async (name: string, hobby: string) => {
  const { data: addedData, error } = await supabase()
    .from("people")
    .update([{hobby}]).eq("name", name);

  if (error) {
    console.error(error);
    return error;
  }
  return addedData;
};
