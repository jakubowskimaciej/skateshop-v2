import { useNavigate } from 'react-router-dom';
import { ImageWrapper, ItemWrapper, TextWrapper } from './DirectoryItem.styles';

const DirectoryItem = ({ itemData: { id, imageUrl, title } }) => {
  const navigate = useNavigate();

  return (
    <ItemWrapper key={id} onClick={() => navigate(`/shop/${title}`)}>
      <ImageWrapper image={imageUrl} />
      <TextWrapper>
        <h2>{title}</h2>
        <span>shop now</span>
      </TextWrapper>
    </ItemWrapper>
  );
};

export default DirectoryItem;
