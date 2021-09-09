function solve(text,type) {
  let text = document.getElementById('text').value;
  let type = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  if(type === "Camel Case"){
    resultElement.textContent = text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return "";
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
}
solve("this is an example", "Camel Case")
