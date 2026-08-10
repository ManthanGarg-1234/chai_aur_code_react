import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * (currencyInfo[to] ?? 0));
    };

    return (
        <div className="currency-app">

            {/* Background decoration */}
            <div className="background-overlay"></div>

            <div className="market-line market-line-1"></div>
            <div className="market-line market-line-2"></div>
            <div className="market-line market-line-3"></div>

            <div className="chart-bars">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="percentage percentage-1">+12.5%</div>
            <div className="percentage percentage-2">-3.9%</div>
            <div className="percentage percentage-3">+5.2%</div>

            {/* Main converter */}
            <div className="converter-wrapper">

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                    className="converter-card"
                >

                    {/* FROM */}
                    <div className="input-wrapper">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>

                    {/* SWAP */}
                    <div className="swap-container">
                        <button
                            type="button"
                            className="swap-button"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>

                    {/* TO */}
                    <div className="input-wrapper to-wrapper">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>

                    {/* CONVERT */}
                    <button
                        type="submit"
                        className="convert-button"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>

                </form>

            </div>
        </div>
    );
}

export default App;