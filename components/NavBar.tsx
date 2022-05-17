import React, { useState } from 'react'
import { Wallet, Chain, Network } from 'mintbase'

function NavBar() {
    
    const [isConnected, setIsConnected] = useState(false);
    const [wallet, setWallet] = useState({});
    const [data, setData] = useState({});
    
    // Connect and fetch details
    async function connect() {
      const { data: walletData, error } = await new Wallet().init({
        networkName: Network.testnet,
        chain: Chain.near,
        apiKey: "5759bd06-adb1-427e-9705-5d5e31c6a328",
      })
    
      const { wallet, isConnected } = walletData
      setWallet(wallet)


      if (isConnected) {
    
        console.log(await wallet.details());
        
        setData(await wallet.details())
        /*
          accountId: "qwerty.testnet"
          allowance: "0.25"
          balance: "365.77"
          contractName: "mintbase13.testnet"
        */
       setIsConnected(isConnected)
      }
    }
    connect()
    console.log(isConnected);

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com" className="flex items-center">
                    <img src="./logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                        <li>
                            <button  onClick={() => wallet.connect({ requestSignIn: true })} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar