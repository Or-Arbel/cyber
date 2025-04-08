import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Logo = styled.div`
  width: 2rem;
  height: 2rem;
  background: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.primaryLight});
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary};
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.button`
  width: 2rem;
  height: 2rem;
  background: linear-gradient(to bottom right, ${props => props.theme.colors.bg.highlight}, ${props => props.theme.colors.border});
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    color: ${props => props.theme.colors.primary};
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`;