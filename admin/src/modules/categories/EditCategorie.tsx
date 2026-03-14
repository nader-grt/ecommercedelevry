import { Edit, SaveButton, SimpleForm, TextInput, Toolbar, required } from "react-admin";


const CustomToolbar = () => (
  <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <SaveButton />
  </Toolbar>
);



export const EditCategorie = () => (
  <Edit>
    <SimpleForm  toolbar={<CustomToolbar />}>
      <TextInput source="id" disabled />
      
      <TextInput 
        source="name" 
        validate={required()} 
        fullWidth 
      />
    </SimpleForm>
  </Edit>
);