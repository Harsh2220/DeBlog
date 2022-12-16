import { Web3Storage } from "web3.storage";
import { v4 as uuidv4 } from 'uuid';
import { IPFS_GATEWAY } from "../constants";

async function storeFiles(file) {
    const client = new Web3Storage({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQzQjZCNEYwMjIzQzNBYUJhYTNGY2FjNzc4QkYzZTcwMzk4MjZDMTEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzExODA4NDkwOTksIm5hbWUiOiJEZUJsb2cifQ.ReiBJRWuv4iBxqHtimFOOkSH7K-PJw5Ft5aN6cgWeCk"
    })
    const ext = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${ext}`;
    const newFile = new File([file], fileName, { type: file.type });
    const cid = await client.put([newFile], {
        name: fileName,
    });
    // const imageURI = `https://${cid}.ipfs.dweb.link/${fileName}`;
    const imageURI = `${IPFS_GATEWAY}/${cid}/${fileName}`;
    return imageURI;
}
export default storeFiles;