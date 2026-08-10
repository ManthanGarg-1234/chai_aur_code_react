function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    return (
        <div className="currency-box">

            {/* LEFT SIDE */}
            <div className="amount-section">

                <label className="input-label">
                    {label}
                </label>

                <input
                    className="amount-input"
                    type="number"
                    value={amount}
                    onChange={(e) =>
                        onAmountChange &&
                        onAmountChange(Number(e.target.value))
                    }
                    disabled={amountDisable}
                    placeholder="0"
                />

            </div>

            {/* RIGHT SIDE */}
            <div className="currency-section">

                <label className="currency-label">
                    Currency Type
                </label>

                <select
                    className="currency-select"
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange &&
                        onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option
                            key={currency}
                            value={currency}
                        >
                            {currency}
                        </option>
                    ))}
                </select>

            </div>

        </div>
    );
}

export default InputBox;