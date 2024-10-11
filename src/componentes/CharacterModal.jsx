import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  padding: '16px',
};

export default function ModalBasico(  selectedCharacter) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>Abrir modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          {selectedCharacter && (
          <>
            <Typography variant="h6" component="h2">
              {selectedCharacter.name}
            </Typography>
            <img src={selectedCharacter.image} alt={selectedCharacter.name} style={{ width: '100%', height: 'auto' }} />
            <Typography sx={{ mt: 2 }}>Atributo 1: {selectedCharacter.attribute1}</Typography>
            <Typography>Atributo 2: {selectedCharacter.attribute2}</Typography>
            <Typography>Atributo 3: {selectedCharacter.attribute3}</Typography>
            <Typography>Atributo 4: {selectedCharacter.attribute4}</Typography>
          </>
        )}
          </Box>
        </Modal>
      </div>
    );
  }

