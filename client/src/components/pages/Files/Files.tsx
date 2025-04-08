import React from 'react';
import { FileText } from 'lucide-react';
import { mockFiles } from './FilesData';
import {
  Container,
  Title,
  FileList,
  FileCard,
  CardContent,
  IconContainer,
  Details,
  FileName,
  FileDescription
} from './styles';

const Files: React.FC = () => {
  return (
    <Container>
      <Title>Files & Materials</Title>
      
      <FileList>
        {mockFiles.map((file) => (
          <FileCard key={file._id}>
            <CardContent>
              <IconContainer>
                <FileText />
              </IconContainer>
              <Details>
                <FileName>{file.title}</FileName>
                <FileDescription>{file.description}</FileDescription>
              </Details>
            </CardContent>
          </FileCard>
        ))}
      </FileList>
    </Container>
  );
};

export default Files;