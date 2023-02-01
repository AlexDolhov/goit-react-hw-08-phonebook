import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={handleChange} />
    </Label>
  );
};

export default Filter;
