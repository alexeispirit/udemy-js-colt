module.exports = ({ req }) => {
  return `
    <div>
      Your id is: ${req.session.userId}
      <form method="POST">
        <input placeholder="email" name="email" />
        <input placeholder="password" name="password" />
        <input placeholder="password confirmation" name="passwordConfirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `;
};