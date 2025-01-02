import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CurrencyConversionProps {
  amount: number; // Amount to be converted
  fromCurrency: string; // Currency the amount is in
  toCurrency: string; // Target currency
  onConversionComplete: (convertedAmount: number) => void; // Callback to update the converted amount
}

const CurrencyConversion: React.FC<CurrencyConversionProps> = ({
  amount,
  fromCurrency,
  toCurrency,
  onConversionComplete,
}) => {
  const [rates, setRates] = useState<any>({});
  const [error, setError] = useState<string>('');

  const apiKey = '1b84d4dee46440448e115439ccca66ee'; // Replace with your Open Exchange Rates API key

  useEffect(() => {
    axios
      .get(`https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=${fromCurrency}`)
      .then((response) => {
        setRates(response.data.rates); // Store the rates
      })
      .catch((err) => {
        setError('Error fetching exchange rates');
        console.error(err);
      });
  }, [fromCurrency]);

  useEffect(() => {
    if (rates[toCurrency] && amount > 0) {
      const convertedAmount = amount * rates[toCurrency];
      onConversionComplete(convertedAmount); // Pass converted amount to parent
    }
  }, [amount, rates, toCurrency, onConversionComplete]);

  return (
    <div>
      {error && <p>{error}</p>}
      {!error && rates[toCurrency] && (
        <p>
          {amount} {fromCurrency} = {amount * rates[toCurrency]} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConversion;
