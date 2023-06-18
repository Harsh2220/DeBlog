/**
 *
 * @param imageBlob Blob of Image
 * @returns CID of image
 */

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQzQjZCNEYwMjIzQzNBYUJhYTNGY2FjNzc4QkYzZTcwMzk4MjZDMTEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzExODA4NDkwOTksIm5hbWUiOiJEZUJsb2cifQ.ReiBJRWuv4iBxqHtimFOOkSH7K-PJw5Ft5aN6cgWeCk";

const uploadMetadata = async (metadata: string): Promise<string> => {
  try {
    const headersList = {
      Authorization: `Bearer ${TOKEN}`,
    };
    const filehash = await fetch("https://api.web3.storage/upload", {
      method: "POST",
      headers: headersList,
      body: metadata,
    });
    const data = await filehash.json();
    return data.cid;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
export default uploadMetadata;
