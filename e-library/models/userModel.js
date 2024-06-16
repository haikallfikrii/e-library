const db = require("../config/db");

const User = {
  create: async (name, email, password) => {
    const [result] = await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    return result;
  },
  findByEmail: async (email) => {
    const [result] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return result[0];
  },
  findById: async (id) => {
    const [result] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    return result[0];
  },
};

module.exports = User;
