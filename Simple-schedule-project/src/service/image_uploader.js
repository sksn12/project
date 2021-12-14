class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "oldavulj");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dwxy9tg5k/upload",
      { method: "POST", body: data }
    );
    return await res.json();
  }
}

export default ImageUploader;
