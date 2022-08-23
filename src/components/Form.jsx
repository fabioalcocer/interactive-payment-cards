function Form({ setName, setNumber, setDate, setCardCvc }) {
  return (
    <div className="p-2">
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm uppercase tracking-widest">
            Cardholder name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            type="text"
            name="number"
            placeholder="e.g Jane Applessed"
            autoComplete="off"
            className="rounded-md border border-slate-300 p-2 pl-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="number" className="text-sm uppercase tracking-widest">
            Card number
          </label>
          <input
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            required=""
            autoComplete="cc-number"
            id="number"
            name="number"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            aria-describedby="error-for-number tooltip-for-number"
            data-current-field="number"
            placeholder="e.g 1234 5678 9123 0000"
            aria-invalid="false"
            maxLength={19}
            className="rounded-md border border-slate-300 p-2 pl-4"
          />
        </div>

        <div className="" style={{"display": "inline-flex"}}>
          <div className="flex flex-col">
            <label htmlFor="month" className="text-sm uppercase tracking-widest">
              Exp.date
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="month"
              type="text"
              name="number"
              placeholder="MM"
              autoComplete="off"
              className="rounded-md border border-slate-300 p-2 pl-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="year" className="text-sm uppercase tracking-widest">
              (MM/YY)
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="year"
              type="text"
              name="number"
              placeholder="YY"
              autoComplete="off"
              className="rounded-md border border-slate-300 p-2 pl-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cvc" className="text-sm uppercase tracking-widest">
              CVC
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="cvc"
              type="text"
              name="number"
              placeholder="e.g 123"
              autoComplete="off"
              className="rounded-md border border-slate-300 p-2 pl-4"
            />
          </div>
        </div>


        
      </form>
    </div>
  );
}

export default Form;
