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
import EditIcon from '@mui/icons-material/Edit'
import UndoIcon from '@mui/icons-material/Undo'
import DeleteIcon from '@mui/icons-material/Delete'
import RefreshIcon from '@mui/icons-material/Refresh'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useState } from "react";
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
    const [contacts, setContacts] = useState([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    async function fetchData() {    
        return API.get('Contacts', {
        })
          .then(data => {
            return data.data
          })
          .then(data => {
            setContacts(data)
          })
          .catch(err => {
            console.log(err)
          })
      }
    async function saveData()
    {
        
    }

      
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                    {contacts
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
        <ButtonGroup variant='text' aria-label='outlined primary button group'>
        <Button onClick={saveData}        
        color='success'
        type='submit'
        variant='contained'><AddIcon></AddIcon> Save changes</Button>
        <Button onClick={saveData}        
        color='warning'
        variant='contained'><UndoIcon></UndoIcon> Cancel</Button>
        <Button onClick={fetchData}        
        color='secondary'
        type='submit'
        variant='contained'><RefreshIcon></RefreshIcon> Refresh</Button>
        </ButtonGroup>
    </Paper>
  );
};
