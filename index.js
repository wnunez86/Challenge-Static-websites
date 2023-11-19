function showModal(id) {
    const modal = document.getElementById(id)
    if (modal) {
      modal.showModal()
    } else {
      console.warn("The provided modal wasn't found. ID: ", id)
    }
  }
  
  // This document object is provided by the browser, and its main purpose is to help us interact with the DOM.
  const newUserBtn = document.getElementById("new-user-btn")
  if (newUserBtn) {
    newUserBtn.addEventListener("click", () => {showModal("new-user-modal")})
  } else {
    console.warn("New users button was not found")
  }
  
  const userForm = document.getElementById("new-user-form")
  if (userForm) {
    userForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(userForm)
      console.log("Description:", formData.get("description"))
    })
  } else {
      console.warn("The user form was not found. Check the ID!")
  }