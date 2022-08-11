import { useState } from "react";
import { create } from "ipfs-http-client";

const projectId = "2DBQTJRkI54V3cB5fDWTDmcx6xB";
const projectSecret = "6d4eed6d03c4f135d2dc8b1e70a970b4";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = create({
  host: "nft-project.infura-ipfs.io",
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [urlArr, setUrlArr] = useState([]);

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(Buffer(reader.result));
    };

    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const created = await client.add(file);
      console.log(created.path);
      const url = `https://nft-project.infura-ipfs.io/ipfs/${created.path}`;
      console.log(url);
      setUrlArr((prev) => [...prev, url]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="display">
        {urlArr.length !== 0 ? (
          urlArr.map((el) => <img src={el} alt="nfts" />)
        ) : (
          <h3>Upload data</h3>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="data" onChange={retrieveFile} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
