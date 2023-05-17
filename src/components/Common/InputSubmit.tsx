interface Props {
    title: string
}

export const InputSubmit: React.FC<Props> = ({ title }) => {
    return (
        <input
            type="submit"
            className="mt-3 w-full text-white bg-primary-500 hover:bg-primary-700 font-medium rounded-xl text-lg px-5 py-3 text-center shadow-button border border-shadow active:shadow-button-active"
            value={title}
        />
    )
}
