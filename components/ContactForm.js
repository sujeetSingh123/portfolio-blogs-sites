import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const messageSchema = Yup.object().shape({
  message: Yup.string(),
  firstName: Yup.string().required('First Name is Required'),
  lastName: Yup.string().required('Last Name is Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
})

const initialValues = {
  firstName: '',
  lastName: '',

  email: '',
  message: '',
  file: [],
}
export default function ContactForm() {
  const formik = useFormik({
    initialValues: { ...initialValues },
    validationSchema: messageSchema,

    onSubmit: (values) => {
      onSubmit(values)
    },
  })

  const {
    values,
    handleChange,
    isSubmitting,
    setSubmitting,
    errors,
    touched,
    handleSubmit,
    setValues,
    handleBlur,
    resetForm,
  } = formik
  const onSubmit = (values) => {
    let formData = new FormData()
    formData.append('message', values.message)
    formData.append('firstName', values.firstName)
    formData.append('lastName', values.lastName)

    formData.append('email', values.email)
    const data = {
      username: 'UserRequest',
      avatar_url: '',
      content: `[Portfolio Message to Sujeet] \nMessage sent by ${values.firstName}  ${values.lastName} \nEmail: ${values.email} \nMessage : ${values.message} `,
    }

    fetch(
      'https://discord.com/api/webhooks/925804361895006248/Lk3X3O1HQKVTfs1tlUxMjWEPTINr_BR6BmFRHdXE2rqgwnM8kCaVU3Dkm9sln2V7ORx3',
      {
        // Adding method type
        method: 'POST',

        // Adding body or contents to send
        body: JSON.stringify(data),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then((response) => {
        toast.success('Your message has been send successfully.')
        setSubmitting(false)
        resetForm()
        return response.json()
      })
      .then((json) => {
        setSubmitting(false)
        resetForm()
      })
      .catch((err) => {
        toast.warn('Some server occurred during sending message')
      })

    fetch(`${process.env.API_URL}/contact-messages`, {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify(values),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      // Converting to JSON
      .then((response) => {
        toast.success('Your message has been send successfully.')
        setSubmitting(false)
        resetForm()
        // setValues({ values: initialValues });
        return response.json()
      })

      // Displaying results to console
      .then((json) => {
        setSubmitting(false)
        resetForm()
        // setValues({ values: initialValues });
        console.log(json)
      })
      .catch((err) => {
        toast.warn('Some server occured during sending message')
      })
  }
  const hasError = (property) => {
    return errors && errors[property] && touched && touched[property]
  }
  return (
    <form onSubmit={formik.handleSubmit} className="mx-auto mt-[10%] w-full max-w-lg ">
      <h1 className="my-[20px] text-[32px] text-primary-500">Contact Me!!! </h1>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide">First Name</label>
          <input
            className="mb-3 block w-full appearance-none rounded border-0 bg-gray-200 py-3 px-4 leading-tight focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:border dark:bg-black"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {hasError('firstName') && (
            <p className="text-xs italic text-red-500">{errors['firstName']}</p>
          )}
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide">Last Name</label>
          <input
            className="mb-3 block w-full appearance-none rounded border-0 bg-gray-200 py-3 px-4 leading-tight focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:border dark:bg-black dark:bg-black"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {hasError('lastName') && (
            <p className="text-xs italic text-red-500">{errors['lastName']}</p>
          )}
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide" f>
            E-mail
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border-0 bg-gray-200 py-3 px-4 leading-tight focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:border dark:bg-black dark:bg-black"
            id="email"
            type="email"
            placeholder="jane@email.com"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {hasError('email') && <p className="text-xs italic text-red-500">{errors['email']}</p>}
          {/* <p className="text-xs italic text-gray-600">Some tips - as long as needed</p> */}
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide">Message</label>
          <textarea
            placeholder="Write a message......"
            className=" no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border-0 bg-gray-200 py-3 px-4 leading-tight focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:border dark:bg-black dark:bg-black"
            id="message"
            value={formik.values.message}
            onChange={(event) => {
              formik.setFieldValue('message', event.target.value)
            }}
            aria-describedby="component-error-text"
            name="message"
          />
          {hasError('message') && (
            <p className="text-xs italic text-red-500">{errors['message']}</p>
          )}
          {/* <p className="text-xs italic text-gray-600">
            Re-size can be disabled by set by resize-none / resize-y / resize-x / resize
          </p> */}
        </div>
      </div>
      <div className=" md:flex md:items-center">
        <div className=" md:w-1/3">
          <button
            className={` w-full rounded-md bg-primary-500 py-3  font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400`}
            type="submit"
          >
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  )
}
