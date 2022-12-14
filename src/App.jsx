import { useState } from 'react'
import Form from './components/Form'
import Success from './components/Success'

function App() {
  const [show, setShow] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    number: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '0',
  })

  const handleNumber = (e) => {
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim()

    e.target.value
      ? setFormData({
          ...formData,
          number: e.target.value,
        })
      : setFormData({
          ...formData,
          number: '0000 0000 0000 0000',
        })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name)
    console.log(value)

    setFormData({
      ...formData,
      [name]: name === 'number' ? handleNumber(e) : value,
    })
  }

  return (
    <div className='App mx-auto max-w-7xl bg-mobile-bg bg-contain bg-no-repeat sm:bg-desktop-bg'>
      <main className='mx-auto flex min-h-screen flex-col items-center p-4 md:flex-row md:justify-evenly'>
        <section className='min-h-[55vh] w-[357px]'>
          <div className='relative mt-5 h-max md:ml-5'>
            <div className='absolute right-0 h-48 w-72 rounded-md bg-card-back bg-contain bg-no-repeat p-4 md:top-48 md:left-20 md:w-80'>
              <p className='absolute right-9 top-16 text-sm leading-7 tracking-widest text-slate-100 md:leading-10'>
                {formData.cvc}
              </p>
            </div>
            <div className='absolute top-24 flex min-w-[320px] flex-col justify-end rounded-md bg-card-front bg-cover py-3 px-4 pr-7 md:top-0'>
              <div className='mb-3 h-16'>
                <span className='absolute top-6 left-6 h-10 w-10 rounded-full bg-white'></span>
                <span className='absolute top-9 left-20 h-4 w-4 rounded-full border border-white'></span>
              </div>
              <p className='p-2 text-xl tracking-widest text-white'>
                {formData.number}
              </p>
              <div className='mt-2 flex items-center justify-between p-2 pt-0 pr-1 text-sm font-light text-slate-200'>
                <p className='uppercase'>{formData.name}</p>
                <p>{`${formData.month}/${formData.year}`}</p>
              </div>
            </div>
          </div>
        </section>

        {show ? (
          <Success setShow={setShow} />
        ) : (
          <Form
            setShow={setShow}
            handleChange={handleChange}
          />
        )}
      </main>
    </div>
  )
}

export default App
