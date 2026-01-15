import {Volume2Icon, VolumeOffIcon, ChevronRight, SquareRoundCorner, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { categories, wordsByCategory, phrasesByCategory } from '../data/index.js'

export default function Daily() {
    const [volume, setVolume] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('All Categories')
    const [mode, setMode] = useState('words') // 'words' ou 'phases'
    const [currentWord, setCurrentWord] = useState({ word: 'Water', translation: 'Água', pronunciation: 'UÓ-TERR' })
    const [currentPhrase, setCurrentPhrase] = useState(null)
    const [usedPhraseIndices, setUsedPhraseIndices] = useState({}) // Rastreia frases já usadas por categoria
    const backgroundColors = [
        { name: 'red', bg: 'bg-red-500', button: 'bg-red-600', hover: 'hover:bg-red-700', selected: 'bg-red-800' },
        { name: 'blue', bg: 'bg-blue-500', button: 'bg-blue-600', hover: 'hover:bg-blue-700', selected: 'bg-blue-800' },
        { name: 'green', bg: 'bg-green-500', button: 'bg-green-600', hover: 'hover:bg-green-700', selected: 'bg-green-800' },
        { name: 'purple', bg: 'bg-purple-500', button: 'bg-purple-600', hover: 'hover:bg-purple-700', selected: 'bg-purple-800' },
        { name: 'orange', bg: 'bg-orange-500', button: 'bg-orange-600', hover: 'hover:bg-orange-700', selected: 'bg-orange-800' },
        { name: 'gray', bg: 'bg-gray-500', button: 'bg-gray-600', hover: 'hover:bg-gray-700', selected: 'bg-gray-800' },
        { name: 'yellow', bg: 'bg-yellow-500', button: 'bg-yellow-600', hover: 'hover:bg-yellow-700', selected: 'bg-yellow-800' },
        { name: 'pink', bg: 'bg-pink-500', button: 'bg-pink-600', hover: 'hover:bg-pink-700', selected: 'bg-pink-800' },
        { name: 'indigo', bg: 'bg-indigo-500', button: 'bg-indigo-600', hover: 'hover:bg-indigo-700', selected: 'bg-indigo-800' },
        { name: 'teal', bg: 'bg-teal-500', button: 'bg-teal-600', hover: 'hover:bg-teal-700', selected: 'bg-teal-800' },
        { name: 'cyan', bg: 'bg-cyan-500', button: 'bg-cyan-600', hover: 'hover:bg-cyan-700', selected: 'bg-cyan-800' },
        { name: 'amber', bg: 'bg-amber-500', button: 'bg-amber-600', hover: 'hover:bg-amber-700', selected: 'bg-amber-800' }
    ]

    const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0]) // Inicia com vermelho
    const dropdownRef = useRef(null)
    const speechSynthesisRef = useRef(null)

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * backgroundColors.length)
        return backgroundColors[randomIndex]
    }

    const getMaleVoice = () => {
        if (!('speechSynthesis' in window)) {
            return null
        }

        const voices = window.speechSynthesis.getVoices()
        // Procura por vozes masculinas (geralmente têm "male" no nome ou são vozes mais graves)
        // Também tenta vozes em inglês que geralmente são masculinas
        const maleVoices = voices.filter(voice => 
            voice.lang.startsWith('en') && (
                voice.name.toLowerCase().includes('male') ||
                voice.name.toLowerCase().includes('david') ||
                voice.name.toLowerCase().includes('daniel') ||
                voice.name.toLowerCase().includes('james') ||
                voice.name.toLowerCase().includes('thomas') ||
                voice.name.toLowerCase().includes('google uk english male') ||
                voice.name.toLowerCase().includes('microsoft david') ||
                voice.name.toLowerCase().includes('microsoft mark')
            )
        )

        // Se não encontrar vozes masculinas específicas, pega a primeira voz em inglês
        if (maleVoices.length > 0) {
            return maleVoices[0]
        }

        // Fallback: primeira voz em inglês disponível
        const englishVoices = voices.filter(voice => voice.lang.startsWith('en'))
        return englishVoices.length > 0 ? englishVoices[0] : voices[0]
    }

    const pronounceWord = (word) => {
        // Só pronuncia se o volume estiver ON
        if (!volume) {
            return
        }

        if (!('speechSynthesis' in window)) {
            console.warn('Speech synthesis not supported')
            return
        }

        // Cancela qualquer pronúncia anterior
        if (speechSynthesisRef.current) {
            window.speechSynthesis.cancel()
        }

        const utterance = new SpeechSynthesisUtterance(word)
        const maleVoice = getMaleVoice()
        
        if (maleVoice) {
            utterance.voice = maleVoice
        }
        
        utterance.lang = 'en-US'
        utterance.rate = 0.9 // Velocidade um pouco mais lenta para clareza
        utterance.pitch = 1.0 // Tom normal
        utterance.volume = 1.0 // Volume máximo

        speechSynthesisRef.current = utterance
        window.speechSynthesis.speak(utterance)
    }

    const changeWordAndColor = () => {
        const newWord = getRandomWord(selectedCategory)
        const newColor = getRandomColor()
        setCurrentWord(newWord)
        setBackgroundColor(newColor)
        // Se estiver em modo phrases, atualiza a frase também
        if (mode === 'phases') {
            const newPhrase = getRandomPhrase(selectedCategory)
            setCurrentPhrase(newPhrase)
        }
    }

    const toggleMode = () => {
        const newMode = mode === 'words' ? 'phases' : 'words'
        setMode(newMode)
        
        if (newMode === 'phases') {
            // Ao mudar para phases, pega uma frase da categoria atual
            const phrase = getRandomPhrase(selectedCategory)
            setCurrentPhrase(phrase)
        } else {
            // Ao mudar para words, limpa a frase
            setCurrentPhrase(null)
        }
    }

    const toggleVolume = () => {
        setVolume(!volume)
    }

    // Função para obter frases de uma categoria específica
    const getPhrasesByCategory = (category) => {
        if (category === 'All Categories') {
            // Se for "All Categories", retorna frases de todas as categorias combinadas
            return Object.values(phrasesByCategory).flat()
        }
        return phrasesByCategory[category] || []
    }

    // Função para obter uma frase aleatória baseada na categoria atual (sem repetir)
    const getRandomPhrase = (category) => {
        const phrases = getPhrasesByCategory(category)
        if (phrases.length === 0) {
            return null
        }

        // Pega os índices já usados para esta categoria
        const usedIndices = usedPhraseIndices[category] || []
        
        // Se todas as frases já foram usadas, reseta a lista
        if (usedIndices.length >= phrases.length) {
            setUsedPhraseIndices(prev => ({
                ...prev,
                [category]: []
            }))
            // Retorna uma frase aleatória após resetar
            const randomIndex = Math.floor(Math.random() * phrases.length)
            setUsedPhraseIndices(prev => ({
                ...prev,
                [category]: [randomIndex]
            }))
            return phrases[randomIndex]
        }

        // Encontra índices disponíveis (não usados)
        const availableIndices = phrases
            .map((_, index) => index)
            .filter(index => !usedIndices.includes(index))

        // Seleciona um índice aleatório dos disponíveis
        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)]
        
        // Marca o índice como usado
        setUsedPhraseIndices(prev => ({
            ...prev,
            [category]: [...(prev[category] || []), randomIndex]
        }))

        return phrases[randomIndex]
    }

    const getAllWords = () => {
        if (selectedCategory === 'All Categories') {
            // Retorna todas as palavras de todas as categorias
            return Object.values(wordsByCategory).flat()
        } else {
            // Retorna palavras da categoria selecionada
            return wordsByCategory[selectedCategory] || []
        }
    }

    const getRandomWord = (category) => {
        let availableWords = []
        
        if (category === 'All Categories') {
            // Pega todas as palavras de todas as categorias
            availableWords = Object.values(wordsByCategory).flat()
        } else {
            // Pega palavras da categoria específica
            availableWords = wordsByCategory[category] || []
        }
        
        if (availableWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableWords.length)
            return availableWords[randomIndex]
        }
        
        return { word: 'Water', translation: 'Água', pronunciation: 'UÓ-TERR' }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isDropdownOpen])

    useEffect(() => {
        // Inicializa com uma palavra aleatória da categoria selecionada
        const initialWord = getRandomWord(selectedCategory)
        const initialColor = getRandomColor()
        setCurrentWord(initialWord)
        setBackgroundColor(initialColor)
        // Se estiver em modo phases, inicializa a frase também
        if (mode === 'phases') {
            const initialPhrase = getRandomPhrase(selectedCategory)
            setCurrentPhrase(initialPhrase)
        }
    }, [selectedCategory, mode])

    // Carrega as vozes quando o componente monta
    useEffect(() => {
        if ('speechSynthesis' in window) {
            // As vozes podem não estar disponíveis imediatamente
            const loadVoices = () => {
                window.speechSynthesis.getVoices()
            }
            
            loadVoices()
            if (window.speechSynthesis.onvoiceschanged !== undefined) {
                window.speechSynthesis.onvoiceschanged = loadVoices
            }
        }
    }, [])

    // Reseta o rastreamento de frases quando a categoria muda
    useEffect(() => {
        if (selectedCategory) {
            // Reseta o rastreamento para a nova categoria (sempre começa do zero)
            setUsedPhraseIndices(prev => ({
                ...prev,
                [selectedCategory]: []
            }))
        }
    }, [selectedCategory])

    // Pronuncia a palavra ou frase quando muda (se volume estiver ON)
    useEffect(() => {
        if (volume) {
            if (mode === 'words' && currentWord && currentWord.word) {
                pronounceWord(currentWord.word)
            } else if (mode === 'phases' && currentPhrase && currentPhrase.phrase) {
                pronounceWord(currentPhrase.phrase)
            }
        }

        // Cleanup: cancela a pronúncia quando o componente desmonta ou volume muda
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel()
            }
        }
    }, [currentWord, currentPhrase, volume, mode])

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setIsDropdownOpen(false)
        // Seleciona uma palavra aleatória da nova categoria e nova cor
        const newWord = getRandomWord(category)
        const newColor = getRandomColor()
        setCurrentWord(newWord)
        setBackgroundColor(newColor)
        // Se estiver em modo phases, atualiza a frase também
        if (mode === 'phases') {
            const newPhrase = getRandomPhrase(category)
            setCurrentPhrase(newPhrase)
        }
    }

    const handleScreenClick = (event) => {
        // Não troca a palavra se clicar em botões, dropdown ou elementos interativos
        const target = event.target
        const isInteractiveElement = 
            target.closest('button') || 
            target.closest('[role="button"]') ||
            target.closest('.relative') // dropdown container
        
        if (!isInteractiveElement) {
            if (mode === 'words') {
                changeWordAndColor()
            } else {
                // Em modo phases, troca a frase da categoria atual
                const newPhrase = getRandomPhrase(selectedCategory)
                if (newPhrase) {
                    setCurrentPhrase(newPhrase)
                    const newColor = getRandomColor()
                    setBackgroundColor(newColor)
                }
            }
        }
    }

    const currentColorScheme = backgroundColor

    return (
        <section 
            className={`${currentColorScheme.bg} flex  flex-col justify-start items-center h-screen cursor-pointer transition-colors duration-500`}
            onClick={handleScreenClick}
        >

            <div className="flex justify-between items-center w-full py-10 px-5 md:px-10 lg:px-20 relative">
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`${currentColorScheme.button} px-4 py-2 rounded-full ${currentColorScheme.hover} transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                        <h1 className="text-xs font-medium text-white uppercase">{selectedCategory}</h1>
                        <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                        <div className={`absolute top-full left-0 mt-2 ${currentColorScheme.button} rounded-lg shadow-lg overflow-hidden z-50 min-w-[200px] max-h-[400px] overflow-y-auto scrollbar-hide`}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategorySelect(category)}
                                    className={`w-full text-left px-4 py-3 text-xs font-medium text-white ${currentColorScheme.hover} transition-all duration-200 ${
                                        selectedCategory === category ? currentColorScheme.selected : ''
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            <button 
                    onClick={toggleVolume}
                    className={`${currentColorScheme.button} px-2 py-2 rounded-full ${currentColorScheme.hover} transition-all duration-300`}
                >
                    {volume ? <VolumeOffIcon className="text-white" /> : <Volume2Icon className="text-white" />}
                </button>
            </div>
            <div className=" p-20 flex flex-col gap-10 items-center justify-center h-full">
                {mode === 'words' ? (
                    <div className="flex flex-col gap-3 items-center justify-center">
                        <div className="text-base text-white flex items-center gap-2">
                            <span className="font-bold uppercase">SAY</span>
                            <span className="font-light">/</span>
                            <span className="font-light">{currentWord.pronunciation || 'UÓ-TERR'}</span>
                        </div>
                        <h1 className="text-4xl font-bold text-white uppercase">
                            {currentWord.word}
                        </h1>
                        <h2 className="text-2xl font-light text-white uppercase">
                            {currentWord.translation}
                        </h2>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 items-center justify-center max-w-4xl text-center px-4">
                        {currentPhrase ? (
                            <>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                                    {currentPhrase.phrase}
                                </h1>
                                <h2 className="text-xl md:text-2xl font-light text-white leading-tight">
                                    {currentPhrase.translation}
                                </h2>
                            </>
                        ) : (
                            <div className="text-white">
                                <p>Nenhuma frase disponível para esta palavra</p>
                            </div>
                        )}
                    </div>
                )}

                <button 
                    onClick={toggleMode}
                    className={`${currentColorScheme.button} px-5 py-2 rounded-full ${currentColorScheme.hover} transition-all duration-300`}
                >
                    <h1 className="text-white uppercase font-semibold">
                        {mode === 'words' ? 'phases' : 'words'}
                    </h1>
                </button>


            </div>
        </section>
    )
}