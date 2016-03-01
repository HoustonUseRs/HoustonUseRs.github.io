# How to add a new talk

You can add a talk by appending to the `rTalks` array in `assets/js/topics.js`.

For most talks:

```javascript
{
  title: 'Intro to KnitR', // a regular string
  slides: './intro-to-knitr/', // a link to slides or notes, can be absolute or relative, will be linked with title text
  description: 'This is a talk about [KnitR](http://yihui.name/knitr/)', // a markdown string
  meetup: 'http://www.meetup.com/houstonr/events/227950530/', // Link to Meetup event
  date: 20160202 // YYYYMMDD
}
```

For talks that are part of a series:

```javascript
{
  title: 'Time Series Forecasting',
  parts: [{ // an array of the parts
    title: 'Part 1',
    slides: 'http://www.slideshare.net/egoodwintx/hrug-intro-to-forecasting',
    meetup: 'http://www.meetup.com/houstonr/events/219352785/',
    date: 20150105
  }, {
    title: 'Part 2 - Discussing dummy variables and transform methods',
    slides: 'http://www.slideshare.net/egoodwintx/intro-to-forecasting-part-2-hrug',
    meetup: 'http://www.meetup.com/houstonr/events/220042625/',
    date: 20150203
  }, {
    title: 'Part 3',
    slides: 'http://www.slideshare.net/egoodwintx/hrug-intro-to-forecasting-3',
    meetup: 'http://www.meetup.com/houstonr/events/222824502/',
    date: 20150602
  }, {
    title: 'Part 4 - A discussion of stationarity and ARIMA models',
    slides: 'http://www.slideshare.net/egoodwintx/intro-to-forecasting-in-r-part-4',
    meetup: 'http://www.meetup.com/houstonr/events/227097955/',
    date: 20151201
  }]
}
```