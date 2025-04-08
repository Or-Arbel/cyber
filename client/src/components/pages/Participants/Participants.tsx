import React, { useState } from 'react';
import { Search, User } from 'lucide-react';
import { useParticipants } from '../../../hooks/useParticipants';
import {
  Container,
  Title,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ParticipantList,
  ParticipantCard,
  CardContent,
  Avatar,
  Details,
  Name,
  Organization,
  Contact,
  Email,
  SocialLinks,
  SocialText,
  SocialButton,
  LinkedInIcon,
  WhatsAppIcon
} from './styles';

const Participants: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: participants = [], isLoading, error } = useParticipants();

  // Ensure participants is an array before filtering
  const filteredParticipants = Array.isArray(participants) 
    ? participants.filter(participant => {
        const searchTerm = searchQuery.toLowerCase();
        return (
          participant.firstName.toLowerCase().includes(searchTerm) ||
          participant.lastName.toLowerCase().includes(searchTerm) ||
          participant.organization.toLowerCase().includes(searchTerm) ||
          participant.specialty?.toLowerCase().includes(searchTerm) ||
          participant.email.toLowerCase().includes(searchTerm)
        );
      })
    : [];

  if (isLoading) {
    return (
      <Container>
        <Title>Participants</Title>
        <div>Loading participants...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>Participants</Title>
        <div>Error loading participants. Please try again later.</div>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Participants</Title>
      
      <SearchContainer>
        <SearchIcon>
          <Search />
        </SearchIcon>
        <SearchInput 
          placeholder="Search participants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchContainer>
      
      <ParticipantList>
        {filteredParticipants.map((participant) => (
          <ParticipantCard key={participant._id}>
            <CardContent>
              <Avatar>
                <User />
              </Avatar>
              <Details>
                <Name>{participant.firstName} {participant.lastName}</Name>
                <Organization>{participant.organization}</Organization>
                <Contact>
                  <Email>{participant.email}</Email>
                  <SocialLinks>
                    <SocialText>Connect:</SocialText>
                    {participant.linkedIn && (
                      <SocialButton 
                        type="linkedin"
                        onClick={() => window.open(`https://linkedin.com/in/${participant.linkedIn}`, '_blank')}
                      >
                        <LinkedInIcon />
                      </SocialButton>
                    )}
                    {participant.whatsApp && (
                      <SocialButton 
                        type="whatsapp"
                        onClick={() => window.open(`https://wa.me/${participant.whatsApp}`, '_blank')}
                      >
                        <WhatsAppIcon />
                      </SocialButton>
                    )}
                  </SocialLinks>
                </Contact>
              </Details>
            </CardContent>
          </ParticipantCard>
        ))}
        {filteredParticipants.length === 0 && (
          <div>No participants found matching your search.</div>
        )}
      </ParticipantList>
    </Container>
  );
};

export default Participants;