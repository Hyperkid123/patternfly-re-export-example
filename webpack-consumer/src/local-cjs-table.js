import React from 'react'
import { Table, TableHeader, TableBody } from '@patternfly/react-table/dist/js';

const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
const rows = [
  ['Repository one', 'Branch one', 'PR one', 'Workspace one', 'Commit one'],
  ['Repository two', 'Branch two', 'PR two', 'Workspace two', 'Commit two'],
  ['Repository three', 'Branch three', 'PR three', 'Workspace three', 'Commit three']
];

const LocalCJSTable = () => (
  <Table
    aria-label="Simple Table"
    variant={'default'}
    cells={columns}
    rows={rows}
  >
  <TableHeader />
  <TableBody />
</Table>
)

export default LocalCJSTable;
