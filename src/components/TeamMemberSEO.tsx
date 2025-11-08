import React from 'react';
import { TeamMember } from '../data/team';

interface TeamMemberSEOProps {
  member: TeamMember;
}

const TeamMemberSEO: React.FC<TeamMemberSEOProps> = ({ member }) => {
  React.useEffect(() => {
    document.title = `${member.name} - ${member.role} | Arte y Dimensiones`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        `Conozca a ${member.name}, ${member.role} en Arte y Dimensiones. ${member.shortBio}`
      );
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        `${member.name}, arquitecto Panama, ${member.role}, ${member.specializations.join(', ')}, Arte y Dimensiones`
      );
    }
  }, [member]);

  return null;
};

export default TeamMemberSEO;
