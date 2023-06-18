import { BigNumber, ethers } from "ethers";
import * as PushAPI from "@pushprotocol/restapi";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";
declare var window: any;

async function broadcastNotification(){
    try {
        const { ethereum } = window;
        if (!ethereum) {
          throw new Error("Please Install Metamask");
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = signer.getAddress();
        const response = await PushAPI.payloads.sendNotification({
            signer: signer,
            type: 1, // broadcast
            identityType: 2, // direct payload
            notification: {
              title: `[SDK-TEST] notification TITLE:`,
              body: `[sdk-test] notification BODY`
            },
            payload: {
              title: `[sdk-test] payload title`,
              body: `sample msg body`,
              cta: '',
              img: ''
            },
            channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
            env: ENV.STAGING
          });
          return response
    } catch (error) {
        if (error instanceof Error) {
            throw new Error("User Denied Signature Request");
        }
    }
}

export default broadcastNotification;