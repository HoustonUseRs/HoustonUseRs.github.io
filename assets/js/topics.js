// {
//   title: '',
//   slides: '',
//   description: '',
//   meetup: '',
//   date: YYYYMMDD,
//   parts: [{
//     title: '',
//     slides: '',
//     description: '',
//     meetup: '',
//     date: YYYYMMDD
//   }]
// }

var rTalks = [
  {
    title: 'Natural language processing with R',
    slides: 'http://www.slideshare.net/egoodwintx/hrug-text-mining-to-construct-causal-models',
    description: 'Scott shares some of his PhD work using natural language processing to pull useful information out from medical records data. Topics touched upon includes text pre-processing, Bayesian networks, and prediction performance (ROC curves).',
    meetup: 'https://www.meetup.com/houstonr/events/232829992/',
    date: 20160802
  },
  {
    title: 'useR2016 - Conference Updates',
    slides: 'http://rpubs.com/vakjha/194071',
    description: 'Varun recaps and shares his expereience at UseR 2016',
    meetup: 'http://www.meetup.com/houstonr/events/232109289/',
    date: 20160705
  },
  {
    title: 'Workflow Series Capstone - Pulling together the pieces',
    description: ' ',
    meetup: 'http://www.meetup.com/houstonr/events/230916869/',
    parts: [{
      title: 'R Style Guide',
      slides: 'http://houstonusers.github.io/r-style-guide',
      description: 'Ju talks about the R style guide.  Presentation repo [*here*](https://github.com/houstonusers/r-style-guide).'
    }, {
      title: 'Workflow Series Capstone',
      slides: '',
      description: 'Ed guides us on how to pull together all the pieces we\'ve been discussing so far this year to make an HRUG package'
    }],
    date: 20160607
  },
  {
    title: 'ggplot2 Themes and Unit Testing',
    description: ' ',
    meetup: 'http://www.meetup.com/houstonr/events/228848273/',
    parts: [{
      title: 'Introduction to ggplot2 Themes',
      slides: 'http://houstonusers.github.io/hrug_pres_ggtheme',
      description: 'Boyd shares the whys and hows of ggplot2 theming.  Presentation repo [*here*](https://github.com/bskelton/hrug_pres_ggtheme).'
    }, {
      title: 'Unit Testing in R',
      slides: 'http://www.slideshare.net/egoodwintx/unit-testing-in-r-with-testthat-hrug',
      description: 'Ed talks about unit testing and using the testthat package.  [*Code*](https://github.com/egoodwintx/hrugtestexample) of test example.'
    }],
    date: 20160405
  },
  {
    title: 'Production Code in R',
    slides: './production-code-in-r/',
    description: 'Hadley Wickam shares his thoughts about production code in R.',
    meetup: 'http://www.meetup.com/houstonr/events/227950604/',
    date: 20160301
  }, {
    title: 'Intro to KnitR',
    slides: './intro-to-knitr/',
    description: 'For literate programming, reproducible research and constructing reports',
    meetup: 'http://www.meetup.com/houstonr/events/227950530/',
    date: 20160202
  }, {
    title: 'Intro to RStudio',
    slides: 'http://www.slideshare.net/egoodwintx/intro-to-rstudio',
    description: 'An introductory tour of RStudio and some of the tools that it makes available to R developers',
    meetup: 'http://www.meetup.com/houstonr/events/227558375/',
    date: 20160105
  }, {
    title: 'Intro to flowr',
    slides: 'http://sahilseth.com/slides/flowrintro/index.html',
    description: '[*flowr*](http://docs.flowr.space/) helps you implement complex workflows',
    meetup: 'http://www.meetup.com/houstonr/events/225718611/',
    date: 20151006
  }, {
    title: 'Fantasy Football Draft Optimization in R',
    slides: 'http://www.slideshare.net/egoodwintx/fantasy-football-draft-optimization-in-r-hrug',
    description: '[*code*](https://github.com/egoodwintx/FantasyFootballR)',
    meetup: 'http://www.meetup.com/houstonr/events/225718611/',
    date: 20151006
  }, {
    title: 'Time Series Forecasting',
    parts: [{
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
  }, {
    title: 'Applications of Growth Mixture Models',
    slides: 'https://docs.google.com/presentation/d/1-kj3fo6eqa5emvcrR8JNZTYjkIX50DVX32Ntly1Xd-0/pub?start=false&loop=false&delayms=3000',
    description: '"The Growth Mixture Model (GMM) identifies distinct subgroups of trajectories within longitudinal data."',
    meetup: 'http://www.meetup.com/houstonr/events/223458091/',
    date: 20150707
  }
];
