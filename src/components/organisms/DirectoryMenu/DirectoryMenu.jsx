import { directories } from 'data/directories';
import { DirectoryWrapper } from './DirectoryMenu.styles';
import DirectoryItem from 'components/molecules/DirectoryItem/DirectoryItem';

const DirectoryMenu = () => {
  return (
    <DirectoryWrapper>
      {directories.map((itemData) => (
        <DirectoryItem key={itemData.id} itemData={itemData} />
      ))}
    </DirectoryWrapper>
  );
};

export default DirectoryMenu;
