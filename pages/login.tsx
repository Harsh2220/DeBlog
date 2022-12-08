import Router from "next/router";
import Hero from "../components/Hero";

function Login() {

    const connectWallet = async () => {
        try {
            console.log('connect')
            const { ethereum } = window;
            if (!ethereum) {
                alert("Please Install Metamask");
            }
            else {
                const getAccount = await ethereum.request({
                    method: 'eth_requestAccounts'
                });
                // state.setCurrentAccount(getAccount[0]);
                Router.push('dashboard')
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
            <Hero connectWallet={connectWallet} />
    )
}

export default Login