import {
  SiLinkedin,
  SiGmail
} from '@icons-pack/react-simple-icons';
import { CMSLink } from 'edit-me/types/CMSLink';
import { MaltSvg } from 'src/components/Icons/Icons';

export const links: CMSLink[] = [
  {
    href: 'mailto:amanda.gerard19@hotmail.fr',
    customIcon: SiGmail,
    title: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/gerardamanda/',
    icon: SiLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'https://www.malt.fr/profile/amandagerard',
    customIcon: MaltSvg,
    title: 'Malt',
  },
];
