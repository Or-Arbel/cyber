import styled from 'styled-components';

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

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FileCard = styled.div`
  background: ${props => props.theme.colors.bg.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.large};
  padding: ${props => props.theme.spacing.md};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CardContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: ${props => props.theme.colors.bg.highlight};
  border-radius: ${props => props.theme.borderRadius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    color: ${props => props.theme.colors.primary};
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const Details = styled.div`
  flex: 1;
`;

export const FileName = styled.h3`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`;

export const FileDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text.secondary};
`;