const dialogTriggers = document.querySelectorAll('button[data-dialog]')
dialogTriggers.forEach(button => {
  const dialogId = button.dataset.dialog

  if (dialogId != null && dialogId.length > 0) {
    const dialog = document.getElementById(dialogId)
    if (dialog != null) {
      button.addEventListener('click', e => dialog.show())
    }
  }
})