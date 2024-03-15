import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';

export default function App() {
  const [numberBalls, setNumberBalls] = useState('2');
  const [diameter, setDiameter ] = useState('14')
  const [yeastPercentage, setYeastPercentage] = useState('2')
  const [saltPercentage, setSaltPercentage] = useState('1')
  const [oilPercentage, setOilPercentage] = useState('2')
  const [flour, setFlour] = useState(251.387)

  const hydration = .67
  const calculateWater = hydration * flour * numberBalls
  function calculateFlour(): number {
    if (this.diameter == 14)
        return 0
    else return (flour * numberBalls).toFixed(2)
  }
  const calculateYeast = yeastPercentage * .01 * calculateFlour()
  const calculateSalt = saltPercentage * .01 * calculateFlour()
  const calculateOil = oilPercentage * .01 * calculateFlour()
  const calculateTotalWeight = (calculateFlour() + calculateWater + calculateYeast + calculateSalt + calculateOil) / numberBalls

  const pickerRef = useRef();

  function open() {
   pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/pizza-dough.png')}  resizeMode='cover'
        style={styles.image}>
        <Text style={styles.title}>Pizza Dough Calculator</Text>
        <View style={styles.resultView}>
            <Text style={styles.label}>Desired Number of Dough Balls:</Text>
            <Picker style={styles.picker}
              selectedValue={numberBalls}
              onValueChange={numberBalls => setNumberBalls(numberBalls)}>
              <Picker.Item label='1 Ball' value='1' />
              <Picker.Item label='2 Balls' value='2' />
              <Picker.Item label='3 Balls' value='3' />
            </Picker>
            <Picker style={styles.picker}
              selectedValue={diameter}
              onValueChange={diameter => setDiameter(diameter)}>
              <Picker.Item label='Medium' value='14' />
              <Picker.Item label='Large' value='16' />
            </Picker>
            <Text style={styles.label}>Yeast Percentage:</Text>
            <Picker style={styles.picker}
              selectedValue={yeastPercentage}
              onValueChange={yeastPercentage => setYeastPercentage(yeastPercentage)}>
              <Picker.Item label='1%' value='1' />
              <Picker.Item label='2%' value='2' />
            </Picker>
            <Text style={styles.label}>Salt Percentage:</Text>
            <Picker style={styles.picker}
              selectedValue={saltPercentage}
              onValueChange={saltPercentage => setSaltPercentage(saltPercentage)}>
              <Picker.Item label='1%' value='1' />
              <Picker.Item label='2%' value='2' />
            </Picker>
             <Text style={styles.label}>EEVO Percentage:</Text>
            <Picker style={styles.picker}
              selectedValue={oilPercentage}
              onValueChange={oilPercentage => setOilPercentage(oilPercentage)}>
              <Picker.Item label='1%' value='1' />
              <Picker.Item label='2%' value='2' />
            </Picker>
            <View style={styles.recipe}>
                <Text style={styles.summary}>
                    Makes {"\t\t"}{numberBalls} Dough Balls{"\n"}
                    Flour: {"\t\t\t"}{calculateFlour()} g{"\n"}
                    Water: {"\t\t"}{calculateWater.toFixed(2)} g{"\n"}
                    IDY: {"\t\t\t\t\t"}{calculateYeast.toFixed(2)} g {"\n"}
                    Salt: {"\t\t\t\t"}{calculateSalt.toFixed(2)} g {"\n"}
                    EEVO: {"\t\t\t"}{calculateOil.toFixed(2)} g {"\n"}
                    Ball Wt: {"\t"}{calculateTotalWeight.toFixed(2)} g {"\n"}
                </Text>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  picker: {
    width: '50%',
    alignItems: 'flex-start',
    color: 'white'
  },
  label: {
    color: 'white',
  },
  title: {
    paddingTop: '25%',
    fontSize: 28,
    color: 'white'
  },
  summary: {
    color: '#ffffff',
    fontSize: 28
  },
  resultView: {
    paddingTop: '200',
    width: '75%',
    height: 'auto',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)'
  },
  recipe: {
    alignItems: 'center'
  },
  textInput1: { height: 40, width: '50%', borderColor: 'gray', borderWidth: 1}
});
