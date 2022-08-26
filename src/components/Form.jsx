function Form({ setName, setNumber, setMonth, setYear, setCvc }) {
  const handleNumber = (e) => {
    e.target.value
      ? setNumber(e.target.value)
      : setNumber("0000 0000 0000 0000");
  };

  return (
    <div className="p-2 z-10 max-w-sm">
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
            onChange={handleNumber}
            required
            autoComplete="cc-number"
            id="number"
            name="number"
            type="text"
            inputMode="numeric"
            pattern="[0-9\s]{13,16}"
            aria-describedby="error-for-number tooltip-for-number"
            data-current-field="number"
            placeholder="e.g 1234 5678 9123 0000"
            aria-invalid="false"
            maxLength={16}
            className="rounded-md border border-slate-300 p-2 pl-4"
          />
        </div>

        <div className="grid grid-cols-[1fr_1fr_2fr] gap-1">
          <div className="flex flex-col">
            <label
              htmlFor="month"
              className="text-sm uppercase tracking-widest"
            >
              Exp.date
            </label>
            <input
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              id="month"
              type="text"
              name="month"
              placeholder="MM"
              className="w-full rounded-md border border-slate-300 p-2 pl-4"
              required
              pattern="[0-9\s]{13,16}"
              data-current-field="number"
              aria-invalid="false"
              maxLength={2}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="year" className="text-sm uppercase tracking-widest">
              (MM/YY)
            </label>
            <input
              onChange={(e) => {
                setYear(e.target.value);
              }}
              id="year"
              type="text"
              name="year"
              placeholder="YY"
              className="w-full rounded-md border border-slate-300 p-2 pl-4"
              required
              pattern="[0-9\s]{13,16}"
              data-current-field="number"
              aria-invalid="false"
              maxLength={2}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cvc" className="text-sm uppercase tracking-widest">
              CVC
            </label>
            <input
              onChange={(e) => {
                setCvc(e.target.value);
              }}
              id="year"
              type="text"
              name="cvc"
              placeholder="CVC"
              className="w-full rounded-md border border-slate-300 p-2 pl-4"
              required
              pattern="[0-9\s]{13,16}"
              data-current-field="number"
              aria-invalid="false"
              maxLength={3}
            />
          </div>
        </div>
        
        <button type="submit" className="w-full bg-slate-800 p-2 rounded-lg text-slate-200 mt-3">Confirm</button>
      
      </form>
    </div>
  );
}

export default Form;
