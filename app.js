const button = document.getElementById("not-motivated");

// element and HTML content in script tag
const source = document.getElementById("entry-template").innerHTML;
// compiled by handlebards
const template = Handlebars.compile(source);
// added object with values to be used in html script tags
const context = {
  name: "Ricardo",
  age: 34,
  motivated: true,
  month: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  frameworks: [{ name: "React" }, { name: "Vue" }, { name: "Angular" }],
};

// added the context to a template
const compiledHtml = template(context);
// selected a html element in the "real" html
const container = document.getElementById("container");
// added the context to the inner html of the container to the DOM
container.innerHTML = compiledHtml;
