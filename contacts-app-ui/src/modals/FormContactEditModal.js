// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
// ** Icons Imports
import Phone from 'mdi-material-ui/Phone'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LocalPostOffice from '@mui/icons-material/LocalPostOffice'
import AddIcon from '@mui/icons-material/AddCircle'
import UndoIcon from '@mui/icons-material/Undo'
import LocationCity from '@mui/icons-material/LocationCity'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

const FormContactEditModal = ({ open, setOpen, handleOpen, handleClose, editContact, setEditContact, setSubmitEdit }) => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [streetName, setStreetName] = useState()
  const [houseNumber, setHouseNumber] = useState()
  const [apartmentNumber, setApartmentNumber] = useState()
  const [postalCode, setPostalCode] = useState()
  const [town, setTown] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [dateOfBirth, setDateOfBirth] = useState(new Date())

  const handleSubmit = async e => {
    e.preventDefault()
    var contact = {
        id: editContact.id,
        firstName,
        lastName,
        streetName,
        houseNumber,
        apartmentNumber,
        postalCode,
        town,
        phoneNumber,
        dateOfBirth
    }
    setEditContact(contact
        )
    setSubmitEdit(true)
    handleClose()
  }
  function setContact(editContact) {
    setFirstName(editContact.firstName)
    setLastName(editContact.lastName)
    setStreetName(editContact.streetName)
    setHouseNumber(editContact.houseNumber)
    setApartmentNumber(editContact.apartmentNumber)
    setPostalCode(editContact.postalCode)
    setTown(editContact.town)
    setPhoneNumber(editContact.phoneNumber)
    setDateOfBirth(editContact.dateOfBirth)
  }
  useEffect(() =>
  {
    if(open)
    {
        setContact(editContact)
    }
  }, [open])
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={{ ...style, width: '60%' }}>
        <Fade in={open}>
          <Card>
            <CardHeader
              title='Edit contact'
              titleTypographyProps={{ variant: 'h6' }}
            />
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>
                      1. Personal data
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                      fullWidth
                      label='First Name'
                      placeholder='David'
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <AccountOutline />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                      fullWidth
                      label='Last Name'
                      placeholder='Jason'
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <AccountOutline />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                      fullWidth
                      type='number'
                      label='Phone Number'
                      value={phoneNumber}
                      onChange={e => setPhoneNumber(e.target.value)}
                      placeholder='123-456-789'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Phone />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider sx={{ margin: 0 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>
                      2. Address
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                      fullWidth
                      label='Street Name'
                      value={streetName}
                      onChange={e => setStreetName(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LocalPostOffice />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                      fullWidth
                      label='House Number'
                      value={houseNumber}
                      onChange={e => setHouseNumber(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LocalPostOffice />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='Apartment Number'
                      value={apartmentNumber}
                      onChange={e => setApartmentNumber(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LocalPostOffice />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                      fullWidth
                      label='Postal Code'
                      value={postalCode}
                      onChange={e => setPostalCode(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LocalPostOffice />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                      fullWidth
                      label='Town'
                      value={town}
                      onChange={e => setTown(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LocationCity />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                      required
                        label='Date of Birth'
                        renderInput={params => <TextField {...params} />}
                        value={dateOfBirth}
                        onChange={e => setDateOfBirth(e)}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                  <ButtonGroup variant='text' aria-label='outlined primary button group' sx={{ margin: 1}}>
                    <Button 
                        startIcon={<AddIcon></AddIcon>} type='submit' variant='contained' size='medium'>
                      Submit
                    </Button>
                    <Button onClick={handleClose}
                        startIcon={<UndoIcon></UndoIcon>}
                        color='warning'
                        variant='contained'>Cancel</Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Fade>
      </Box>
    </Modal>
  )
}

export default FormContactEditModal
