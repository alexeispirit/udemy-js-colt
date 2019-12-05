const assert = require("assert");

it("has a text input", async () => {
  const dom = await render("index.html");
  const input = dom.window.document.querySelector("input");

  assert(input);
});

it("shows a success message with a valid email", async () => {
  const dom = await render("index.html");
  const input = dom.window.document.querySelector("input");

  input.value = "asfsdfsf@safas.com";
  dom.window.document
    .querySelector("form")
    .dispatchEvent(new dom.window.Event("submit"));

  const h1 = dom.window.document.querySelector("h1");

  assert.strictEqual(h1.innerText, "Looks good!");
});

it("shows a fail message with a invalid email", async () => {
  const dom = await render("index.html");
  const input = dom.window.document.querySelector("input");

  input.value = "asfsdfsf";
  dom.window.document
    .querySelector("form")
    .dispatchEvent(new dom.window.Event("submit"));

  const h1 = dom.window.document.querySelector("h1");

  assert.strictEqual(h1.innerText, "Invalid email");
});
