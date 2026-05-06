import { useState } from 'react';
import { formatElapsedTime } from './dateTime.js';

function DateTime({ date }) {
  return <p className="date">{date}</p>;
}

function withPrettyDate(Component) {
  return function WithPrettyDate(props) {
    return <Component {...props} date={formatElapsedTime(props.date)} />;
  };
}

const DateTimePretty = withPrettyDate(DateTime);

function Video({ url, date }) {
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <DateTimePretty date={date} />
    </div>
  );
}

function VideoList({ list }) {
  return list.map((item) => (
    <Video key={`${item.url}-${item.date}`} url={item.url} date={item.date} />
  ));
}

export default function App() {
  const [list] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00',
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00',
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00',
    },
  ]);

  return <VideoList list={list} />;
}
