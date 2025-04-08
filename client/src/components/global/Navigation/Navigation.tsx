import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Users, MessageSquare, FileText, Image } from 'lucide-react';
import {
  NavigationContainer,
  NavContent,
  NavButton,
  IconWrapper,
  Label
} from './styles';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: Calendar, label: "Agenda", path: "/agenda" },
    { icon: Users, label: "Participants", path: "/participants" },
    { icon: MessageSquare, label: "Chat", path: "/chat" },
    { icon: FileText, label: "Files", path: "/files" },
    { icon: Image, label: "Gallery", path: "/gallery" }
  ];

  return (
    <NavigationContainer>
      <NavContent>
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavButton
            key={path}
            isActive={location.pathname === path || (path === '/agenda' && location.pathname === '/')}
            onClick={() => navigate(path)}
          >
            <IconWrapper>
              <Icon />
            </IconWrapper>
            <Label>{label}</Label>
          </NavButton>
        ))}
      </NavContent>
    </NavigationContainer>
  );
};

export default Navigation;