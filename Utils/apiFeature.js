import { ethers } from "ethers";
import Web3modal from "web3modal";

import { ChatAppAddress, ChatAppABI } from "../Context/constants";

export const CheckIfWalletConnected = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        const firstAccount = accounts[0];
        return firstAccount;
    }
    catch (error) {
        console.log(error);
    }
};

export const connectWallet = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        const firstAccount = accounts[0];
        return firstAccount;
    }
    catch (error) {
        console.log(error);
    }
};


const fetchContract = (signerOrProvider) =>
    new ethers.Contract(ChatAppAddress, ChatAppABI, signerOrProvider);


export const connectingWithContract = async () => {

    try {
        const web3modal = new Web3modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        return contract;

    }
    catch (error) {
        console.log(error);
    }
};


export const converTime = (time) => {
    const newTime = new Date(time.toNumber() * 1000); // Multiply by 1000 to convert from seconds to milliseconds

    const realTime =
        newTime.getHours() +
        ":" +
        (newTime.getMinutes() < 10 ? '0' : '') + newTime.getMinutes() + // Add leading zero if minutes is less than 10
        ":" +
        (newTime.getSeconds() < 10 ? '0' : '') + newTime.getSeconds() + // Add leading zero if seconds is less than 10
        " Date:" +
        newTime.getDate() +
        "/" +
        (newTime.getMonth() + 1) + // Months are zero-based, so add 1 to get the correct month
        "/" +
        newTime.getFullYear();

    return realTime;
}


