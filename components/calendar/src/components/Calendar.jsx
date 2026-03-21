const DAYS_SHORT = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const DAYS_FULL = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const MONTHS_NOM = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const MONTHS_GEN = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const toMonFirst = (jsDay) => (jsDay + 6) % 7;

function buildCalendarDays(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startOffset = toMonFirst(firstDay.getDay()); 
  const endOffset = lastDay.getDay() === 0 ? 0 : 6 - toMonFirst(lastDay.getDay()); 

  const days = [];

  for (let i = startOffset; i > 0; i--) {
    days.push({ date: new Date(year, month, 1 - i), other: true });
  }
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push({ date: new Date(year, month, d), other: false });
  }
  for (let d = 1; d <= endOffset; d++) {
    days.push({ date: new Date(year, month + 1, d), other: true });
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function Calendar({ date }) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayNum = date.getDate();
  const dayOfWeek = toMonFirst(date.getDay());

  const weeks = buildCalendarDays(date);

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{DAYS_FULL[dayOfWeek]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{dayNum}</div>
          <div className="ui-datepicker-material-month">{MONTHS_GEN[month]}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{MONTHS_NOM[month]}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col /><col /><col /><col /><col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            {DAYS_SHORT.map((d, i) => (
              <th key={i} scope="col" title={DAYS_FULL[i]}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi}>
              {week.map(({ date: d, other }, di) => {
                const isToday = !other && d.getDate() === dayNum;
                const cls = [
                  other && 'ui-datepicker-other-month',
                  isToday && 'ui-datepicker-today',
                ].filter(Boolean).join(' ') || undefined;
                return <td key={di} className={cls}>{d.getDate()}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;