import { List, Datagrid, TextField, EditButton } from "react-admin";

export const ListWeekDays = () => (
  <List>
    <Datagrid>
      <TextField source="id"
      sx={{
        maxWidth: '16em',
        '&.MuiTableCell-body': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
    }}
      />
      <TextField source="nameDay"
      
      sx={{
        maxWidth: '16em',
        '&.MuiTableCell-body': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
    }}
      />

    
      <EditButton />
    </Datagrid>
  </List>
);


