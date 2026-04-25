/** WeatherWidget отвечает за краткую сводку погоды. */
const WeatherWidget = ({ temperature, morning, day }) => (
  <div className="weather-widget">
    <span className="weather-icon" aria-hidden="true">
      ☁️
    </span>
    <strong>{temperature}</strong>
    <span>
      Утром {morning},<br /> днём {day}
    </span>
  </div>
);

export default WeatherWidget;
