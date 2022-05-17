import type { NextPage } from "next";
import Example from "../components/Example";
import NavBar from "../components/NavBar";
import { MbThingCard, MbIcon, EIconName, MbSmallCard } from 'mintbase-ui';
import { useWallet } from '../context/MintbaseWalletProvider';
import Minter from "../components/Minter";
import { useQuery } from "@apollo/client";
import { FETCH_NFT } from "../queries/example";

const Home: NextPage = () => {

  const { wallet, isConnected, details } = useWallet()
  
  return (
    <>
      <NavBar isConnected={isConnected} wallet={wallet} details={details} />
      <header className=" shadow h-40 items-center mx-auto" style={{ backgroundColor: '#D2D4DA' }}>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 items-center" style={{ textAlign: 'center' }}>
          <div className="mx-auto items-center" >
            <div className="" >
              <MbSmallCard
                card={{
                  centerElement: <img className=" h-full w-full object-cover" src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU" />,
                  title: isConnected ? details.accountId : 'Not Connected'
                }}
                cardType="profile"
              />
            </div>
          </div>
        </div>
      </header>

      <Minter/>
    </>
  );
};

export default Home;
