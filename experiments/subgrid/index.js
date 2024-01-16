const chkUseSubgrid = document.getElementById('use-subgrid')
const grid = document.getElementById('gallery-grid')
chkUseSubgrid.addEventListener('change', event => {
  grid.classList.toggle('grid--symmetric', chkUseSubgrid.checked)
})