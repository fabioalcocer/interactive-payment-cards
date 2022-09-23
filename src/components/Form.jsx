import { useRef } from 'react'

function Form({ setShow, handleChange }) {
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(true)
  }

  return (
    <div className='z-10 max-w-sm p-2'>
      <form
        className='flex flex-col gap-3'
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='name'
            className='text-sm uppercase tracking-widest'
          >
            Cardholder name
          </label>
          <input
            onChange={handleChange}
            id='name'
            placeholder='e.g Jane Applessed'
            type='text'
            name='name'
            className='peer mt-1 block w-full rounded-md border border-slate-300 bg-white p-2 pl-4 placeholder-slate-400 shadow-sm
            invalid:text-pink-600 focus:border-sky-500 focus:outline-none
            focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            '
            minLength='10'
            autoComplete='off'
          />
          <span className='hidden text-sm text-pink-600 peer-invalid:block'>
            Debe tener mínimo 10 caracteres.
          </span>
        </div>
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='number'
            className='text-sm uppercase tracking-widest'
          >
            Card number
          </label>
          <input
            onChange={handleChange}
            required
            autoComplete='cc-number'
            id='number'
            name='number'
            type='text'
            className='peer mt-1 block w-full rounded-md border border-slate-300 bg-white p-2 pl-4 placeholder-slate-400 shadow-sm
            invalid:text-pink-600 focus:border-sky-500 focus:outline-none
            focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            inputMode='numeric'
            data-current-field='number'
            placeholder='e.g 1234 5678 9123 0000'
            aria-invalid='false'
            maxLength={19}
          />
        </div>

        <div className='grid grid-cols-[1fr_1fr_2fr] gap-1'>
          <div className='flex flex-col'>
            <label
              htmlFor='month'
              className='text-sm uppercase tracking-widest'
            >
              Exp.date
            </label>
            <input
              onChange={handleChange}
              id='month'
              type='text'
              name='month'
              placeholder='MM'
              className='peer mt-1 block w-full rounded-md border border-slate-300 bg-white p-2 pl-4 placeholder-slate-400 shadow-sm
              invalid:text-pink-600 focus:border-sky-500 focus:outline-none
              focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              required
              data-current-field='number'
              aria-invalid='false'
              maxLength={2}
            />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='year'
              className='text-sm uppercase tracking-widest'
            >
              (MM/YY)
            </label>
            <input
              onChange={handleChange}
              id='year'
              type='text'
              name='year'
              placeholder='YY'
              className='peer mt-1 block w-full rounded-md border border-slate-300 bg-white p-2 pl-4 placeholder-slate-400 shadow-sm
              invalid:text-pink-600 focus:border-sky-500 focus:outline-none
              focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              required
              data-current-field='number'
              aria-invalid='false'
              maxLength={2}
            />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='cvc'
              className='text-sm uppercase tracking-widest'
            >
              CVC
            </label>
            <input
              onChange={handleChange}
              id='year'
              type='text'
              name='cvc'
              placeholder='CVC'
              className='peer mt-1 block w-full rounded-md border border-slate-300 bg-white p-2 pl-4 placeholder-slate-400 shadow-sm
              invalid:text-pink-600 focus:border-sky-500 focus:outline-none
              focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              required
              data-current-field='number'
              aria-invalid='false'
              maxLength={3}
            />
          </div>
        </div>

        <button
          type='submit'
          className='mt-3 w-full rounded-lg bg-slate-800 p-2 text-slate-200'
        >
          Confirm
        </button>
      </form>
    </div>
  )
}

export default Form
