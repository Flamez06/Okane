import Hero from "./components/home/hero";
import Expenses from "./components/home/expenses";
import Goals from "./components/home/goals";
import Nav from "./components/nav";
import Register from "./components/register";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import "./App.css";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_PROJECT_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Register />;
  } else {
    return (
      <>
        <Hero />
        <Expenses />
        <Goals />
        <Nav />
      </>
    );
  }
}

export default App;
