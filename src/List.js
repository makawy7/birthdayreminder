function List({ data }) {
  return (
    <>
      {data.map(({ id, name, age, image }) => (
        <article className="person" key={id}>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      ))}
    </>
  );
}

export default List;
