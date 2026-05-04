import '@ethersphere/bee-dashboard/style.css'
import BeeDashboardLib from '@ethersphere/bee-dashboard'
import React from 'react'
import { createRoot } from 'react-dom/client'

import { GIFT_WALLET_BZZ_PLUR_AMOUNT, GIFT_WALLET_DAI_WEI_AMOUNT } from '../../src/gift-wallet-fees'

// Older bee-dashboard versions don't declare giftWalletFees in Props; the cast keeps TypeScript
// happy while React silently ignores the prop on components that don't consume it.
const BeeDashboard = BeeDashboardLib as React.ComponentType<
  React.ComponentProps<typeof BeeDashboardLib> & { giftWalletFees?: { bzz: string; dai: string } }
>

const GIFT_WALLET_FEES = { bzz: GIFT_WALLET_BZZ_PLUR_AMOUNT, dai: GIFT_WALLET_DAI_WEI_AMOUNT }

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BeeDashboard isDesktop={true} giftWalletFees={GIFT_WALLET_FEES} />
  </React.StrictMode>,
)
