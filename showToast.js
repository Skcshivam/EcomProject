export function showToast(operation, id) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  //set their text content of the toast based on the operation

  if (operation == "delete") {
    toast.textContent = `Product with ${id} has been Deleted.`;
  } else {
    toast.textContent = `Product with ${id} has been Added.`;
  }

  document.body.appendChild(toast);

  //Automatically remove after a few second

  setTimeout(() => {
    toast.remove();
  }, 2000);
}
