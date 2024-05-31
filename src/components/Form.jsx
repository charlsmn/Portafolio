import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const Form = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const [formStatus, setFormStatus] = useState(null)

    const onSubmit = async (data) => {
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
                    message: '¡Formulario enviado exitosamente!',
                })
            } else {
                setFormStatus({
                    type: 'error',
                    message:
                        result.error ||
                        'Se produjo un error al enviar el formulario.',
                })
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setFormStatus({
                type: 'error',
                message: 'Se produjo un error al enviar el formulario.',
            })
        }
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    className="border-b border-slate-400 bg-transparent px-2 py-3 focus:outline-none focus:border-primary capitalize"
                    placeholder="Hola..."
                    {...register('name', {
                        required: {
                            value: true,
                            message: 'Escribe tu nombre',
                        },
                        minLength: {
                            value: 3,
                            message:
                                'Tu nombre debe tener al menos 3 caracteres',
                        },
                    })}
                    onInput={(e) =>
                        (e.target.value = e.target.value.toLowerCase())
                    }
                />
                {errors.name && (
                    <p role="alert" className="text-red-500 text-sm">
                        {errors.name.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="border-b bg-transparent px-2 py-3 focus:outline-none focus:border-primary lowercase"
                    placeholder="¿Dónde puedo responder?"
                    autoComplete="email"
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'Escribe tu email',
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Escribe un email valido',
                        },
                    })}
                />
                {errors.email && (
                    <p class="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="company">Empresa</label>
                <input
                    type="text"
                    className="border-b bg-transparent px-2 py-3 focus:outline-none focus:border-primary "
                    placeholder="Tu empresa o sitio web"
                    autoComplete="off"
                    {...register('company', {
                        required: {
                            value: true,
                            message: 'Escribe tu empresa',
                        },
                        minLength: {
                            value: 3,
                            message:
                                'Tu empresa debe tener al menos 3 caracteres',
                        },
                    })}
                    onInput={(e) =>
                        (e.target.value = e.target.value.toLowerCase())
                    }
                />
                {errors.company && (
                    <p className="text-red-500 text-sm">
                        {errors.company.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="message">Mensaje</label>
                <textarea
                    cols="20"
                    rows="5"
                    className="border-b bg-transparent px-2 py-3 focus:outline-none focus:border-primary"
                    placeholder="Quiero crear algo..."
                    {...register('message', {
                        required: {
                            value: true,
                            message: 'Escribeme un mensaje',
                        },
                        minLength: {
                            value: 10,
                            message:
                                'Tu mensaje debe tener al menos 10 caracteres',
                        },
                    })}
                    onInput={(e) =>
                        (e.target.value = e.target.value.toLowerCase())
                    }
                ></textarea>
                {errors.message && (
                    <p role="alert" className="text-red-500 text-sm">
                        {errors.message.message}
                    </p>
                )}
            </div>
            <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className="flex gap-2 items-center bg-slate-800 text-white px-16 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition text-2xl dark:bg-white dark:text-slate-800 cursor-pointer"
                >
                    Enviar
                </button>
            </div>
            <div>
                {formStatus && (
                    <div
                        className={`mt-4 p-4 text-center rounded text-white ${
                            formStatus.type === 'success'
                                ? 'bg-green-500'
                                : 'bg-red-500'
                        }`}
                    >
                        {formStatus.message}
                    </div>
                )}
            </div>
        </form>
    )
}
