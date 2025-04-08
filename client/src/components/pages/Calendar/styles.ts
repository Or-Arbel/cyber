import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.div`
  margin-bottom: 0.5rem;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary};
`;

export const DayFilter = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DayButton = styled.button<{ isActive: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 500;
  flex-shrink: 0;
  background: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.bg.card};
  color: ${props => props.isActive ? 'white' : props.theme.colors.text.secondary};
  border: ${props => props.isActive ? 'none' : `1px solid ${props.theme.colors.border}`};
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EventCard = styled.div`
  background: ${props => props.theme.colors.bg.card};
  backdrop-filter: blur(8px);
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.card};
`;

export const EventContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Indicator = styled.div`
  width: 0.5rem;
  background: ${props => props.theme.colors.primary};
  border-radius: 9999px;
  flex-shrink: 0;
  align-self: stretch;
`;

export const Details = styled.div`
  flex: 1;
`;

export const EventHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

export const DateTime = styled.div``;

export const DateText = styled.h3`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary};
`;

export const TimeText = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text.secondary};
`;

export const Location = styled.div`
  background: ${props => props.theme.colors.bg.highlight};
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.medium};
`;

export const LocationText = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
`;

export const EventTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`;

export const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.text.secondary};
`;