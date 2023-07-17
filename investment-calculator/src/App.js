import { useState } from 'react';

import CalculatorForm from './components/CalculatorForm';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  const [formData, setFormData] = useState({
    currentSavings: '',
    yearlyContribution: '',
    expectedReturn: '',
    duration: '',
  });

  const [tableData, setTableData] = useState([]);

  function handleInputChange(name, value) {
    setFormData(old => ({
      ...old,
      [name]: value,
    }));
  }

  function handleFormReset() {
    setFormData({
      currentSavings: '',
      yearlyContribution: '',
      expectedReturn: '',
      duration: '',
    });

    setTableData([]);
  }

  function handleFormSubmit() {
    if (!formData.currentSavings || !formData.yearlyContribution || !formData.expectedReturn || !formData.duration) {
      return;
    }

    setTableData(calculateHandler(formData));
  }

  function calculateHandler(userInput) {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalSavings: currentSavings,
        yearlyContribution: yearlyContribution,
      });

      if (i === 0) {
        yearlyData[i].totalInterest = yearlyData[i].yearlyInterest;
        yearlyData[i].investedCapital = +formData.currentSavings + yearlyData[i].yearlyContribution;
      } else {
        yearlyData[i].totalInterest = yearlyData[i - 1].totalInterest + yearlyData[i].yearlyInterest;
        yearlyData[i].investedCapital = yearlyData[i - 1].investedCapital + yearlyData[i].yearlyContribution;
      }
    }

    return yearlyData;
  };

  return (
    <div>
      <Header />

      <CalculatorForm
        data={formData}
        onChange={handleInputChange}
        onReset={handleFormReset}
        onSubmit={handleFormSubmit}
      />

      {tableData.length > 0
        ? <Table data={tableData} />
        : <p className='message'>No entered data.</p>
      }
    </div>
  );
}

export default App;
