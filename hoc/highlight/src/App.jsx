import { useState } from 'react';
import { getHighlightType } from './highlight.js';

function New({ children }) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  );
}

function Popular({ children }) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {children}
    </div>
  );
}

function Article({ title, views }) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{title}</a>
      </h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
}

function Video({ url, views }) {
  return (
    <div className="item item-video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <p className="views">Просмотров: {views}</p>
    </div>
  );
}

function withHighlight(Component) {
  return function WithHighlight(props) {
    const content = <Component {...props} />;
    const type = getHighlightType(props.views);

    if (type === 'popular') {
      return <Popular>{content}</Popular>;
    }

    if (type === 'new') {
      return <New>{content}</New>;
    }

    return content;
  };
}

const HighlightedVideo = withHighlight(Video);
const HighlightedArticle = withHighlight(Article);

function List({ list }) {
  return list.map((item) => {
    const key = `${item.type}-${item.url ?? item.title}`;

    switch (item.type) {
      case 'video':
        return <HighlightedVideo key={key} {...item} />;

      case 'article':
        return <HighlightedArticle key={key} {...item} />;

      default:
        return null;
    }
  });
}

export default function App() {
  const [list] = useState([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12,
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175,
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253,
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]);

  return <List list={list} />;
}
