import { FC, useState } from "react";
import { ethers } from "ethers";
import { Erc20__factory } from "../contracts/types";


const Index: FC = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [account, setAccount] = useState<string>();
  const [tokenBalance, setTokenBalance] = useState<string>();

  const connect = async () => {
    if (!window.ethereum?.request) {
      alert("MetaMask is not installed!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setProvider(provider);
    setAccount(accounts[0]);
  };

  const getTokenBalance = async () => {
    if (provider && account) {
      const TOKEN_ADDR = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
      const token = Erc20__factory.connect(TOKEN_ADDR, provider.getSigner());

      const rawBalance = await token.balanceOf(account);
      const decimals = await token.decimals();

      const balance = ethers.utils.formatUnits(rawBalance, decimals);
      setTokenBalance(balance);
    }
  };

  return (
    <>
      <button onClick={connect}>Connect</button>

      <link href="./home.css" rel="stylesheet" />
      <div className="home-container">
        <div className="navbar-container">
          <div className="max-width">
            <div className="home-logo">
              <img
                alt="image"
                src="/playground_assets/group%202.svg"
                className="home-image"
              />
              <span className="brand-Name">
                <span className="home-text01">Weedback</span>
              </span>
            </div>
            <div className="home-links">
              <span className="home-text02 navbar-Link"></span>
            </div>
            <div className="home-burger-menu navbar-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="hero-container section-container">
          <div className="home-max-width1 max-width">
            <div className="home-content">
              <span className="home-subtitle before-Heading">
                <span>Weedback</span>
              </span>
              <h1 className="home-title">
                <span className="home-text04">
                  A D.A.O promoting reliabilty, quality and equality in the craft
                  cannabis community.
                </span>
              </h1>
              <div className="home-container1"></div>
            </div>
            <div className="home-image1">
              <img
                alt="image"
                src="/playground_assets/union-400w.png"
                className="home-graphic-top"
              />
              <img
                alt="image"
                src="/playground_assets/group%2018-1200w.png"
                className="home-image2"
              />
            </div>
            <img
              alt="image"
              src="/playground_assets/photo_2022-08-10_01-38-10-700h.jpg"
              className="home-image3"
            />
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-width">
            <div className="home-image4">
              <img
                alt="image"
                src="/playground_assets/photo_2022-08-10_00-01-45-1100w.jpg"
                className="home-image5"
              />
            </div>
          </div>
        </div>
        <div className="home-section1 section-container">
          <div className="home-max-width3 max-width">
            <div className="home-content1">
              <h1 className="home-text05">Cannabis #1</h1>
              <span className="home-text06">
                <span>Producer name</span>
                <br />
                <span></span>
                <br />
                <span>Strain Name</span>
                <br />
                <span></span>
                <br />
                <span>Cultivation</span>
                <br />
                <span>Quality grade - A, AA, AAA</span>
                <br />
                <span>Nutrient input - organic, regenerative, or conventional</span>
                <br />
                <span>Method - Hydroponics, soil or soilless</span>
                <br />
                <span></span>
                <br />
                <span>Product</span>
                <br />
                <span>Flower</span>
                <br />
                <span>Extraction method (water, alcohol, oil)</span>
                <br />
                <span>Extracts (hash, rosin,</span>
                <br />
                <span>Edibles</span>
                <br />
                <span>THC concentration</span>
                <br />
                <span>Terpene profile</span>
                <br />
                <span></span>
                <br />
                <br />
                <span>Effects</span>
                <br />
                <span>Euphoric</span>
                <br />
                <span>Energetic</span>
                <br />
                <span>Creative</span>
                <br />
                <span>Pine</span>
                <br />
                <span>Spicy/Herbal</span>
                <br />
                <span>Lemon</span>
              </span>
              <div className="home-container2"></div>
            </div>
            <img
              alt="image"
              src="/playground_assets/photo_2022-08-10_01-41-23-600w.jpg"
              className="home-image6"
            />
            <div className="home-image7"></div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Index;