const toDataURI = (file) => {
    const b64 = Buffer.from(file.buffer).toString("base64");
    let dataURI = "data:" + file.mimetype + ";base64," + b64;
    return dataURI;
  };
  
  export default {
    toDataURI,
  };
  