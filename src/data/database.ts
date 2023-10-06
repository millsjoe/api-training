import { createClient } from "@supabase/supabase-js";

/**
 * This file just has some functions to modify the database im using
 * When an API route is hit it calls on these. 
 */

const supabase = () => {
  return createClient( // this could be done on the client side but thats not a focus for this training
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_ANON_KEY as string 
  );
};
export const getPeople = async () => {
  const { data, error } = await supabase().from("people").select("*"); // grab everything from the db

  if (!error) {
    return data;
  }
};

export const createPerson = async (name: string, hobby: string) => {
  const { data: addedData, error } = await supabase()
    .from("people")
    .upsert([{ name, hobby }]); // upsert is UPDATE or INSERT if theres the same primary key (best practice if mutating by primary key tbh)

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

export const deletePerson = async (name: string) => {
  const {data, error} = await supabase().from("people").delete().eq("name", name)
}