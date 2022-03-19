import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Hernán Bonavota's<br />
        Portfolio
      </SectionTitle>
      <SectionText>
        I am an agile programmer, with initiative, positive.
        My main objective is to expand my knowledge, continue developing professionally in the IT industry.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/bonavota/'}>Contact me</Button>
    </LeftSection>
  </Section>

);

export default Hero;