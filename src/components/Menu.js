import { useState } from "react"

import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Menu({ hands, setHands }) {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleHands = (event, newHand) => {
        setHands(newHand)
    }

    return (
        <>
            <IconButton
                color="primary"
                aria-label="menu"
                component="span"
                onClick={() => setOpen(true)}
                style={{
                    backgroundColor: open ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.1)',
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem'
                }}
            >
                <MenuIcon />
            </IconButton>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Settings</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Hand Types:
                    </DialogContentText>
                    <DialogActions style={{ justifyContent: 'center' }}>
                        <ToggleButtonGroup
                            value={hands}
                            exclusive
                            onChange={handleHands}
                            aria-label="hand types"
                            color="info"
                        >
                            <ToggleButton value="rand" aria-label="random hands">
                                Random
                            </ToggleButton>
                            <ToggleButton value="ace" aria-label="ace hands">
                                Ace Hands
                            </ToggleButton>
                            <ToggleButton value="pair" aria-label="pair hands">
                                Pairs
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </DialogActions>
                    <DialogContentText>
                        Rules:
                    </DialogContentText>
                    <DialogActions>
                        <Stack spacing={2}>
                            <ToggleButtonGroup
                                value={"4"}
                                exclusive
                                onChange={() => { }}
                                aria-label="number of decks"
                                color="info"
                                disabled
                            >
                                <ToggleButton value="1" aria-label="one deck">
                                    One Deck
                                </ToggleButton>
                                <ToggleButton value="2" aria-label="two decks">
                                    2 Decks
                                </ToggleButton>
                                <ToggleButton value="4" aria-label="four, six or eight decks">
                                    4/6/8 Decks
                                </ToggleButton>
                            </ToggleButtonGroup>
                            <FormControlLabel control={<Switch disabled checked={true} color="info" onChange={() => { }} />} label="Dealer Hit Soft 17" />
                            <FormControlLabel control={<Switch disabled checked={true} color="info" onChange={() => { }} />} label="Double After Split" />
                            <FormControlLabel control={<Switch disabled checked={true} color="info" onChange={() => { }} />} label="Re-Split Aces" />
                            <FormControlLabel control={<Switch disabled checked={false} color="info" onChange={() => { }} />} label="Surrender" />
                        </Stack>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}