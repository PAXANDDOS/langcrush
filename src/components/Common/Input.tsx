interface Props extends React.ComponentProps<'input'> {
    title: string
}

export const Input: React.FC<Props> = props => {
    return (
        <div>
            <label htmlFor={props.name} className="block mb-2 text-sm font-medium text-white">
                {props.title}
            </label>
            <input
                id={props.name}
                className="text-white bg-primary-500 placeholder-gray-200 shadow-block border border-shadow rounded-xl block w-full p-2.5 outline-none focus:shadow-button-active"
                {...props}
            />
        </div>
    )
}

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    required: false,
}
