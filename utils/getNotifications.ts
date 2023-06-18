import { BigNumber, ethers } from "ethers";
import * as PushAPI from "@pushprotocol/restapi";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";
declare var window: any;

async function getNotifications(){
    try {
        const { ethereum } = window;
        if (!ethereum) {
          throw new Error("Please Install Metamask");
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = signer.getAddress();
        const notifications = await PushAPI.user.getFeeds({
            user: `eip155:5:${userAddress}`,
            env: ENV.STAGING,
          });
          return notifications
    } catch (error) {
        if (error instanceof Error) {
            throw new Error("User Denied Signature Request");
        }
    }
}

export default getNotifications;