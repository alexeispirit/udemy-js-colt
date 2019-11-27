const layout = require("../layout");
const { getError } = require("../../helpers");

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div>
        Your id is: ${req.session.userId}
        <form method="POST">
          <input placeholder="email" name="email" />
          ${getError(errors, "email")}
          <input placeholder="password" name="password" />
          ${getError(errors, "password")}
          <input placeholder="password confirmation" name="passwordConfirmation" />
          ${getError(errors, "passwordConfirmation")}
          <button>Sign Up</button>
        </form>
      </div>
    `
  });
};
