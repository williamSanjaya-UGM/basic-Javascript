function sortByPriceAscending(jsonString) {
  let parsed = JSON.parse(jsonString);

  parsed = parsed.sort((a, b) => a.price - b.price);
  return JSON.stringify(parsed);
}

console.log(
  sortByPriceAscending(
    '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'
  )
);
