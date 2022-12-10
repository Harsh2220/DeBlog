const connectWallet = async () => {
  try {
    const { ethereum }: any = window;
    if (!ethereum) {
      alert("Please Install Metamask");
    } else {
      const getAccount = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(getAccount[0]);
      return getAccount[0]
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectWallet;