import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const LinksPage = () => {
  const links = [
    { name: 'Everdell', url: 'https://www.wydawnictworebel.pl/repository/files/instrukcje/Instrukcja_Everdell.pdf' },
    { name: 'Everdell: Perłowy Potok', url: 'https://www.wydawnictworebel.pl/repository/files/instrukcje/Instrukcja_Everdell-Perlowy-potok.pdf' },
    { name: 'Everdell: Święto Lata', url: 'https://www.wydawnictworebel.pl/repository/files/instrukcje/Instrukcja_Everdell-Swieto-lata.pdf' },
    { name: 'Everdell: Zimowy szczyt', url: 'https://www.wydawnictworebel.pl/repository/files/instrukcje/Instrukcja_Everdell-Zimowy-szczyt.pdf' },

    { name: 'Najlepsza gra o psach 2', url: 'https://www.wydawnictworebel.pl/repository/files/instrukcje/Instrukcja_Everdell-Zimowy-szczyt.pdf' },
    
    { name: 'Na skrzydłach', url: 'https://www.wydawnictworebel.pl/repository/files/instrukcje/Instrukcja_Na-skrzydlach-2020.pdf' },
    { name: 'Na skrzydłach: Ptaki Azji', url: 'https://www.wydawnictworebel.pl/repository/files/instrukcje/Instrukcja_Na-skrzydlach-Ptaki-Azji.pdf' },
    { name: 'Na skrzydłach: Ptaki Europy', url: 'https://www.wydawnictworebel.pl/repository/files/instrukcje/Instrukcja_Na-skrzydlach-ptaki-europy.pdf' },
    { name: 'Na skrzydłach: Ptaki Oceanii', url: 'https://www.wydawnictworebel.pl/repository/files/instrukcje/Instrukcja_NS-Ptaki-Oceanii.pdf' },

    { name: 'Wsiąść do pociągu', url: 'https://www.wydawnictworebel.pl/repository/files/instrukcje/TTR2_europe_rules_PL.pdf' },
 

  ];

  return (
    <Container>
      <h3>Instrukcje do gier:</h3>
      <ListGroup>
        {links.map(link => (
          <ListGroup.Item key={link.url}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default LinksPage;