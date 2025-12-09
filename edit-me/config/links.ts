import {
  SiLinkedin,
  SiGmail
} from '@icons-pack/react-simple-icons';
import { CMSLink } from 'edit-me/types/CMSLink';
import { MaltSvg, CollectiveSvg } from 'src/components/Icons/Icons';

export const links: CMSLink[] = [
  {
    href: 'mailto:dels.itconsulting@gmail.com',
    customIcon: SiGmail,
    title: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/j%C3%A9r%C3%B4me-delsaux-1743b5124/',
    icon: SiLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'https://www.malt.fr/profile/jeromedelsaux',
    customIcon: MaltSvg,
    title: 'Malt',
  },
  {
    href: 'https://www.collective.work/profile/jerome-delsaux',
    customIcon: CollectiveSvg,
    title: 'Collective',
  },
];
