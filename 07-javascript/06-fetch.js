const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  const MIN_LOADING_TIME = 1000; // 1 second
  const startTime = Date.now();

  fetch(url)
    .then((response) => response.json())
    .then((books) => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsed);

      setTimeout(() => {
        // Remove the loading spinner
        const loader = document.getElementById("loading");
        if (loader) loader.remove();

        // Loop through each book and create a display block
        books.forEach((book) => {
          const bookElement = document.createElement("div");
          bookElement.classList.add("mb-4", "text-center");

          const title = document.createElement("h3");
          title.textContent = book.name;

          const author = document.createElement("p");
          author.textContent = `by ${book.authors.join(", ")}`;

          const year = document.createElement("p");
          year.textContent = new Date(book.released).getFullYear();

          const pages = document.createElement("p");
          pages.textContent = `${book.numberOfPages} pages`;

          bookElement.appendChild(title);
          bookElement.appendChild(author);
          bookElement.appendChild(year);
          bookElement.appendChild(pages);

          app.appendChild(bookElement);
        });

        app.style.display = "flex";
        app.style.flexDirection = "column";
        app.style.alignItems = "center";
      }, remainingTime);
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
      app.innerHTML = '<p class="text-danger">Failed to load books.</p>';
    });
};

fetchData(url);
// Fetch all books from the API of Ice and Fire and append them to the DOM
// Create an element for each book that contains title, author, publication year, and number of pages
// Update the styles in JavaScript to center all the books in the container given
