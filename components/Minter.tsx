

import { MetadataField } from 'mintbase'
import { useQuery } from '@apollo/client';
// import { gql } from 'apollo-boost';


import { useState, useEffect } from 'react'

import { useWallet } from '../context/MintbaseWalletProvider'
import { MbThingCard, MbIcon, EIconName } from 'mintbase-ui'
import { FETCH_NFT } from "../queries/example";



function Minter() {
    const { wallet, isConnected, details } = useWallet();

    return (
        <div className="grid grid-cols-4 gap-4 p-10">
            <MbThingCard
                cardInfo={{
                    botLeftImage: 'https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU',
                    botRightIcon: 'filter_none',
                    botRightText: '5/10',
                    centerElement: <img className="h-full w-full object-cover" src="./red.png" />,
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

<MbThingCard
                cardInfo={{
                    botLeftImage: 'https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU',
                    botRightIcon: 'filter_none',
                    botRightText: '5/10',
                    centerElement: <img className="h-full w-full object-cover" src="./red.png" />,
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
            /><MbThingCard
            cardInfo={{
                botLeftImage: 'https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU',
                botRightIcon: 'filter_none',
                botRightText: '5/10',
                centerElement: <img className="h-full w-full object-cover" src="./red.png" />,
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
        /><MbThingCard
        cardInfo={{
            botLeftImage: 'https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU',
            botRightIcon: 'filter_none',
            botRightText: '5/10',
            centerElement: <img className="h-full w-full object-cover" src="./red.png" />,
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
    /><MbThingCard
    cardInfo={{
        botLeftImage: 'https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU',
        botRightIcon: 'filter_none',
        botRightText: '5/10',
        centerElement: <img className="h-full w-full object-cover" src="./red.png" />,
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
    )
}

export default Minter