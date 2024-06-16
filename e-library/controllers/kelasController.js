const Kelas = require("../models/kelasModel");
const ModePembelajaran = require("../models/modePembelajaranModel");

exports.getAllKelas = async (req, res) => {
  try {
    const kelas = await Kelas.getAll();
    const data = await Promise.all(
      kelas.map(async (k) => {
        const modePembelajaran = await ModePembelajaran.getByKelasId(k.id);
        return { ...k, modePembelajaran };
      })
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
