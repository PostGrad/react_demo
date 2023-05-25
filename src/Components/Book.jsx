const Book = ({ id, title, author, image }) => {
  return (
    <article className="book">
      <span className="book-id">#{id}</span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
      >
        {author}
      </h4>
    </article>
  );
};

export default Book;
