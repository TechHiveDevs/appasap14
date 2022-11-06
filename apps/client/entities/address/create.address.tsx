
import { 
  Create,
  SimpleForm,
  
TextInput,
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateAddress(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="newstringfield" variant="outlined"   />
<NumberInput source="building" variant="outlined"  />
<NumberInput source="zip" variant="outlined"  />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
