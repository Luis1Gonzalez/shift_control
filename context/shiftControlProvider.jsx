import { useState, useEffect, createContext } from 'react'
import { generateUniqueId } from '../helpers/functions'
import axios from 'axios'


const ShiftContext = createContext()

const ShiftControlProvider = ({ children }) => {

    const [modal, setModal] = useState(false)
    const [localDay, setLocalDay] = useState('')
    const [currentDate, setCurrentDate] = useState('')
    const [nowCurrentTime, setNowCurrentTime] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [handInitTime, setHandInitTime] = useState('')
    const [definitiveStart, setDefinitiveStart] = useState('')
    const [handEndTime, setHandEndTime] = useState('')
    const [definitiveEnd, setDefinitiveEnd] = useState('')
    const [labelPink, setLabelPink] = useState('')
    const [completeDay, setCompleteDay] = useState({})
    const [completeMonth, setCompleteMonth] = useState([])
    const [disabledEnd, setDisabledEnd] = useState(false)
    const [records, setRecords] = useState([])

    const generatedId = generateUniqueId();

    useEffect(() => {
        const timer = setInterval(() => {
            const dateToday = new Date();
            const dayArray = [
                "domingo",
                "lunes",
                "martes",
                "miércoles",
                "jueves",
                "viernes",
                "sábado",
            ];
            const numberDay = new Date(dateToday).getDay();
            const nameDay = dayArray[numberDay];
            const currentTime = dateToday.toLocaleTimeString();
            const currentDate = dateToday.toLocaleDateString();
            const currentMonth = dateToday.getMonth();
            const currentYear = dateToday.getFullYear();
            setLocalDay(nameDay)
            setCurrentDate(currentDate)
            setNowCurrentTime(currentTime)
            setMonth(currentMonth + 1)
            setYear(currentYear)
        }, 10000)
        return () => clearTimeout(timer);
    }, [])

    const handleInitHandTime = (e) => {
        setHandInitTime(e.target.value)
    }

    const handleEndHandTime = (e) => {
        setHandEndTime(e.target.value)
    }

    const checkStart = () => {
        if (handInitTime === '') {
            setDefinitiveStart(nowCurrentTime)
        } else {
            setDefinitiveStart(handInitTime)
        }
    }

    const checkEnd = () => {
        if (handEndTime === '') {
            setDefinitiveEnd(nowCurrentTime)
        } else {
            setDefinitiveEnd(handEndTime)
        }
    }

    useEffect(() => {
        const generateMonth = () => {

        }
        generateMonth()
    }, [])

    const generateOneDay = async (e) => {
        e.preventDefault()

        try {
            await axios.post('/api/historical', { generatedId, definitiveStart, definitiveEnd, currentDate, nowCurrentTime, localDay, month, year })

            const objectCompleteDay = { generatedId, definitiveStart, definitiveEnd, currentDate, nowCurrentTime, localDay, month, year };
            setCompleteDay(objectCompleteDay)
            setCompleteMonth([...completeMonth, completeDay])
            setDefinitiveStart('')
            setDefinitiveEnd('')
            setModal(false)
        } catch (error) {
            console.log(error)
        }
    };

    const changeLabelPink = () => {
        if (labelPink === '') {
            setLabelPink('hidden')
        }
    }

    const obtainRecords = async () => {
        const { data } = await axios('/api/showregister')
        setRecords(data)
    }
    useEffect(() => {
        obtainRecords()
    }, [])

    const handleModal = () => {
        setModal(!modal)
    }

    // calculateElapsedTime()
    // console.log(completeMonth)
    // console.log(nowCurrentTime)

    return (
        <ShiftContext.Provider
            value={{
                handleModal,
                modal,
                localDay,
                currentDate,
                nowCurrentTime,
                handleInitHandTime,
                handleEndHandTime,
                setHandInitTime,
                setHandEndTime,
                handInitTime,
                handEndTime,
                definitiveStart,
                definitiveEnd,
                checkStart,
                checkEnd,
                generateOneDay,
                changeLabelPink,
                setLabelPink,
                labelPink,
                completeMonth,
                disabledEnd,
                setDisabledEnd,
                records,
            }}
        >
            {children}
        </ShiftContext.Provider>
    )
}
export { ShiftControlProvider }
export default ShiftContext