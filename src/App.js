import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';

export default function App() {
  const arrs = [[1], [[2], [3]], [[[4]]]];

  const fx = arrs => arrs.flat(3);

  console.log(fx(arrs));

  return (
    <div>
      <Section title="Top week">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}
