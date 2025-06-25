
const addPopupBtn = document.getElementById("add-popup-button");
const popupBox = document.getElementById("popup-box");
const popupOverlay = document.getElementById("popup-overlay");
const cancelPopupBtn = document.getElementById("cancel-popup");
const addBookBtn = document.getElementById("add-book");
const bookList = document.getElementById("book-list");

const bookTitleInput = document.getElementById("book-title-input");
const authorNameInput = document.getElementById("author-name-input");
const descriptionInput = document.getElementById("description-input");


addPopupBtn.addEventListener("click", () => {
  popupBox.classList.add("active");
  popupBox.style.display = "block";
  popupOverlay.style.display = "block";
});


cancelPopupBtn.addEventListener("click", () => {
  popupBox.classList.remove("active");
  setTimeout(() => {
    popupBox.style.display = "none";
    popupOverlay.style.display = "none";
  }, 300);
  clearForm();
});


addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = bookTitleInput.value.trim();
  const author = authorNameInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title && author && description) {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    bookContainer.innerHTML = `
      <h2>${title}</h2>
      <h5>${author}</h5>
      <p>${description}</p>
      <button class="delete-button">Delete</button>
    `;

    bookContainer.querySelector(".delete-button").addEventListener("click", () => {
      bookList.removeChild(bookContainer);
    });

    bookList.appendChild(bookContainer);
    popupBox.classList.remove("active");
    setTimeout(() => {
      popupBox.style.display = "none";
      popupOverlay.style.display = "none";
    }, 300);
    clearForm();
  } else {
    alert("Please fill in all fields.");
  }
});

function clearForm() {
  bookTitleInput.value = "";
  authorNameInput.value = "";
  descriptionInput.value = "";
}
