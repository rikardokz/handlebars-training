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

/* Let’s recap a few key points:

Handlebars is an external library used to create templates which are a mix of HTML, text, and expressions.
Handlebars uses expressions which are wrapped inside double braces like: {{someVariable}}
A script tag with a type of "text/x-handlebars-template" is used to deliver a template to the browser.
Handlebar.compile() returns a templating function from a template script intended for Handlebars.
A template created from .compile() will take an object as an argument and use it as context to generate a string containing HTML.
Handlebars has built in block helpers which can be included in a Handlebars script.
Block helpers have a starting expression and an ending expression. The starting expression will have a # appears before a keyword. The ending expression will have the same keyword but with a / character to denote the end.
The {{if}} will conditionally render a block of code.
An {{else}} expression can be inserted into an if helper block and used as part of the conditional statement.
{{each}} is another built-in helper expression which accepts an an array to iterate through.
In the block helper functions, the {{this}} expression gives context and serves as a placeholder for the current value. */
