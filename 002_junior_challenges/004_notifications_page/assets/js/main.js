const data = [
  {
    name: 'Mark Webber',
    img: './assets/images/avatar-mark-webber.webp',
    do: 'react',
    to: 'My first tournament today!',
    time: '1m',
    isread: false,
    data: '',
  },
  {
    name: 'Angela Gray',
    img: './assets/images/avatar-angela-gray.webp',
    do: 'follow',
    to: 'me',
    time: '5m',
    isread: false,
    data: '',
  },
  {
    name: 'Jacob Thompson',
    img: './assets/images/avatar-jacob-thompson.webp',
    do: 'joinGroup',
    to: 'Chess Club',
    time: '1 day',
    isread: false,
    data: '',
  },
  {
    name: 'Rizky Hasanuddin',
    img: './assets/images/avatar-rizky-hasanuddin.webp',
    do: 'msgPrivate',
    to: 'me',
    time: '5 days',
    isread: true,
    data: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    name: 'Kimberly Smith',
    img: './assets/images/avatar-kimberly-smith.webp',
    do: 'comment',
    to: 'me',
    time: '1 week',
    isread: true,
    data: './assets/images/image-chess.webp',
  },
  {
    name: 'Nathan Peterson',
    img: './assets/images/avatar-nathan-peterson.webp',
    do: 'react',
    to: '5 end-game strategies to increase your win rate',
    time: '2 weeks',
    isread: true,
    data: '',
  },
  {
    name: 'Anna Kim',
    img: './assets/images/avatar-anna-kim.webp',
    do: 'leftGroup',
    to: 'Chess Club',
    time: '2 weeks',
    isread: true,
    data: '',
  },
];

const getData = (element) => {
  const notifs = document.querySelector('.notifs');
  const wrapper = document.createElement('div');
  const img = document.createElement('img');
  const text = document.createElement('div');
  const who = document.createElement('h2');
  const what = document.createElement('p');
  const to = document.createElement('span');
  const time = document.createElement('span');

  wrapper.className = 'hello';
  who.textContent = element.name;
  to.textContent = element.to;
  img.src = element.img;
  img.alt = element.name;
  time.textContent = `${element.time} ago`;
  time.className = 'text--time';
  text.className = 'text';

  const arr = [who, what];
  const res = [img, text];

  if (element.do === 'react') {
    what.textContent = 'reacted to your recent post';
    arr.push(to);
  } else if (element.do === 'joinGroup') {
    what.textContent = 'has joined your group';
    to.classList.add('group');
    arr.push(to);
  } else if (element.do === 'msgPrivate') {
    what.textContent = 'sent you a private message';
    const value = document.createElement('div');
    value.className = 'value';
    value.textContent = element.data;
    res.push(value);
  } else if (element.do === 'follow') {
    what.textContent = 'followed you';
  } else if (element.do === 'comment') {
    what.textContent = 'commented on your picture';
    const commentImg = document.createElement('img');
    commentImg.className = 'comment-img';
    commentImg.src = element.data;
    commentImg.alt = 'comment img';
    res.push(commentImg);
  } else if (element.do === 'leftGroup') {
    what.textContent = 'left the group';
    to.classList.add('group');
    arr.push(to);
  }

  const here = document.createElement('div');
  here.className = 'text--content';
  here.append(...arr);
  text.append(here, time);
  wrapper.append(...res);

  if (!element.isread) wrapper.classList.add('unread');

  notifs.appendChild(wrapper);
};

const markRead = document.getElementById('markread');
const totalUnread = document.getElementById('total-unread');

data.forEach((el) => {
  getData(el);
});
totalUnread.textContent = data.filter((element) => !element.isread).length;

markRead.addEventListener('click', () => {
  const current = Array.from(document.querySelectorAll('.unread'));
  current.forEach((el) => {
    el.classList.remove('unread');
  });
  totalUnread.textContent = '0';
});
