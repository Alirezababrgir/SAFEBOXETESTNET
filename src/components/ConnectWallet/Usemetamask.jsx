import { useState } from 'react';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';
export const useMetamask = () => {

  const [isConnected, setIsConnected] = useState(false);
  const [web3, setWeb3] = useState(null);
  const navigate = useNavigate()
  const web3Instance = new Web3(window.ethereum);

  const connectMetamask = async () => {

    if (window.ethereum) {

      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x13881' }], // chainId must be in hexadecimal numbers
        });
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWeb3(web3Instance);
        setIsConnected(true);
        setInterval(() => {
          navigate("/signup")
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    }
    else {
      alert('Please install MetaMask to use this feature');
    }
  };
  return { isConnected, web3, connectMetamask, setIsConnected, web3Instance, setWeb3 };
};
