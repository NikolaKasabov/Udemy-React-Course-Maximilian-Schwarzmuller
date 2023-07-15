function CalculatorForm({onChange, onReset, onSubmit}) {
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
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input name='currentSavings' type="number" id="current-savings" onChange={handleInputChange} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input name='yearlyContribution' type="number" id="yearly-contribution" onChange={handleInputChange} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input name='expectedReturn' type="number" id="expected-return" onChange={handleInputChange} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input name='duration' type="number" id="duration" onChange={handleInputChange} />
        </p>
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
