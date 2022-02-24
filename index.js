console.log("Hey Tai!");

fetch("https://api.aakhilv.me/facts/json")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayfactgenerator(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayfactgenerator(data) {
    document.getElementById("factgenerator");
}