import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

//Internal Import
import {
    CheckIfWalletConnected,
    connectWallet,
    connectingWithContract,
} from "../Utils/apiFeature";

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({ children }) => {

    //UseState
    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendLists, setFriendLists] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error, setError] = useState("");


    //Chat User Data
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");

    const router = useRouter();


    //Fetch data time of page load
    const fetchData = async () => {
        try {
            //Get contract
            const contract = await connectingWithContract();

            //Get Account
            const connectAccount = await connectWallet();
            setAccount(connectAccount);
            console.log(connectAccount);

            //Get UserName
            const userName = await contract.getUsername(connectAccount);
            setUserName(userName);

            //Get Friend List
            const friendLists = await contract.getMyFriendList();
            setFriendLists(friendLists);
            // console.log(friendLists);

            //Get all app users
            const userList = await contract.getAllAppUser();
            setUserLists(userList);

        }
        catch (error) {
            // setError("Please Install and connect your wallet");
            // console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    //Read Message
    const readMessage = async (friendAddress) => {

        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        }
        catch (error) {
            console.log("Currently you have no message");
        }
    };


    //Create Account
    const createAccount = async ({ name, accountAddress }) => {
        try {
            //if (name || accountAddress) return setError("Name and Account address cannot be empty");

            const contract = await connectingWithContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        }
        catch (error) {
            setError("Error while creating your account, please reload the brower and try again");
            //console.log(error);
        }
    };


    //Add your friends
    const addFriends = async ({ name, accountAddress }) => {
        try {
            // if (name || accountAddress) return setError("Please provide name and account address");

            const contract = await connectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push("/");
            window.location.reload();
        }
        catch (error) {
            setError("Something went wrong while adding your friend, Please try again");
        }
    };


    //Send messages to your friends
    const sendMessage = async ({ msg, address }) => {
        try {
            //if (msg || address) return setError("Please type your message");

            const contract = await connectingWithContract();
            const addMessage = await contract.sendMessage(address, msg);
            setLoading(true);
            await addMessage.wait();
            setLoading(false);
            window.location.reload();
        }
        catch (error) {
            setError("Something went wrong while sending message, Please try again");
        }
    };


    //Read user information
    const readUser = async (userAddress) => {
        const contract = await connectingWithContract();
        const userName = await contract.getUsername(userAddress);
        setCurrentUserName(userName);
        setCurrentUserAddress(userAddress);
    };

    return (
        <ChatAppContext.Provider
            value={{
                readMessage,
                createAccount,
                addFriends,
                sendMessage,
                readUser,
                connectWallet,
                CheckIfWalletConnected,
                account,
                userName,
                friendLists,
                friendMsg,
                loading,
                userLists,
                error,
                currentUserName,
                currentUserAddress,
            }}
        >
            {children}
        </ChatAppContext.Provider>
    );
};


