"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

const User = () => {
  const router = useRouter();

  const handleSubmit = (e: SyntheticEvent) => {
    console.log(e);
    e.preventDefault();
    router.push(`/user/${id}`);
  };

  const [id, setId] = useState("");

  const handleChange = (e: SyntheticEvent) => {
    setId(e.target.value);
    console.log(e);
  };

  return (
    <>
      <h1>All Users</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="id del usuario" value={id} onChange={handleChange} />
        <input type="submit" value="ENVIAR" />
      </form>
      <a href="/">Volver a Home</a>
    </>
  );
};

export default User;
