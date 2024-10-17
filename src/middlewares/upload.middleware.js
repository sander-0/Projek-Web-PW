import multer, { memoryStorage } from "multer";

const storage = memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Batas ukuran file 5 MB
  },
});

const single = upload.single("file");
const multiple = upload.array("files", 10);

export default {
  single,
  multiple,
};
