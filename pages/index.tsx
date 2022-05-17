import type { NextPage } from "next";
import Example from "../components/Example";
import NavBar from "../components/NavBar";
import { MbThingCard, MbIcon, EIconName,MbSmallCard } from 'mintbase-ui';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <header className=" shadow h-40 items-center mx-auto" style={{ backgroundColor: '#D2D4DA' }}>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 items-center" style={{ textAlign: 'center' }}>

          <div >
        

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
              <MbSmallCard
                className="object-center mx-auto rounded-full"
                card={{
                  centerElement: <img className="h-full w-full object-cover" src="./Vector.png" />,
                  title: 'Account Name'
                }}
                cardType="profile"
              />
            </div>
          </div>
        </div>
      </header>
      <header className="p-8 content-center" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 content-center">
          <h5>Minted</h5>
        </div>
      </header>
      <div className="grid grid-cols-4 gap-4 p-10">

        <MbThingCard
          cardInfo={{
            botLeftImage: 'https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU',
            botRightIcon: 'filter_none',
            botRightText: '5/10',
            centerElement: <img className="h-full w-full object-cover" src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU" />,
            midLeftText: 'Thing Name',
            midRightText: '10 N',
            nftTypeIcon: 'image',
            onBotLeftImageClick: function noRefCheck() { },
            onCenterElementClick: function noRefCheck() { },
            onUpperLeftClick: function noRefCheck() { },
            onUpperRightClick: function noRefCheck() { },
            upperLeftText: '1',
            upperRightElement: <MbIcon name={EIconName.MORE} color={""} />
          }}
        />

      </div>
    </>
  );
};

export default Home;
