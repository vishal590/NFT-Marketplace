import '../styles/globals.css'
import {NavLink} from './NavLink.js';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse nftMarketplace</p>
        <div className="flex mt-4">
          <NavLink  to="/" href="/">
              Home
          </NavLink >
          <NavLink  href="/create-nft" to="/create-nft">
              Sell NFT
          </NavLink >
          <NavLink  href="/my-nfts" to="/my-nfts">
              My NFTs
          </NavLink >
          <NavLink  href="/dashboard" to="/dashboard">
              Dashboard
          </NavLink >
          <NavLink  href="/create-nft.js" to="/create-nft.js">
            Page Listing
          </NavLink >
          <NavLink  href="/resell" to="/resell">
            Resell token
          </NavLink >
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
