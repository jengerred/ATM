const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Enter Deposit Amount", "Enter Amount of Withdraw"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input
        type="number"
        width="200"
        onChange={onChange}
        placeholder="$ Enter Amount Here"
      ></input>
      <input
        className="submit"
        type="submit"
        width="200"
        value="Submit"
      ></input>
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = () => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    event.preventDefault();
    if (newTotal < 0) {
      alert("Unable To Process Transaction: Insufficient Funds");
      return setTotalState(0);
    }
  };

  return (
    <form align="center" onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <br></br>
      <h3 class="choose">Please choose your transaction:</h3>
      <button onClick={() => setIsDeposit(true)}>Deposit</button>
      <button onClick={() => setIsDeposit(false)}>Withdraw</button> <br></br>
      <br></br>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
