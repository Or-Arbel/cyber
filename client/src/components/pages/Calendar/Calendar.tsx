import React from 'react';
import { mockCalendarEvents } from './CalendarData';
import {
  Container,
  Header,
  Title,
  DayFilter,
  DayButton,
  EventList,
  EventCard,
  EventContent,
  Indicator,
  Details,
  EventHeader,
  DateTime,
  DateText,
  TimeText,
  Location,
  LocationText,
  EventTitle,
  Description
} from './styles';

interface CalendarProps {
  selectedDay: string;
  setSelectedDay: (day: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDay, setSelectedDay }) => {
  const dates = Object.keys(mockCalendarEvents);
  const filteredDates = selectedDay === 'all' ? dates : dates.filter(date => date.includes(selectedDay));

  return (
    <Container>
      <Header>
        <Title>Agenda</Title>
      </Header>
      
      <DayFilter>
        <DayButton 
          isActive={selectedDay === 'all'}
          onClick={() => setSelectedDay('all')}
        >
          All Days
        </DayButton>
        {dates.map(date => (
          <DayButton 
            key={date}
            isActive={selectedDay === date}
            onClick={() => setSelectedDay(date)}
          >
            {date}
          </DayButton>
        ))}
      </DayFilter>
      
      <EventList>
        {filteredDates.map(date => (
          mockCalendarEvents[date].map((event, index) => (
            <EventCard key={event._id || index}>
              <EventContent>
                <Indicator />
                <Details>
                  <EventHeader>
                    <DateTime>
                      <DateText>{date}</DateText>
                      <TimeText>
                        {event.allDay ? 'All Day' : `${new Date(event.startDateTime).toLocaleTimeString()} - ${new Date(event.endDateTime).toLocaleTimeString()}`}
                      </TimeText>
                    </DateTime>
                    {event.location && (
                      <Location>
                        <LocationText>{event.location}</LocationText>
                      </Location>
                    )}
                  </EventHeader>
                  <EventTitle>{event.title}</EventTitle>
                  {event.description && (
                    <Description>{event.description}</Description>
                  )}
                </Details>
              </EventContent>
            </EventCard>
          ))
        ))}
      </EventList>
    </Container>
  );
};

export default Calendar;