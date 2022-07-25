import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import { useState } from "react";

export const ContactsTable = props => {

  return (
    <Paper sx={{ width: '50%', overflow: 'hidden' }}>
        <TableContainer sx={{ minHeight: 200, maxHeight: 440 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    </Paper>
  );
};
