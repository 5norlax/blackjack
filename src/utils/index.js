export const generateHand = (hands) => {
    const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 11]
    const cardOne = hands==='ace' ? 11 : deck[Math.floor(Math.random() * (13))]
    const cardTwo = hands==='pair' ? cardOne : deck[Math.floor(Math.random() * (13))]
    return {
        cardOne: {
        value: cardOne,
        card: getCardValue(cardOne)
        },
        cardTwo: {
        value: cardTwo,
        card: getCardValue(cardTwo)
        }
    }
}   

export const generateRandomDraw = () => {
    const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 11]
    const card = deck[Math.floor(Math.random() * (13))]
    return {
        value: card,
        card: getCardValue(card)
    }
}

export const convertFaceToTen = (hand) => {
    if (typeof hand.cardOne.value === 'string')
        hand.cardOne.value = 10
    if (typeof hand.cardTwo.value === 'string')
        hand.cardTwo.value = 10
    return hand
}

const getRandomSuit = () => {
    const suits = ['c', 'd', 'h', 's']
    return suits[Math.floor(Math.random() * (4))]
}

export const getCardValue = (value) => {
    const suit = getRandomSuit()
    if (value === 10)
        return `T${suit}`
    if (value === 11)
        return `A${suit}`
    return value + suit
}