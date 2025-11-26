import { CalendarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import ButtonLink from '../Button/ButtonLink';

interface CalendlyButtonProps {
  secret?: string;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({ secret }) => {
  return (
    <ButtonLink
      href='https://calendly.com/amanda-gerard-calendar'
      size="lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <CalendarIcon className="h-6" />
      Prendre RDV
    </ButtonLink>
  );
};

export default CalendlyButton;
