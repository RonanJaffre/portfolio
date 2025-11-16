import { personal } from '@content';
import { UserIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Prose from '../Prose/Prose';
import { SectionHeading } from '../SectionHeading/SectionHeading';

const AboutMe: React.FC = () => {
  return (
    <article className="md:col-span-2">
      <SectionHeading Icon={UserIcon} level={3} text="A propos de moi" />
      <Prose html={personal.body.html} />
    </article>
  );
};

export default AboutMe;
