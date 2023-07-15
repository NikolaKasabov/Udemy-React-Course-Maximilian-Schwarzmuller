import Input from './Input';

function CalculatorForm({ data, onChange, onReset, onSubmit }) {
  function handleInputChange(ev) {
    const { name, value } = ev.target;
    onChange(name, value);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    onSubmit();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <Input
          type='number'
          name='currentSavings'
          label='Current Savings ($)'
          value={data.currentSavings}
          onChange={handleInputChange}
        />
        <Input
          type='number'
          name='yearlyContribution'
          label='Yearly Savings ($)'
          value={data.yearlyContribution}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <Input
          type='number'
          name='expectedReturn'
          label='Expected Interest (%, per year)'
          value={data.expectedReturn}
          onChange={handleInputChange}
        />
        <Input
          type='number'
          name='duration'
          label='Investment Duration (years)'
          value={data.duration}
          onChange={handleInputChange}
        />
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={onReset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default CalculatorForm;
