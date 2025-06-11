import { useEffect, useState } from "react";
import { getBooks } from "../../../_services/books";
import { createTransaction } from "../../../_services/transactions";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [quantities, setQuantities] = useState(Array(books.length).fill(1));
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSubmit = async (i, id, e) => {
    e.preventDefault();

    if (!token) {
      navigate("/login");
      alert("Must login");
      return;
    }

    const fetchData = async () => {
      const [booksData] = await Promise.all([getBooks()]);

      setBooks(booksData);
    };

    try {
      const payload = {
        book_id: id,
        quantity: quantities[i],
      };

      await createTransaction(payload);
      alert("Pembelian berhasil");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange = (i, e) => {
    const newQuantities = [...quantities];
    newQuantities[i] = Number(e.target.value);
    setQuantities(newQuantities);
  };

  useEffect(() => {
    const fetchData = async () => {
      const [booksData] = await Promise.all([getBooks()]);

      setBooks(booksData);
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {books.length > 0 ? (
              books.map((book, i) => (
                <div
                  key={book.id}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="h-56 w-full">
                    <a href="#">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src={book.cover_photo}
                        alt=""
                      />
                      <img
                        className="mx-auto hidden h-full dark:block"
                        src={book.cover_photo}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="#"
                      className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      {book.title}
                    </a>

                    <ul className="mt-2 flex items-center gap-4">
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                          />
                        </svg>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Stock: {book.stock}
                        </p>
                      </li>

                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                          />
                        </svg>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Best Price
                        </p>
                      </li>
                    </ul>

                    <form
                      onSubmit={(e) => handleSubmit(i, book.id, e)}
                      className="mt-2 sm:mt-8 space-y-4"
                    >
                      <div>
                        <label
                          htmlFor="quantity"
                          className="w-full text-white sm:text-sm"
                        >
                          Jumlah
                        </label>
                        <input
                          name="quantity"
                          id="quantity"
                          type="number"
                          placeholder="Jumlah"
                          min={1}
                          value={quantities[i]}
                          onChange={(e) => handleQuantityChange(i, e)}
                          className="mt-1 block w-full px-3 py-1 font-small border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-indigo-500 focur:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                          Rp{book.price}
                        </p>

                        <button
                          type="submit"
                          className="inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4  focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                        >
                          <svg
                            className="-ms-2 me-2 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                            />
                          </svg>
                          Beli
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ))
            ) : (
              <p>Books not found</p>
            )}
          </div>
          <div className="w-full text-center">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Show more
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
