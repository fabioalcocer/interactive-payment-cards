import completeIcon from '../assets/icon-complete.svg'

function Success() {
  return (
    <div className="completed">
      <img src={completeIcon} alt="" />
      <h2 className="font-bold">Thank you!</h2>
      <p>We've added your card detail.</p>
      <button>Continue</button>
    </div>
  );
}

export default Success;
