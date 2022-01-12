import Link from "next/link";

export default function Book({ book }) {
  console.log(book);
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <p>{book.title}</p>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const books = await fetch(`https://henri-potier.techx.fr/books`).then(
    (response) => response.json()
  );
  return {
    props: {
      book: books.filter((currentBook) => currentBook.isbn === params.id)[0],
    },
  };
}
