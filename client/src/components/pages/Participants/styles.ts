import styled from 'styled-components';
import { Linkedin, MessageCircle } from 'lucide-react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary};
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.text.secondary};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  background: ${props => props.theme.colors.bg.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.large};
  font-size: ${props => props.theme.fontSizes.sm};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const ParticipantList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ParticipantCard = styled.div`
  background: ${props => props.theme.colors.bg.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.large};
  padding: ${props => props.theme.spacing.md};
`;

export const CardContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to bottom right, ${props => props.theme.colors.bg.highlight}, ${props => props.theme.colors.border});
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    color: ${props => props.theme.colors.primary};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Details = styled.div`
  flex: 1;
`;

export const Name = styled.h3`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`;

export const Organization = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 0.5rem;
`;

export const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const Email = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.text.tertiary};
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SocialText = styled.span`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.text.tertiary};
`;

export const SocialButton = styled.button<{ type: 'linkedin' | 'whatsapp' }>`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => 
    props.type === 'linkedin' 
      ? '#0077B5' 
      : '#25D366'};
  color: white;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const LinkedInIcon = styled(Linkedin)`
  width: 1rem;
  height: 1rem;
`;

export const WhatsAppIcon = styled(MessageCircle)`
  width: 1rem;
  height: 1rem;
`;