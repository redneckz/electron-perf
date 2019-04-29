const { formatCell } = require('./formatCell');
const { generateRows } = require('./generateRows.js');

const DEFAULT_ROW_COUNT = 1000;

const dataSizeInput = document.getElementById('dataSize');
const dataTable = document.getElementById('dataTable');

fillDataTable(DEFAULT_ROW_COUNT);

dataSizeInput.onchange = fillDataTable;

requestAnimationFrame(animate);

function animate(timestamp) {
  const delta = timestamp - (animate.timestamp || 0);
  animate.timestamp = timestamp;
  document.title = `[Electron perf] ${Math.ceil(1000 / delta)} fps`;

  updateDataTable();

  requestAnimationFrame(animate);
}

function fillDataTable() {
  const { value } = dataSizeInput;
  const dataSize = value * DEFAULT_ROW_COUNT;

  const tbody = document.createElement('tbody');
  tbody.appendChild(generateRows(dataSize));

  dataTable.lastChild.replaceWith(tbody);
}

function updateDataTable() {
  dataTable.lastChild.childNodes.forEach((tr, r) => {
    tr.childNodes.forEach((td, c) => {
      td.innerText = formatCell(r, c); // eslint-disable-line
    });
  });
}
