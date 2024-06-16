const db = require("../config/db");

const Kelas = {
  getAll: async () => {
    const [rows] = await db.execute("SELECT * FROM kelas");
    return rows;
  },
};

module.exports = Kelas;
