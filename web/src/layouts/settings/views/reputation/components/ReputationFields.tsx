import { Group, TextInput, NumberInput, ActionIcon, Tooltip } from '@mantine/core';
import { TbTrash } from 'react-icons/tb';
import { useStore, useSetters } from '../../../../../store';

const ReputationFields: React.FC = () => {
  const reputation = useStore((state) => state.reputation);
  const setReputation = useSetters((setter) => setter.setReputation);

  const handleChange = (value: string | number | undefined, index: number, property: 'name' | 'min') => {
    setReputation((prevState) => {
      return prevState.map((item, indx) => (index === indx ? { ...item, [property]: value } : item));
    });
  };

  const handleRowDelete = (index: number) => {
    setReputation((prevState) => prevState.filter((obj, indx) => indx !== index));
  };

  return (
    <>
      {reputation.map((field, index) => (
        <Group
          position="center"
          key={`reputation-${index}`}
          mt={index === 0 ? 0 : 16}
          noWrap
          spacing={16}
          sx={{ fontSize: 16 }}
        >
          <TextInput
            sx={{ width: '100%' }}
            placeholder="Reputation"
            value={field.name as string}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, index, 'name')}
          />
          <NumberInput
            sx={{ width: '100%' }}
            placeholder="Min"
            value={field.min as number}
            onChange={(e) => handleChange(e, index, 'min')}
          />
          <Tooltip label="Delete row">
            <ActionIcon color="red.4" variant="transparent" onClick={() => handleRowDelete(index)}>
              <TbTrash size={24} />
            </ActionIcon>
          </Tooltip>
        </Group>
      ))}
    </>
  );
};

export default ReputationFields;
