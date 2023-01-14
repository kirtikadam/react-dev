const heading = React.createElement('h1', {
    id: 'title',
  }, 'Heading 1');

  const heading2 = React.createElement('h2', {
    id: 'title2',
  }, 'Heading 2');

  const container = React.createElement('div', {
    id: 'container',
  }, [heading, heading2]);

  console.log(heading); // logs an object
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(container);