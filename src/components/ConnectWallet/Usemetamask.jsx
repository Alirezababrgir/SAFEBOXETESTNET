import { useState } from 'react';
import Web3 from 'web3';

export const useMetamask = () => {

  const [isConnected, setIsConnected] = useState(false);
  const [web3, setWeb3] = useState(null);
  const web3Instance = new Web3(window.ethereum);

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWeb3(web3Instance);
        setIsConnected(true);
      } catch (error) {
        console.error(error);
      }
    }
    else {
      alert('Please install MetaMask to use this feature');
    }
  };
  return { isConnected, web3, connectMetamask, setIsConnected,web3Instance ,setWeb3,setIsConnected};
};
