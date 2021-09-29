import { useState, useEffect } from "react"

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import Card from "@heruka_urgyen/react-playing-cards"
/*
  <Card card={card} deckType={deckType} height="XXpx" back />

  where
  // card rank and suit, e.g 2c, Kh, Ad, etc
    card :: String
    card = rank + suit
      where
        rank = (2 | 3 ... 9 | T | J | Q | K | A)
        suit = (c | d | h | s)

  // various card styles
    deckType :: String
    deckType = (basic | four-color | big-face | big-face four-color)

  // card height in px
    height :: String

  // show front (true by default, can be omitted)
    front :: Boolean

  // show back
    back :: Boolean
*/

import options from '../utils/enums'
import {generateHand, generateRandomDraw, convertFaceToTen} from '../utils'
import { basicStrategyValues, basicStrategyPairs, basicStrategyAces } from '../utils/basicStrategy'

import backgroundImg from '../img/felt.png'

export default function App() {
  const [ feedback, setFeedback ] = useState(null)
  const [ blackjack, setBlackjack ] = useState(false)
  const [ gameOver, setGameOver ] = useState(false)
  const [ playerHand, setPlayerHand ] = useState(generateHand())
  const [ dealerHand, setDealerHand ] = useState(generateRandomDraw())

  useEffect(() => {
    if (playerHand.cardOne.value === 11) {
      if ([10,'J','Q','K'].includes(playerHand.cardTwo.value)) {
        setGameOver(true)
        setBlackjack(true)
      }
    } else if (playerHand.cardTwo.value === 11) {
      if ([10,'J','Q','K'].includes(playerHand.cardOne.value)) {
        setGameOver(true)
        setBlackjack(true)
      }
    }
  }, [playerHand, setBlackjack, setGameOver])

  const newGame = () => {
    setGameOver(false)
    setFeedback(null)
    setBlackjack(false)
    setPlayerHand(generateHand())
    setDealerHand(generateRandomDraw())
  }

  const calculateBasicStat = (hand, dealer, guess) => {
    setGameOver(true)
    let strat
    if (hand.cardOne.value === hand.cardTwo.value) {
      hand = convertFaceToTen(hand)
      if (typeof dealer.value === 'string')
        dealer.value = 10
      strat = basicStrategyPairs[hand.cardOne.value - 2][dealer.value - 2]
    }
    else if (hand.cardOne.value === 11 || hand.cardTwo.value === 11) {
      hand = convertFaceToTen(hand)
      if (typeof dealer.value === 'string')
        dealer.value = 10
      strat = basicStrategyAces[hand.cardTwo.value === 11 ? hand.cardOne.value - 2 : hand.cardTwo.value - 2][dealer.value - 2]
    }
    else {
      hand = convertFaceToTen(hand)
      if (typeof dealer.value === 'string')
        dealer.value = 10
      const handValue = hand.cardOne.value + hand.cardTwo.value
      strat = basicStrategyValues[handValue - 2][dealer.value - 2]
    }
    if (strat === guess) {
      setFeedback('Nice Play')
    } else {
      setFeedback(`The book says to ${strat.toUpperCase()}`)
    }
  }

  return (
    <Grid  
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ 
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: '#006636',
        backgroundImage: `url(${backgroundImg})`
      }}
    >
      <Grid item xs={12} lg={8}>
        <Stack spacing={2} direction="row">
          <div>
          <Card 
            height={window.screen.availHeight * .25} 
            back
          />
          </div>
          <div style={{ marginLeft: '-100px', marginTop: '-25px' }}>
            <Card 
              card={dealerHand.card}
              height={window.screen.availHeight * .25}
            />
          </div>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Stack spacing={2} direction="row">
          <Card 
            card={playerHand.cardOne.card}
            height={window.screen.availHeight * .3}
          />
          <Card 
            card={playerHand.cardTwo.card}
            height={window.screen.availHeight * .3}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} lg={8} style={{ backgroundColor: '000000' }}>
        <Stack spacing={2} direction="row">
          <Button 
            variant="contained"
            onClick={() => calculateBasicStat(playerHand, dealerHand, options.HIT)}
            disabled={gameOver}
          >
            Hit
          </Button>
          <Button 
            variant="contained"
            onClick={() => calculateBasicStat(playerHand, dealerHand, options.STAND)}
            disabled={gameOver}
          >
            Stand
          </Button>
          <Button 
            variant="contained"
            onClick={() => calculateBasicStat(playerHand, dealerHand, options.DOUBLE)}
            disabled={gameOver}
          >
            Double
          </Button>
          <Button 
            variant="contained"
            onClick={() => calculateBasicStat(playerHand, dealerHand, options.SPLIT)}
            disabled={playerHand.cardOne.value !== playerHand.cardTwo.value || gameOver}
          >
            Split
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Stack spacing={2} direction="row" style={{ visibility: gameOver ? 'visible' : 'hidden' }}>
          {blackjack ? 
            <Paper>
              <Alert severity="info" variant="outlined">Blackjack</Alert>
            </Paper>
            : feedback === 'Nice Play' ?
            <Paper>
              <Alert severity="success" variant="outlined">{feedback}</Alert>
            </Paper>
            : 
            <Paper>
              <Alert severity="warning" variant="outlined">{feedback}</Alert>
            </Paper>
          }
          <Button 
            variant="text"
            color="secondary"
            onClick={newGame}
          >
            <strong>
              Play Again
            </strong>
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}