import { useDispatch } from 'react-redux';
import { Label, Form, InputName, TextFilter } from './Filter.styled';

import { getFilter } from 'Redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handlerChange = e => {
    const filterValue = e.target.value;
    dispatch(getFilter(filterValue));
  };
  return (
    <Form>
      <Label>
        <TextFilter>Find contacts by name</TextFilter>
        <InputName
          type="text"
          name="filter"
          title="find some contact"
          required
          onChange={handlerChange}
        />
      </Label>
    </Form>
  );
};
