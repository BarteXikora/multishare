import { useNavigate } from 'react-router-dom'

const useOpenFile = () => {
    const navigate = useNavigate()

    const openFile = (id: number) => {
        navigate('/file/' + id.toString())
    }

    return openFile
}

export default useOpenFile