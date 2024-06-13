const UserData = ({ params }: { params: { data: string } }) => {
  return (
    <>
      <h1>UserName:</h1>
      <h2>{params.data}</h2>
      <img src="https://i.pravatar.cc/200?u=nombre" alt="random user photo" />
      {/*       <h3>Profesion: </h3>
      <h3>{params.data.profesion}</h3> */}
      <a href="/user">Return User</a>
      <a href="/">Return Home</a>
    </>
  );
};

export default UserData;
