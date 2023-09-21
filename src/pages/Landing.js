import componentsImage from '../assets/images/components.png';
import stateImage from '../assets/images/state.png';
import eventsImage from '../assets/images/events.png';

import Concept from '../components/Concept';
import Header from '../components/Header';
import PageContent from '../components/PageContent';

const concepts = [
  {
    id: '1',
    title: 'Components',
    image: componentsImage,
    target: 'components',
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    id: '2',
    title: 'State',
    image: stateImage,
    target: 'states',
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    id: '3',
    title: 'Events',
    image: eventsImage,
    target: 'events',
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

export default function LandingPage() {
  return (
    <PageContent title='¡Bienvenido!'>
      <div>
        <Header />
        <ul id="concepts">
          {Array.isArray(concepts) ? (
            concepts.map((concept) => (
              <Concept
                id={concept.id}
                title={concept.title}
                image={concept.image}
                target={concept.target}
              />
            ))
          ) : (
            <p>No hay conceptos disponibles.</p>
          )}

        </ul>
      </div>
    </PageContent>

  );
}
