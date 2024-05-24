import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const Form = () => {
    const { register, handleSubmit } = useForm()
    const [formStatus, setFormStatus] = useState(null)

    const onSubmit = async (data) => {
        console.log('Form data:', data)
        setFormStatus(null)

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const result = await response.json()

            if (result.success) {
                setFormStatus({
                    type: 'success',
                    message: 'Form submitted successfully!',
                })
            } else {
                setFormStatus({
                    type: 'error',
                    message:
                        result.error ||
                        'An error occurred while submitting the form.',
                })
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setFormStatus({
                type: 'error',
                message: 'An error occurred while submitting the form.',
            })
        }
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="border-b border-slate-400 bg-transparent px-2 py-3 focus:outline-none focus:border-primary"
                    placeholder="Hello..."
                    {...register('name', { required: true })}
                />
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="border-b bg-transparent px-2 py-3 focus:outline-none focus:border-primary"
                    placeholder="Where can I replay?"
                    autoComplete="email"
                    {...register('email')}
                />
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="company">Company Name</label>
                <input
                    type="text"
                    className="border-b bg-transparent px-2 py-3 focus:outline-none focus:border-primary"
                    placeholder="Your company or website"
                    autoComplete="off"
                    {...register('company')}
                />
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="message">Message</label>
                <textarea
                    cols="20"
                    rows="5"
                    className="border-b bg-transparent px-2 py-3 focus:outline-none focus:border-primary"
                    placeholder="I wan to build some..."
                    {...register('message')}
                ></textarea>
            </div>
            <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className="flex gap-2 items-center bg-slate-800 text-white px-16 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition text-2xl dark:bg-white dark:text-slate-800 cursor-pointer"
                >
                    Submit
                </button>
            </div>
            <div>
                {formStatus && (
                    <div
                        className={`mt-4 p-4 text-center rounded ${
                            formStatus.type === 'success'
                                ? 'bg-green-500 text-white'
                                : 'bg-red-500 text-white'
                        }`}
                    >
                        {formStatus.message}
                    </div>
                )}
            </div>
        </form>
    )
}
