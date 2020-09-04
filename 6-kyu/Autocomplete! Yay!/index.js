function autocomplete(input, dictionary) {
  let cleanInput = input.replace(/[^a-zA-Z]/g, "");
  return dictionary
    .filter(word => word.toLowerCase().startsWith(cleanInput) && word.toLowerCase().indexOf(cleanInput) >= 0)
    .slice(0,5);
}