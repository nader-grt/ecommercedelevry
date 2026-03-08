import { Edit, SimpleForm, TextInput } from "react-admin";

export const EditUser = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
     
    </SimpleForm>
  </Edit>
);

// export default EditUser