import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { useGallery } from '../../../hooks/useGallery';
import {
  Container,
  Header,
  Title,
  ButtonGroup,
  AddButton,
  SearchContainer,
  SearchIcon,
  SearchInput,
  GalleryGrid,
  GalleryCard,
  ImageContainer,
  Image,
  CardContent,
  CardTitle,
  CardDate,
  Uploader,
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  UploadForm,
  FormGroup,
  Label,
  Input,
  FileInput,
  UploadButton
} from './styles';

const Gallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newImage, setNewImage] = useState({
    title: '',
    file: null as File | null
  });

  const { data: galleryItems = [], isLoading, error } = useGallery();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setNewImage({ title: '', file: null });
  };

  // Ensure galleryItems is an array before filtering
  const filteredGalleryItems = Array.isArray(galleryItems) 
    ? galleryItems.filter(item => {
        const searchTerm = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(searchTerm) ||
          item.description?.toLowerCase().includes(searchTerm) ||
          item.uploader.firstName.toLowerCase().includes(searchTerm) ||
          item.uploader.lastName.toLowerCase().includes(searchTerm)
        );
      })
    : [];

  if (isLoading) {
    return (
      <Container>
        <Title>Photo Gallery</Title>
        <div>Loading gallery...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>Photo Gallery</Title>
        <div>Error loading gallery. Please try again later.</div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Photo Gallery</Title>
        <ButtonGroup>
          <AddButton onClick={() => setIsModalOpen(true)}>
            <Plus />
          </AddButton>
        </ButtonGroup>
      </Header>
      
      <SearchContainer>
        <SearchIcon>
          <Search />
        </SearchIcon>
        <SearchInput 
          placeholder="Search photos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchContainer>
      
      <GalleryGrid>
        {filteredGalleryItems.map((item) => (
          <GalleryCard key={item._id}>
            <ImageContainer>
              <Image src={item.imageUrl} alt={item.title} />
            </ImageContainer>
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDate>{item.date}</CardDate>
              <Uploader>
                Uploaded by: {item.uploader.firstName} {item.uploader.lastName}
              </Uploader>
            </CardContent>
          </GalleryCard>
        ))}
        {filteredGalleryItems.length === 0 && (
          <div>No photos found matching your search.</div>
        )}
      </GalleryGrid>

      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <ModalTitle>Upload New Image</ModalTitle>
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <X />
              </CloseButton>
            </ModalHeader>
            <UploadForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  value={newImage.title}
                  onChange={(e) => setNewImage(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter image title"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="image">Image</Label>
                <FileInput
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  required
                />
              </FormGroup>
              <UploadButton type="submit">
                Upload
              </UploadButton>
            </UploadForm>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Gallery;