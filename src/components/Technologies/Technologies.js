import React from 'react';
import { DiFirebase, DiReact, DiAptana } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  < Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle> Technologies </SectionTitle>
    <SectionText>
      I have knowledge in Frontend as in Back-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Components and Hooks, Redux, HTML, CSS, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Express.js, MongodB, DataBase
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAptana size="3rem"/>
        <ListContainer>
          <ListTitle>TESTING</ListTitle>
          <ListParagraph>
            Experience with <br />
            Cypress.io
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
