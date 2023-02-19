function deleteCat(catId) {
  return database.delete("cats", catId);
}

function deleteButtonClickHandler(e) {
  const catId = e.target.data["cat-id"];
  deleteCat(catId)
    .then(() => removeItemElementFromPage(catId))
    .catch((err) =>
      showMessageDialog("item" + getCatName(catId) + "Was not deleted")
    );
}
