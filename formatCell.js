function formatCell(r, c) {
  return `[${r},${c}]${msecsSinceStartOfDay()}`;
}

function msecsSinceStartOfDay() {
  return Date.now() - new Date().setHours(0, 0, 0, 0);
}

module.exports = { formatCell };
