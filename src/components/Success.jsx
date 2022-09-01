import completeIcon from "../assets/icon-complete.svg";

function Success({ setShow }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 text-center  leading-4">
      <img src={completeIcon} alt="" />
      <h2 className="mt-4 text-3xl font-bold uppercase tracking-wider">
        Thank you!
      </h2>
      <p className="text-slate-400">We've added your card detail.</p>
      <button
        onClick={() => setShow(false)}
        className="mt-3 w-full rounded-lg bg-indigo-900 p-4 px-4 text-slate-200 hover:bg-indigo-700"
      >
        Continue
      </button>
    </div>
  );
}

export default Success;
