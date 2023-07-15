function Table({data}) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{formatter.format(row.totalSavings)}</td>
            <td>{formatter.format(row.yearlyInterest)}</td>
            <td>{formatter.format(row.totalInterest)}</td>
            <td>{formatter.format(row.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
