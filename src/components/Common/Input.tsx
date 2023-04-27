interface Props {
    title: string
    name: string
    value: string
    type?: React.HTMLInputTypeAttribute
    placeholder?: string
    required?: boolean
}

export const Input: React.FC<Props> = ({ title, name, value, type, placeholder, required }) => {
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-white">
                {title}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                className="text-white bg-primary-500 placeholder-gray-200 shadow-block border border-shadow rounded-xl block w-full p-2.5 outline-none focus:shadow-button-active"
                placeholder={placeholder}
                required={required}
                value={value}
            />
        </div>
    )
}

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    required: false,
}
