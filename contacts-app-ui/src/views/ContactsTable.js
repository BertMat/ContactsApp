import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/AddBox'
import SaveIcon from '@mui/icons-material/Save'
import EditIcon from '@mui/icons-material/Edit'
import UndoIcon from '@mui/icons-material/Undo'
import DeleteIcon from '@mui/icons-material/Delete'
import RefreshIcon from '@mui/icons-material/Refresh'
import ButtonGroup from '@mui/material/ButtonGroup'
import FormContactModal from 'src/modals/FormContactModal'
import Divider from '@mui/material/Divider'
import { useState, useEffect } from "react";
import { SnackbarProvider, useSnackbar } from 'notistack'
import API from 'src/api'

const columns = [    
  { id: 'firstName', label: 'First Name', minWidth: 170, align: 'center', includeInHead: true },
  { id: 'lastName', label: 'Last Name', minWidth: 170, align: 'center', includeInHead: true },
  { id: 'streetName', label: 'Street Name', minWidth: 170, align: 'center', includeInHead: true },
  { id: 'houseNumber', label: 'House Number', minWidth: 70, align: 'center', includeInHead: true },
  { id: 'apartmentNumber', label: 'Apartment Number', minWidth: 70, align: 'center', includeInHead: true },
  { id: 'postalCode', label: 'Postal Code', minWidth: 70, align: 'center', includeInHead: true },
  { id: 'town', label: 'Town', minWidth: 170, align: 'center', includeInHead: true },
  { id: 'phoneNumber', label: 'Phone Number', minWidth: 100, align: 'center', includeInHead: true },
  { id: 'dateOfBirth', label: 'Date of Birth', minWidth: 170, align: 'center', includeInHead: true,
  type: 'date' },
  { id: 'age', label: 'Age', minWidth: 50, align: 'center', includeInHead: true },
  { id: 'actions', label: 'Actions', minWidth: 50, align: 'center', colSpan: 1, includeInHead: true }
]
export const ContactsTable = props => {
    const [rows, setRows] = useState([])
    const [contacts, setContacts] = useState([])
    const [editedContacts, setEditedContacts] = useState([])
    const [newContacts, setNewContacts] = useState([])
    const [newContact, setNewContact] = useState()
    const [deletedContactIds, setDeletedContactIds] = useState([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const { enqueueSnackbar } = useSnackbar()
    const [open, setOpen] = useState(false)
    const [handleRefresh, setHandleRefresh] = useState(true)

    async function fetchData() {    
        return API.get('Contacts', {
        })
          .then(data => {
            return data.data
          })
          .then(data => {
            setContacts(data)
            setRows(data)
            handleSuccessVariant('success')
          })
          .catch(err => {
            handleErrorVariant('error')
          })
      }
    async function addNewContacts(credentials)
    {
        return API.post('Contacts/Serial', JSON.stringify(credentials))
            .then(data => {
                var variant = 'success'
                enqueueSnackbar('Contacts have been successfully added', {variant})
                setHandleRefresh(true)
            })
            .catch(err => {
                var variant = 'error'
                enqueueSnackbar('Error was encountered while trying to add contacts', {variant})
            })
    }
    async function saveData()
    {
        if(newContacts != null && newContacts.length > 0)
        {
            addNewContacts(newContacts)
            setNewContacts([])
        }
    }
    function undoChanges()
    {
        setRows(contacts)
        setNewContact(null)
        setNewContacts([])
        setDeletedContactIds([])
        setEditedContacts([])
    }

    function handleOpen()
    {
        setOpen(true)
    }
    function handleClose()
    {
        setOpen(false)
    }
  function handleSuccessVariant(variant) {
    enqueueSnackbar('Contacts have been successfully refreshed', { variant })
  }
  function handleErrorVariant(variant) {
    enqueueSnackbar('Error was encountered while refreshing the contact list', { variant })
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  useEffect(() =>
  {
    if(newContact != null)
        {
            let tmpArray = [...contacts]
            let newArray = [...newContacts]
            newArray.push(newContact)
            tmpArray.push(...newArray)
            setRows(tmpArray)
            setNewContacts(newArray)
            setNewContact(null)
        }
  }, [newContact])

  useEffect(() =>
  {
    if(handleRefresh)
    {
        fetchData()
        setHandleRefresh(false)
    }
  }, [handleRefresh])
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <SnackbarProvider maxSnack={3}>
            <FormContactModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}
            newContact={newContact} setNewContact={setNewContact}
            ></FormContactModal>
        </SnackbarProvider>
        <TableContainer sx={{ minHeight: 200, maxHeight: 440 }}>
            <Table>
                <TableHead>
                    <TableRow>
                    {columns
                        .filter(column => column.includeInHead)
                        .map(column => (
                            <TableCell align={column.align} sx={{ fontWeight:'bold',  minWidth: column.minWidth }}>
                                {column.label}
                            </TableCell>
                        ))
                    }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .map(row =>
                        {
                            return (
                                <TableRow hover>
                                    {
                                        columns
                                            .filter(column => column.id !== 'actions')
                                            .map(column => {
                                                const value = row[column.id]
                                                return (
                                                    <TableCell align='center'>
                                                        {column.format && typeof value === 'number'
                                ? column.format(value)
                                : typeof column.type !== 'undefined' && column.type === 'date'
                                ? new Date(value).toLocaleDateString()
                                : value}
                                                    </TableCell>
                                                )
                                            })
                                    }
                                    <TableCell component='th' scope='row' align='center'>
                                        <ButtonGroup variant='text' aria-label='outlined primary button group'>
                                        <Button
                                            startIcon={<EditIcon></EditIcon>}
                                            color='info'
                                            type='submit'
                                            variant='contained'
                                            size='small'
                                            onClick={e => {
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            startIcon={<DeleteIcon></DeleteIcon>}
                                            color='error'
                                            variant='contained'
                                            size='small'
                                            onClick={e => {
                                            }}
                                        >
                                            Delete
                                        </Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                </TableBody>
            </Table>
        </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Divider></Divider>
        <ButtonGroup variant='text' aria-label='outlined primary button group' sx={{ margin: 1}}>
        <Button onClick={handleOpen}    
        startIcon={<AddIcon></AddIcon>}    
        color='success'
        type='submit'
        variant='contained'>Add new contact</Button>
        <Button onClick={saveData}
        startIcon={<SaveIcon></SaveIcon>}    
        color='info'
        type='submit'
        variant='contained'>Save changes</Button>
        <Button onClick={undoChanges}
        startIcon={<UndoIcon></UndoIcon>}
        color='warning'
        variant='contained'>Cancel</Button>
        <Button onClick={fetchData}
        startIcon={<RefreshIcon></RefreshIcon>}
        color='secondary'
        type='submit'
        variant='contained'>Refresh</Button>
        </ButtonGroup>
    </Paper>
  );
};
