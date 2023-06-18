import { BigNumber, ethers } from "ethers";
import * as PushAPI from "@pushprotocol/restapi";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";
declare var window: any;

async function optInUser(){
    try {
        const { ethereum } = window;
        if (!ethereum) {
          throw new Error("Please Install Metamask");
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        console.log(userAddress);
        
        const response = await PushAPI.channels.subscribe({
            signer: signer,
            channelAddress: 'eip155:5:0xe55251E17F16Aee1631ff1B274c0779b3c233286', // channel address in CAIP
            userAddress: `eip155:5:${userAddress}`, // user address in CAIP
            onSuccess: () => {
             console.log('opt in success');
            },
            onError: () => {
              console.error('opt in error');
            },
            env: ENV.STAGING
          });
          console.log(response);
          
          return response;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error("User Denied Signature Request");
        }
    }
}

export default optInUser;