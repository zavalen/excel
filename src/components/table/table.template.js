const CODES = {
  A: 65,
  Z: 90,
};

function toColumn(col) {
  return `
  <div class="column">${col}</div>
  `;
}

function createRow(content, rowNumber) {
  return `
  <div class="row">
    <div class="row-info">${rowNumber || ''}</div>
    <div class="row-data">${content}</div>
  </div>
  `;
}

function toCell() {
  return `
  <div class="cell" contenteditable="true"></div>
  
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)

    .join('');

  console.log(cols);

  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(rowsCount).fill('').map(toCell).join('');
    rows.push(createRow(cells, i + 1));
  }

  return rows.join('');
}
