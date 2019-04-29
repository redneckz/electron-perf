const { formatCell } = require('./formatCell');

const DEFAULT_COL_COUNT = 10;

function generateRows(rowCount) {
  const tbody = document.createDocumentFragment();
  Array(rowCount).fill(null)
    .map((_, r) => generateRow(r))
    .forEach((tr) => {
      tbody.appendChild(tr);
    });
  return tbody;
}

function generateRow(r) {
  const tr = document.createElement('tr');
  Array(DEFAULT_COL_COUNT).fill(null).map(
    (_, c) => {
      const td = document.createElement('td');
      td.innerText = formatCell(r, c);
      return td;
    },
  ).forEach((td) => {
    tr.appendChild(td);
  });
  return tr;
}

module.exports = { generateRows };
