import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import CountryCard from './components/CountryCard';
import Snackbar from 'react-native-snackbar';

function App(): JSX.Element {
  const [convertedAmount, setConvertedAmount] = useState<number>(-1);
  const [selectedCountry, setSelectedCountry] = useState("")
  const [amount, setAmount] = useState<number>(0)



  const CountryList: Country[] = [
    {
      name: 'India',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
      relationWithINR: 1
    },
    {
      name: 'USA',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
      relationWithINR: 0.016
    },
    {
      name: 'China',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png',
      relationWithINR: 0.015
    },
    {
      name: 'European Union',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png',
      relationWithINR: 0.015
    },
    {
      name: 'Brazil',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png',
      relationWithINR: 0.0026
    },
    {
      name: 'Japan',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png',
      relationWithINR: 0.061
    },
    {
      name: 'Canada',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1200px-Flag_of_Canada.svg.png',
      relationWithINR: 0.010
    },
    {
      name: 'Australia',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1200px-Flag_of_Australia.svg.png',
      relationWithINR: 0.0095
    },
    {
      name: 'Russia',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png',
      relationWithINR: 0.013
    },
    {
      name: 'South Korea',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png',
      relationWithINR: 0.010
    },
    {
      name: 'Mexico',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png',
      relationWithINR: 0.0008
    },
    {
      name: 'Saudi Arabia',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png',
      relationWithINR: 0.0035
    },
    {
      name: 'Switzerland',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1200px-Flag_of_Switzerland.svg.png',
      relationWithINR: 0.014
    },
    {
      name: 'Turkey',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png',
      relationWithINR: 0.0005
    },
    {
      name: 'Singapore',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png',
      relationWithINR: 0.0072
    },
    {
      name: 'United Arab Emirates',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png',
      relationWithINR: 0.0036
    },
    {
      name: 'Blockchain',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bitcoin_symbol.svg/1200px-Bitcoin_symbol.svg.png',
      relationWithINR: 0.0000001 // Just an example value, blockchain doesn't have a direct currency relation
    }
  ];

  console.log(amount);

  const amountCalculator = () => {
    if (selectedCountry === "") {
      Snackbar.show({
        text: "Select a country first",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    } else if (amount === 0) {
      Snackbar.show({
        text: "Enter a valid amount",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })

    } else {
      const selectedCountryRelationWithINR = CountryList.filter((country) => country.name === selectedCountry);
      const relationWithINR = selectedCountryRelationWithINR[0]?.relationWithINR || 0;
      const parsedAmount = amount * relationWithINR;
      const fixedAmount = parsedAmount.toFixed(2);
      setConvertedAmount(parseFloat(fixedAmount));
    }

  }


  return (
    <View style={styles.container}>
      <View style={styles.TopView}>
        <Text style={styles.title}>Currency Value in INR ₹:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setAmount(parseFloat(text))}
          placeholder='Enter amount'
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button19Reset} onPress={() => { setConvertedAmount(-1); setSelectedCountry(""); }}>
            <Text style={styles.button19Text}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button19} onPress={amountCalculator}>
            <Text style={styles.button19Text}>Submit</Text>
          </TouchableOpacity>
        </View>
        {convertedAmount !== -1 && <Text style={styles.amountText}>{convertedAmount}</Text>}
      </View>

      <View style={styles.CountryCardContainer}>
        <CountryCard
          setSelectedCountry={setSelectedCountry}
          CountryList={CountryList}
          selectedCountry={selectedCountry}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  TopView: {
    flex: 1,
    justifyContent: 'center',
  },
  CountryCardContainer: {
    flex: 1.5, // 60% of the screen height
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    minWidth: '80%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: '#333333',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  button19: {
    backgroundColor: '#1899D6',
    borderRadius: 16,
    paddingVertical: 13,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    position: 'relative',
  },
  button19Reset: {
    backgroundColor: '#697888',
    borderRadius: 16,
    paddingVertical: 13,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    position: 'relative',
  },
  button19Text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  amountText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  },
});


export default App;
